// Exercise 1 & 2 - Create the Video class
class Video {
  constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time;
  }

  watch() {
    return `${this.uploader} watched all ${this.time} seconds of ${this.title}!`;
  }
}

// Exercise 3 - First instance
const video1 = new Video("JavaScript Tutorial", "John", 300);
console.log(video1.watch());

// Exercise 4 - Second instance
const video2 = new Video("CSS Tricks", "Sarah", 450);
console.log(video2.watch());

// Bonus Exercise 5 - Array of objects storing video data
const videosData = [
  { title: "JavaScript Tutorial", uploader: "John", time: 300 },
  { title: "CSS Tricks", uploader: "Sarah", time: 450 },
  { title: "React for Beginners", uploader: "Michael", time: 600 },
  { title: "Node.js Crash Course", uploader: "Emily", time: 750 },
  { title: "Python Basics", uploader: "Chris", time: 500 }
];

// Bonus Exercise 6 - Loop through array to instantiate instances
videosData.forEach((data) => {
  const video = new Video(data.title, data.uploader, data.time);
  console.log(video.watch());
});