document.getElementById("kgsInput").addEventListener("input", (e) => {
  let kgs = e.target.value;
  document.getElementById("lbsOutput").innerHTML = kgs * 2.205;
});

document.getElementById("feetInput").addEventListener("input", (e) => {
  let feet = e.target.value;
  document.getElementById("cmsOutput").innerHTML = feet * 30.48;
});

document.getElementById("celciusInput").addEventListener("input", (e) => {
  let Celcius = e.target.value;
  document.getElementById("farenOutput").innerHTML = Celcius * 1.8 + 32;
});
