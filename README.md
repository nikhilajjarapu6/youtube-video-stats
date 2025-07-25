# YouTube Video Stats

This project allows users to input three YouTube video links and displays their live view counts, likes, and comments, along with the video thumbnails.

## Project Structure

```
youtube-video-stats
├── src
│   ├── index.html       # HTML structure for the application
│   ├── app.js           # JavaScript logic for fetching video statistics
│   └── styles.css       # CSS styles for the application
├── package.json         # npm configuration file
└── README.md            # Project documentation
```

## Getting Started

To get started with the project, follow these steps:

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd youtube-video-stats
   ```

2. **Install dependencies**:
   Make sure you have Node.js installed. Then run:
   ```
   npm install
   ```

3. **Open the application**:
   Open `src/index.html` in your web browser to view the application.

## Usage

1. Paste up to three YouTube video links into the input fields provided.
2. Click the "Fetch Stats" button to retrieve and display the live view counts, likes, and comments for each video.
3. The video thumbnails will be displayed alongside their respective statistics.

## API Key

You will need a valid YouTube Data API key to fetch video statistics. Make sure to replace the placeholder API key in `src/app.js` with your own.

## License

This project is licensed under the MIT License.