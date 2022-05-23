const fetchveicuilos=() =>{
    event.preventDefault();
    const url =`https://localhost:7122/api/Car/Get/All`
    fetch(url)
    .then(Response=> Response.json())
    .then(listar=>{
        var result = Object.keys(listar).map(function(key) {
  return [Number(key), listar[key]];
        });
        console.log(result);
        document.getElementById('textarea').value = result;
    })
}


