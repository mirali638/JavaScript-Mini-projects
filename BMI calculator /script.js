const form = document.querySelector("#bmiForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const h = parseInt(document.querySelector("#height").value);
  const w = parseInt(document.querySelector("#weight").value);
  const r = document.querySelector("#result");
  const wd = document.querySelector("#weight_guide");

  if (isNaN(h) || h <= 0) {
    r.textContent = `Please give valid height it is ${h}`;
  }
  if (isNaN(w) || w <= 0) {
    r.textContent = `Please give valid weight it is ${w}`;
  }

  const bmi = (w / ((h * h) / 10000)).toFixed(2);
  r.textContent = `Your BMI is: ${bmi}`;

  if (bmi <= 18.5) {
    wd.textContent = "Underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    wd.textContent = "Normal weight";
  } else if (bmi >= 25 && bmi <= 29.9) {
    wd.textContent = "Overweight";
  } else {
    wd.textContent = "Obese";
  }
});

