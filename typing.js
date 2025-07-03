var i = 0;
var txt = 'slain';
var speed = 300;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typing").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    setTimeout(typeWriterReverse, 3600000);
  }
}

function typeWriterReverse() {
  var currentText = document.getElementById("typing").innerHTML;
  if (currentText.length > 0) {
    document.getElementById("typing").innerHTML = currentText.slice(0, -1);
    setTimeout(typeWriterReverse, speed);
  } else {
    i = 0;
    setTimeout(typeWriter, 500);
  }
}

window.onload = typeWriter;
