let myDiv = document.getElementById("myDiv");
let counter = 0;

setInterval(function(){
  myDiv.textContent = "Количество зараженных файлов: " + counter;
  counter++;
}, 1000);