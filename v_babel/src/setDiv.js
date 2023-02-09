let notUsed = "This is not referenced";

// https://caniuse.com/const
const myName = "JS";

export default () => {
  // https://caniuse.com/template-literals
  document.getElementById("my-div").innerHTML = `Hello ${myName}!`;
};
