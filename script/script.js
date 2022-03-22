const plus = document.getElementById("plus");
const minus = document.getElementById("minus");

const inputDiv = document.getElementById("input");

const amountPlus = () => {
  const total = Number(inputDiv.innerText) + 1;

  const result = (inputDiv.innerText = total);
};

const amountMinus = () => {
  const totalMinus = Number(inputDiv.innerText) - 1;

  if (inputDiv.innerText > 0) {
    inputDiv.innerText = totalMinus;
  } else {
    inputDiv.innerText = "0";
  }
};

plus.addEventListener("click", amountPlus);
minus.addEventListener("click", amountMinus);
