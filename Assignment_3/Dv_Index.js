function darthData() {
  fetch("https://swapi.co/api/people/4/")
    .then(response => response.json())

    .then(myJson => {
      document.body.innerHTML =
        "<pre>" + JSON.stringify(myJson, null, " ") + "</pre>";
    })
    .catch(err => {
      console.log("Catch error", err);
      const div = document.getElementById("darthID");
      div.innerHTML = "Darth data error";
    });

  //console.log("Darth");
}
document.getElementById("darthID").addEventListener("click", darthData());
