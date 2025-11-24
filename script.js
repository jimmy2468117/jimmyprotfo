const words = ["Welcome to my portfolio.", "This is the work of"];
let part = 0;
let index = 0;
let reverse = false;

function type() {
  let text = words[part].substring(0, index);
  document.getElementById("text").innerHTML =
    text + '<span class="cursor">_</span>';

  if (!reverse) {
    index++;
    if (index === words[part].length + 1) {
      reverse = true;
      setTimeout(type, 2000);
      return;
    }
  } else {
    index--;
    if (index === 0) {
      reverse = false;
      part = (part + 1) % words.length;
    }
  }

  setTimeout(type, 100);
}

type();
