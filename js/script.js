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
  if (isItalic) {
    textElement.style.fontStyle = "normal";
  }
  else {
    textElement.style.fontStyle = "italic";
  }
  isItalic = !isItalic;
});

// Underline Section
let isUnderline = false;
document.getElementById("underLine").addEventListener("click", function () {
  if (isUnderline) {
    textElement.style.textDecoration = "none";
  }
  else {
    textElement.style.textDecoration = "underline";
  }
  isUnderline = !isUnderline;
});

// text left section
document.getElementById("left").addEventListener("click", function () {
  textElement.style.textAlign = "left";
});

// text Center section
let isCenter = false;
document.getElementById("center").addEventListener("click", function () {
  if(isCenter){
    textElement.style.textAlign = "left";
  }
  else{
    textElement.style.textAlign = "center";
  }
  isCenter = !isCenter;
});


// text Right section
let isRight = false;
document.getElementById("right").addEventListener("click", function () {
  if(isRight){
    textElement.style.textAlign = "left";
  }
  else{
    textElement.style.textAlign = "right";
  }
  isRight = !isRight;
});
// text Justify section
let isJustify = false;
document.getElementById("justify").addEventListener("click", function () {
  if(isJustify){
    textElement.style.textAlign = "left";
  }
  else{
    textElement.style.textAlign = "Justify";
  }
  isJustify = !isJustify;
});

// Upercase and Lowercase
let isUpercase = false;
document.getElementById("A").addEventListener("click", function () {
  textElement.style.textTransform = "uppercase";
});
document.getElementById("a").addEventListener("click", function () {
  textElement.style.textTransform = "lowercase";
});

document.getElementById("font").addEventListener("keyup", function (e) {
  let fontString = e.target.value;
  font = parseInt(fontString);
  textElement.style.fontSize = font + "px";
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
