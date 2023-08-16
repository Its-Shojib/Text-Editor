let textElement = document.getElementById("textArea");

//Bold Function
let isBold = false;

document.getElementById("bold").addEventListener("click", function () {
  if (isBold) {
    textElement.style.fontWeight = "normal";
  } 
  else {
    textElement.style.fontWeight = "bold";
  }
  isBold = !isBold;
});

// Italic Function
let isItalic = false;
document.getElementById("italic").addEventListener("click", function () {
  if(isItalic){
    textElement.style.fontStyle = "normal";
  }
  else{
    textElement.style.fontStyle = "italic";
  }
  isItalic = !isItalic;
});
document.getElementById("underLine").addEventListener("click", function () {
  let input = document.getElementById("textArea");
  input.style.textDecoration = "underline";
});
document.getElementById("left").addEventListener("click", function () {
  let input = document.getElementById("textArea");
  input.style.textAlign = "left";
});
document.getElementById("center").addEventListener("click", function () {
  let input = document.getElementById("textArea");
  input.style.textAlign = "center";
});
document.getElementById("right").addEventListener("click", function () {
  let input = document.getElementById("textArea");
  input.style.textAlign = "right";
});
document.getElementById("justify").addEventListener("click", function () {
  let input = document.getElementById("textArea");
  input.style.textAlign = "justify";
});
document.getElementById("A").addEventListener("click", function () {
  let input = document.getElementById("textArea");
  input.style.textTransform = "uppercase";
});
document.getElementById("a").addEventListener("click", function () {
  let input = document.getElementById("textArea");
  input.style.textTransform = "lowercase";
});

document.getElementById("font").addEventListener("keyup", function (e) {
  let fontString = e.target.value;
  font = parseInt(fontString);
  let input = document.getElementById("textArea");
  input.style.fontSize = font + "px";
})

// const textElement = document.getElementById("textArea");
// const changeButton = document.getElementById("bold");

// let isBold = false;

// changeButton.addEventListener("click", () => {
//   if (isBold) {
//     textElement.style.fontWeight = "normal";
//   } else {
//     textElement.style.fontWeight = "bold";
//   }

//   isBold = !isBold;
// });
