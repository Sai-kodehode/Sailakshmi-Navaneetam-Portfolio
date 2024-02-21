function toggleCVContent() {
  var cvContent = document.getElementById("cv-content");
  var cvScreenshot = document.getElementById("cv-screenshot");

  if (cvContent.style.display === "none") {
    cvContent.style.display = "block";
    cvScreenshot.style.display = "none";
  } else {
    cvContent.style.display = "none";
    cvScreenshot.style.display = "block";
  }
}

function previewCV() {
  var cvContent = document.getElementById("cv-content");
  var cvScreenshot = document.getElementById("cv-screenshot");

  cvContent.style.display = "block";
  cvScreenshot.style.display = "none";
}
