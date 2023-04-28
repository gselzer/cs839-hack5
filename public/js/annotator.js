/* DOM setup */

// Grab the input button
const fileinput = document.getElementById("fileinput");

// Grab the canvas
const image_canvas = document.getElementById("image_canvas");

// Get the 2d (as opposed to "3d") drawing context on the canvas, returns CanvasRenderingContext2D
const image_ctx = image_canvas.getContext("2d");

/* Variables setup */

// Similar to document.createElement('img') except we don't need it on the document
const srcImage = new Image();
let imgData = null;

/* DOM functions */

// When the user selects an image, load in the data
fileinput.onchange = function (e) {
  // Check validity
  if (e.target.files && e.target.files.item(0)) {
    // Set the src of the new Image()
    srcImage.src = URL.createObjectURL(e.target.files[0]);
  }
};

// When the image loads, propagate the image through the state.
srcImage.onload = function () {
  // Copy the image's dimensions to the canvas, which will show the preview of the edits
  image_canvas.width = srcImage.width;
  image_canvas.height = srcImage.height;

  // draw the image at with no offset (0,0) and with the same dimensions as the image
  image_ctx.drawImage(srcImage, 0, 0, srcImage.width, srcImage.height);

  // Get an ImageData object representing the underlying pixel data for the area of the canvas
  imgData = image_ctx.getImageData(0, 0, srcImage.width, srcImage.height);
};

function getCursorPosition(canvas, event) {
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  const radius = Math.min(canvas.width, canvas.height) / 50;

  // Clear the canvas - hacky, but it works
  image_ctx.drawImage(srcImage, 0, 0, srcImage.width, srcImage.height);

  image_ctx.beginPath();
  image_ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
  image_ctx.fillStyle = "red";
  image_ctx.fill();
  image_ctx.lineWidth = 1;
  image_ctx.strokeStyle = "#003300";
  image_ctx.stroke();

  // Then, add a label

  image_ctx.font = "20px Arial";
  image_ctx.fillText("You are here", x, y - 15);
}

image_canvas.addEventListener("mousedown", function (e) {
  getCursorPosition(image_canvas, e);
});
