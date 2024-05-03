const cursor = document.querySelector("#cursormy");

window.onmousemove = e => {
  const x = e.clientX - cursor.offsetWidth / 2,
        y = e.clientY - cursor.offsetHeight / 2;

  cursor.style.transform = `translate(${x}px , ${y}px)`
}