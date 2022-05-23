function fazPost(url, body) {
    console.log("body=", body);
    let request = new XMLHttpRequest();
    request.open("POST", url);
    request.setRequestHeader("Content-type", "application/json");
    request.send(JSON.stringify(body));
  
    request.onload = function () {
      console.log(request.responseText);
    };
  }
  function cadastraVeiculo() {
    event.preventDefault();
  
    let url = "https://localhost:7122/api/Car/Post/Create";
    let modelo = document.getElementById("modelo").value;
    let cor = document.getElementById("cor").value;
    let marca = document.getElementById("marca").value;
    let placa = document.getElementById("placa").value;
    console.log(cor);
    console.log(marca);
  
    body = {
      modelo: modelo,
      cor: cor,
      marca: marca,
      placa: placa,
    };
  
    fazPost(url, body);
  }