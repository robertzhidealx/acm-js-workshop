// https://caniuse.com/const
var myName = "JS";
var setDiv = (function () {
  // https://caniuse.com/template-literals
  document.getElementById("my-div").innerHTML = "Hello ".concat(myName, "!");
});

setDiv();
