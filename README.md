# URL Shortener Microservice

A modern, fast, and reliable URL shortening service built with Node.js, Express, and MongoDB. This microservice allows you to convert long URLs into short, easily shareable links.

![URL Shortener Screenshot](https://cdn.freecodecamp.org/universal/favicons/favicon-16x16.png)

## Features

- 🚀 **Fast & Simple**: Get your shortened URL in seconds
- 🆓 **Free to Use**: No registration required
- 💪 **Reliable**: Your links will always work
- 🔒 **Secure**: URLs are validated before processing
- 📱 **Responsive**: Works great on desktop and mobile devices

## API Usage

### Shorten a URL

**Endpoint:** `POST /api/shorturl`

**Request:**
```http
POST /api/shorturl
Content-Type: application/x-www-form-urlencoded

url=https://www.example.com
```

**Response:**
```json
{
  "original_url": "https://www.example.com",
  "short_url": "1234"
}
```

### Access Shortened URL

**Endpoint:** `GET /api/shorturl/:short_url`

Simply visit `/api/shorturl/1234` and you'll be redirected to the original URL.

## Technology Stack

- **Backend:** Node.js, Express
- **Database:** MongoDB
- **Frontend:** HTML5, CSS3
- **Additional Tools:** 
  - cors (Cross-Origin Resource Sharing)
  - dotenv (Environment Variables)
  - body-parser (Request Parsing)
  - mongoose (MongoDB ODM)

## Local Development

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd url-shortener
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   - Create a `.env` file in the root directory
   - Add your MongoDB URI:
     ```
     MONGO_URI=your_mongodb_uri
     PORT=3000
     ```

4. **Start the server:**
   ```bash
   npm start
   ```

5. **Visit the application:**
   Open `http://localhost:3000` in your browser

## Environment Variables

- `MONGO_URI`: Your MongoDB connection string
- `PORT`: Port number for the server (default: 3000)

## Project Structure

```
url-shortener/
├── public/
│   └── style.css
├── views/
│   └── index.html
├── index.js
├── package.json
├── .env
└── README.md
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is part of the FreeCodeCamp curriculum and is licensed under the MIT License.

## Acknowledgments

- [FreeCodeCamp](https://www.freecodecamp.org/) for the project idea and requirements
- Original project instructions can be found [here](https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/url-shortener-microservice)

---
