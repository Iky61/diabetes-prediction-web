const submitForm = (event) => {
  event.preventDefault();
  const age = document.querySelector("#age").value;
  const pregnancies = document.querySelector("#kehamilan").value;
  const glucose = document.querySelector("#sweet").value;
  const bloodpressure = document.querySelector("#tekanandarah").value;
  const skinthickness = document.querySelector("#skinthickness").value;
  let insulin = document.querySelector("#insulin").value;
  const bmi = document.querySelector("#bmi").value;

  const goodAlert = document.querySelector("#good-alert");
  const badAlert = document.querySelector("#bad-alert");

  const payload = {
    age: Number(age),
    pregnancies: Number(pregnancies),
    glucose: Number(glucose),
    bloodpressure: Number(bloodpressure),
    skinthickness: Number(skinthickness),
    insulin: Number(insulin),
    bmi: Number(bmi),
  };

  fetch("https://server-dungu.herokuapp.com/api/predict", {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((resp) => resp.json())
    .then((json) => {
      console.log(json.value);
      if (json.value == "0") {
        badAlert.style.display = "none";
        goodAlert.style.display = "flex";
      } else {
        goodAlert.style.display = "none";
        badAlert.style.display = "flex";
      }
    })
    .catch((err) => {
      console.error(err);
    });
};
