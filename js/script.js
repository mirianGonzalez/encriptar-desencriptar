const writing = (str) => {
    let arrFromStr = str.split("");
    let i = 0;
    let printStr = setInterval(function () {
      if (arrFromStr[i] === " ") {
        document.querySelector("h1").innerHTML += arrFromStr[i];
        document.querySelector("h1").innerHTML += arrFromStr[i + 1];
        i += 2;
      } else {
        document.querySelector("h1").innerHTML += arrFromStr[i];
        i++;
      }
      if (i === arrFromStr.length) {
        clearInterval(printStr);
      }
    }, 200);
  }; 
  writing("¡Bienvenidos/as! Al encriptador de texto");