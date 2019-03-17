const forms = document.querySelector("#listForm");
const compute = () => {
  const getText = document.querySelector("#getText").value;
  if (!getText.trim()) {
    alert("Put a value in the text box");
    getText = "";
  } else {
    const splitText = getText.split("\n");
    let out = "\n";
    for (let i = 0; i < splitText.length; i++) {
      out += `<li> ${splitText[i]} </li> \n`;
    }
    const output = (document.querySelector(
      "#showList"
    ).innerHTML = `<ul>\n ${out}   \n</ul>`);
  }
};

forms.addEventListener("submit", e => {
  compute();
  e.preventDefault();
});
