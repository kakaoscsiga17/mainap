console.log("szia");
function addDiv(text) {
  const Elem = document.createElement("div");
  Elem.textContent = text;
  document.body.appendChild(Elem);
}
async function letolt() {
  const url = "https://pokeapi.co/api/v2/pokemon/";
  const response = await fetch(url);
  const data = await response.json();
  for (let i = 0; i < data.results.length; i++) {
    addDiv(data.results[i].name);
  }
}

addDiv("Körte");
addDiv("Eper");
letolt();
