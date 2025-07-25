const API_KEY = "AIzaSyAuf1xycOHmyRHJJE_yuwo3LZ698ZVPCPg";
const videoLinks = [
    "https://youtu.be/mjBym9uKth4?si=PyUAdX0tRyMUtQJ0",
    "https://youtu.be/CllWVGWhOEs?si=Iy9rko7vAHAONG9R",
    "https://youtu.be/PlsUPeje14M?si=n4K-eLTnUNhNNIAp"
];

window.addEventListener("DOMContentLoaded", async () => {
    const container = document.getElementById("video-stats-container");
    container.innerHTML = ""; // Clear any existing content

    for (const link of videoLinks) {
        const videoId = extractVideoId(link);
        if (!videoId) {
            container.innerHTML += `<div class="video-card">Invalid YouTube link!</div>`;
            continue;
        }
        const stats = await fetchVideoStats(videoId);
        if (stats) {
            container.innerHTML += renderStats(stats);
        } else {
            container.innerHTML += `<div class="video-card">Failed to fetch video stats.</div>`;
        }
    }
});

function extractVideoId(url) {
    const regex = /(?:youtu\.be\/|youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|v\/))([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
}

async function fetchVideoStats(videoId) {
    const apiUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${API_KEY}`;
    try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        if (data.items && data.items.length > 0) {
            return data.items[0];
        }
    } catch (e) {}
    return null;
}

function formatCount(num) {
    num = Number(num);
    if (num >= 1_000_000) return (num / 1_000_000).toFixed(1).replace(/\.0$/, '') + "M";
    if (num >= 1_000) return (num / 1_000).toFixed(1).replace(/\.0$/, '') + "k";
    return num.toString();
}

function renderStats(video) {
    const { title, thumbnails } = video.snippet;
    const { viewCount, likeCount, commentCount } = video.statistics;
    return `
        <div class="video-card">
            <a href="https://youtu.be/${video.id}" target="_blank">
                <img src="${thumbnails.medium.url}" alt="Thumbnail">
            </a>
            <div class="video-info">
                <h2>${title}</h2>
                <p>Views: ${formatCount(viewCount)}</p>
                <p>Likes: ${formatCount(likeCount)}</p>
                <p>Comments: ${formatCount(commentCount)}</p>
            </div>
        </div>
    `;
}
