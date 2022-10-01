const sentenceTag = document.querySelector(`input[type="text"]`);
const fontType = document.querySelector(`select[name="typeface"]`);

const typeSizeTag = document.querySelector(`input[name="typeSize"]`);
const typeSizeOutput = document.querySelector(".typeSize-output");

const fontWeightTag = document.querySelector(`input[name="fontWeight"]`);
const fontWeightOutput = document.querySelector(".fontWeight-output");

const lineHeightTag = document.querySelector(`input[name="lineHeight"]`);
const lineHeightOutput = document.querySelector(".lineHeight-output");

const italicTag = document.querySelector(`input[name="italic"]`);
const colorTags = document.querySelectorAll(".p-typeChecker__colors div");

const outputTag = document.querySelector(".p-typeChecker__output");
const originalText = outputTag.value;

// when i type in my sentence tag, update the output tag accordingly
// if there's no value, put in the original text
sentenceTag.addEventListener("keyup", (e) => {
  e.target.value
    ? (outputTag.value = e.target.value)
    : (outputTag.value = originalText);
});

// when i type in my output tag, update the sentence tag accordingly
outputTag.addEventListener("keyup", function () {
  sentenceTag.value = this.value;
});

// when i change my select for typeface, update the font family
fontType.addEventListener("input", (e) => {
  outputTag.style.fontFamily = e.target.value;
});

// when i change my typeSize slider, update the text next to it AND
// change the outputTag's font size
typeSizeTag.addEventListener("input", function () {
  outputTag.style.fontSize = this.value + "px";
  typeSizeOutput.innerHTML = this.value + " px";
});

fontWeightTag.addEventListener("input", function () {
  outputTag.style.fontWeight = this.value;
  fontWeightOutput.innerHTML = this.value;
});

lineHeightTag.addEventListener("input", function () {
  outputTag.style.lineHeight = this.value;
  lineHeightOutput.innerHTML = this.value;
});

// when i change my italic checkbox, update the font style to either
// normal or italic if it's checked or not
italicTag.addEventListener("change", (e) => {
  e.currentTarget.checked
    ? (outputTag.style.fontStyle = "italic")
    : (outputTag.style.fontStyle = "normal");
});

// go through all of my color tags, then...
// when i click one of them, change the background color and
// the text color, and make this tag be selected
colorTags.forEach((tag) => {
  tag.addEventListener("click", function () {
    outputTag.style.backgroundColor = this.style.backgroundColor;
    outputTag.style.color = this.style.color;

    // reset the classes
    colorTags.forEach((tag) => tag.classList.remove("selected"));

    // only to this clicked one
    this.classList.add("selected");
  });
});

// colorTags.forEach((tag) => {
//   tag.addEventListener("click",  (e)=> {
//     outputTag.style.backgroundColor = e.target.style.backgroundColor;
//     outputTag.style.color = e.target.style.color;

//     // reset the classes
//     colorTags.forEach((tag) => {
//       tag.classList.remove("selected");
//     });

//     // only to this clicked one
//     e.target.classList.add("selected");
//   });
// });
