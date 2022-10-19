// const value = document.getElementById("#value");
// console.log(value);

const btnClass = document.querySelector(".btnContainer");
console.log(btnClass);
const value = document.querySelector("#value");
console.log(value);
let count = 0;

btnClass.addEventListener("click", function (e) {
  console.log(value.textContent);
  if (e.target.classList.contains("increaseBtn")) {
    count += 1;
  } else if (e.target.classList.contains("decreaseBtn")) {
    count -= 1;
  } else if (e.target.classList.contains("resetBtn")) {
    count = 0;
  }
  value.textContent = count;

  if (count > 0) {
    value.style.color = "green";
  } else if (count < 0) {
    value.style.color = "red";
  } else {
    value.style.color = "black";
  }
});

const increaseBtn = document.querySelector(".increaseBtn");
const decreaseBtn = document.querySelector(".decreaseBtn");
const resetBtn = document.querySelector(".resetBtn");

increaseBtn.addEventListener("mouseenter", function () {
  increaseBtn.innerHTML = '<i class="fa-solid fa-plus"></i>';
});
increaseBtn.addEventListener("mouseleave", function () {
  increaseBtn.textContent = "increase";
});

decreaseBtn.addEventListener("mouseenter", function () {
  decreaseBtn.innerHTML = '<i class="fa-solid fa-minus"></i>';
});

decreaseBtn.addEventListener("mouseleave", function () {
  decreaseBtn.textContent = "decrease";
});

resetBtn.addEventListener("mouseenter", function () {
  resetBtn.innerHTML = '<i class="fa-solid fa-rotate-right"></i>';
});

resetBtn.addEventListener("mouseleave", function () {
  resetBtn.textContent = "reset";
});
// btn.addEventListener("mouseleave", function () {
//   heading.classList.remove("red");
// });
