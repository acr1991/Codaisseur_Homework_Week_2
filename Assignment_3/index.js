fetch("https://swapi.co/api/people/1")
  .then(response => response.json())
  .then(data => {
    personalData(data);

    document.getElementById("darthId").addEventListener("click", () => {
      fetch("https://swapi.co/api/people/4/")
        .then(response => response.json())
        .then(myJson => {
          document.body.innerHTML =
            "<pre>" + JSON.stringify(myJson, null, " ") + "</pre>";
          console.log("Darth");
        });
    });
  });
const personalData = data => {
  document.getElementById("name").textContent = data.name;
  document.getElementById("height").textContent = data.height;
  document.getElementById("hair").textContent = data.hair_color;
  document.getElementById("mass").textContent = data.mass;
  document.getElementById("skin").textContent = data.skin_color;
  document.getElementById("eye_color").textContent = data.eye_color;
  document.getElementById("gender").textContent = data.gender;
};
