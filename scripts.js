// document.addEventListener("DOMContentLoaded", () => {
//     console.log("Website loaded successfully!");
// });
// document.addEventListener("DOMContentLoaded", function () {
//     document.querySelectorAll(".nav-links a").forEach(link => {
//         link.addEventListener("click", function (event) {
//             event.preventDefault(); // Stop immediate navigation
            
//             const targetURL = this.href; // Store the URL
//             const preloader = document.querySelector(".preloader");
//             const video = document.querySelector(".preloader-video");

//             // Show the preloader
//             preloader.classList.add("show");

//             // Force play the animation
//             video.play();

//             // Redirect after video ends
//             video.onended = function () {
//                 window.location.href = targetURL;
//             };

//             // Fallback redirect after 3 seconds (if video fails)
//             setTimeout(() => {
//                 if (!video.ended) {
//                     window.location.href = targetURL;
//                 }
//             }, 3000);
//         });
//     });
// });

document.addEventListener("visibilitychange", function() {
  console.log("Visibility change detected. Hidden:", document.hidden);
});

document.addEventListener("DOMContentLoaded", function() {
    console.log("Script Loaded"); // Debugging message to ensure the script is running.
    // console.log("Script.js is loaded!");

    let titles = ["Don't Go!🚫" , "Shop Now!🛒", "Wait! Check this out!", "Please Stay!🥹"];
    let index = 0;
    let titleInterval;
  
    // Function to start transitioning titles
    function changeTitle() {
      titleInterval = setInterval(function() {
        console.log("Changing title to: " + titles[index]); // Debugging message to see which title is being shown.
        document.title = titles[index];
        index = (index + 1) % titles.length; // Loop through the array
      }, 1000); // Change every second
    }
  
    // Event listener to detect when the page becomes hidden (tab switch)
    document.addEventListener('visibilitychange', function() {
      console.log('Visibility Changed: ', document.hidden); // Log the visibility state.
  
      if (document.hidden) {
        console.log('Tab is hidden. Changing title...');
        changeTitle();
      } else {
        console.log('Tab is visible. Resetting title...');
        clearInterval(titleInterval);
        document.title = "The Fit Store"; // Set back to your main title
      }
    });
  });
  
//   document.addEventListener("DOMContentLoaded", function () {
//     const preloader = document.getElementById("preloader");
//     const preloaderVideo = document.querySelector(".preloader-video");

//     document.querySelectorAll("nav a").forEach(link => {
//         link.addEventListener("click", function (event) {
//             event.preventDefault(); // Prevent instant navigation
//             const href = this.getAttribute("href");

//             if (href !== "#") {
//                 preloader.classList.add("show"); // Show preloader
//                 preloaderVideo.play(); // Start video animation

//                 setTimeout(() => {
//                     window.location.href = href; // Redirect after 4 seconds
//                 }, 2000); // Adjusted to match video length
//             }
//         });
//     });

//     // Hide preloader when the page loads (for back navigation)
//     window.addEventListener("load", function () {
//         preloader.classList.remove("show");
//     });
// });
// document.addEventListener("DOMContentLoaded", function () {
//   const preloader = document.getElementById("preloader");
//   const preloaderVideo = document.querySelector(".preloader-video");

//   document.querySelectorAll("nav a").forEach(link => {
//       link.addEventListener("click", function (event) {
//           event.preventDefault(); // Prevent instant navigation
//           const href = this.getAttribute("href");

//           if (href !== "#") {
//               preloader.classList.add("show"); // Show preloader
              
//               // **Force restart the video every time**
//               preloaderVideo.currentTime = 0; // Reset time to start
//               preloaderVideo.play().catch(error => console.log("Autoplay prevented:", error)); 

//               setTimeout(() => {
//                   window.location.href = href; // Redirect after 4 seconds
//               }, 2000); // Ensure it matches video length
//           }
//       });
//   });

//   // Hide preloader when the page loads (for back navigation)
//   window.addEventListener("load", function () {
//       preloader.classList.remove("show");
//   });
// });
document.addEventListener("DOMContentLoaded", function () {
  const preloader = document.getElementById("preloader");
  const preloaderVideo = document.querySelector(".preloader-video");

  // Show the preloader immediately for testing
  preloader.classList.add("show");

  document.querySelectorAll("nav a").forEach(link => {
      link.addEventListener("click", function (event) {
          event.preventDefault(); // Prevent instant navigation
          const href = this.getAttribute("href");

          if (href !== "#") {
              preloader.classList.add("show"); // Show preloader
              preloaderVideo.currentTime = 0; // Reset the video to start
              preloaderVideo.play().catch(error => console.log("Autoplay prevented:", error));

              // Redirect after video ends
              preloaderVideo.onended = function () {
                  window.location.href = href;
              };
          }
      });
  });

  // Remove preloader on page load
  window.addEventListener("load", function () {
      preloader.classList.remove("show");
  });
});



