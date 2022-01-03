const button = document.querySelector(".button");

button.addEventListener('click', () => {
  const x = document.getElementById('myEmail');
  const y = document.getElementById('myEmail').value;
  const z = document.getElementById("show");
  const click = document.getElementById("click");

  if (y.length > 0) {
    if (y !== x) {
      z.style.display = "block";
      click.classList.add("show2");
    }
  }
})