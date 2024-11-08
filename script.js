const password = document.getElementById("password");
const range = document.getElementById("range");
const rangeValue = document.getElementById("rangeValue");
const btn = document.getElementById("generate");
const upper = document.getElementById("uppercase");
const lower = document.getElementById("lowercase");
const numeric = document.getElementById("numbers");
const characters = document.getElementById("symbols");
const copyBtn = document.getElementById("copyBtn");

range.value = 6;

rangeValue.innerText = range.value;

range.addEventListener("input", (e) => {
  rangeValue.innerText = e.target.value;
});

btn.addEventListener("click", () => {
  let capsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let smallStr = "abcdefghijklmnopqrstuvwxyz";
  let numStr = "0123456789";
  let charStr = "!@#$%^&*(){}?><>`,";
  let finalStr = "";

  if (upper.checked) {
    finalStr += capsStr;
  }
  if (lower.checked) {
    finalStr += smallStr;
  }

  if (numeric.checked) {
    finalStr += numStr;
  }
  if (characters.checked) {
    finalStr += charStr;
  }
  if (finalStr === "") {
    alert("please select one of below options");
  }
  let pswd = "";
  for (let i = 0; i < range.value; i++) {
    let randNum = Math.floor(Math.random() * finalStr.length);
    pswd += finalStr.charAt(randNum);
  }
  password.value = `${pswd}`;
});

copyBtn.addEventListener("click", () => {
  if (password.value === "") {
    alert("nothing to copy");
    return false;
  }
  window.navigator.clipboard.writeText(password.value).then(() => {
    password.classList.add("highlight");
    copyBtn.classList.add("copied");
    copyBtn.innerText = "done";
    setTimeout(() => {
      password.classList.remove("highlight");
    }, 500);
    setTimeout(() => {
      copyBtn.innerText = "copy";
      copyBtn.classList.remove("copied");
    }, 1000);
  });
});
