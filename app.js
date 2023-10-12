// Get references to the video list and video player elements
const videoList = document.getElementById('video-list');
const videoPlayer = document.getElementById('video-player');
const title = document.getElementById('title');
// Add a click event listener to the video list
videoList.addEventListener('click', function (event) {
  // Check if a video-card (list item) was clicked
  if (event.target.classList.contains('video-card')) {
    // Get the data-src attribute of the clicked video-card
    const videoSource = event.target.getAttribute('data-src');
    // Update the video source and play the video
    videoPlayer.src = videoSource;
    videoPlayer.load(); // Load the new video source
    videoPlayer.play();

    var xx = videoSource.slice(9, -4);
    title.textContent = xx;
    
  }
});

function pauseVideo() { 
        videoPlayer.pause(); 
} 

function playVideo() { 
        videoPlayer.play(); 
} 