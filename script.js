const button = document.getElementById("clickBtn");
const output = document.getElementById("output");

button.addEventListener("click", () => {
  const time = new Date().toLocaleTimeString();
  output.textContent = `Button clicked at ${time} ⏰`;
});
