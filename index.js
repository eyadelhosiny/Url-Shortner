require('dotenv').config();
const express = require('express');
const cors = require('cors');
const dns = require('dns');
const app = express();
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI)

const urlSchema = new mongoose.Schema({
    original_url: String,
    short_url: String
})
const Url = mongoose.model("URL", urlSchema)

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/public', express.static(`${process.cwd()}/public`));

app.get('/', function(req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});
// middleware to check isValidUrl
app.use("/api/shorturl", (req, res, next) => {
    const url = req.body.url;
    const isValid = isValidUrl(url)
    if(!isValid) return res.json({ error: 'invalid url' });
    next();
});
app.post("/api/shorturl", async (req, res) => {
    const originalUrl = req.body.url;
    let urlDoc = await Url.findOne({ original_url: originalUrl });
    if (urlDoc) return res.json({ original_url: urlDoc.original_url, short_url: urlDoc.short_url });
    const shortUrl = Math.floor(Math.random() * 10000).toString();
    urlDoc = new Url({ original_url: originalUrl, short_url: shortUrl });
    await urlDoc.save();
    res.json({ original_url: urlDoc.original_url, short_url: urlDoc.short_url });
});

app.get("/api/shorturl/:short_url", async (req, res) => {
    const shortUrl = req.params.short_url;
    const urlDoc = await Url.findOne({ short_url: shortUrl });
    if (urlDoc) {
        return res.redirect(urlDoc.original_url);
    }
    res.json({ error: 'invalid url.' });
});

// Your first API endpoint
app.get('/api/hello', function(req, res) {
    res.json({ greeting: 'hello API' });
});

app.listen(port, function() {
    console.log(`Listening on port ${port}`);
});

// using dns lookup to validate url
function isValidUrl(urlString) {
    const hostName = getHostName(urlString)
    dns.lookup(hostName, (err, address, family) => {
        if (err || !hostName) {
            return false
        } else {
            return true
        }
    })
    return true
}

function getHostName(input) {
    try {
        if (input.startsWith("http://") || input.startsWith("https://")) {
            const url = new URL(input);
            return url.hostname;
        }
        return input.split('/')[0];
    } catch (err) {
        return null;
    }
}