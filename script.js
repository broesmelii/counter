const counterEl = document.querySelector(".counter");
const increaseButtonEl = document.querySelector(".counter__button--increase");
const decreaseButtonEl = document.querySelector(".counter__button--decrease");
const resetButtonEl = document.querySelector(".counter__reset-button");
const counterValueEL = document.querySelector(".counter__value");
const counterTitleEl = document.querySelector(".counter__title");

const incrementCounter = () => {
  // get current value
  const currentValue = counterValueEL.textContent;
  // convert to number type
  const currentValueAsNumber = +currentValue;
  // increment by one
  let newValue = currentValueAsNumber + 1;

  // check if new value greater than 5
  if (newValue > 5) {
    newValue = 5;
    // give visual feedback that limit is reached
    counterEl.classList.add("counter--limit");

    // update counter title that limit is reached
    counterTitleEl.innerHTML = "Limit! Buy <b>Pro</b> for >5";

    // disable increase and decrease buttons
    increaseButtonEl.disabled = true;
    decreaseButtonEl.disabled = true;
  }
  // set counter element with new value
  counterValueEL.textContent = newValue;

  // unfocus (blur)
  increaseButtonEl.blur();
};

increaseButtonEl.addEventListener("click", incrementCounter);
document.addEventListener("keydown", incrementCounter);

decreaseButtonEl.addEventListener("click", () => {
  // get current value
  const currentValue = counterValueEL.textContent;
  // convert to number type
  const currentValueAsNumber = +currentValue;
  // no negative numbers
  if (currentValueAsNumber) {
    // increment by one
    const newValue = currentValueAsNumber - 1;
    // set counter element with new value
    counterValueEL.textContent = newValue;
  }
  // unfocus (blur)
  decreaseButtonEl.blur();
});

resetButtonEl.addEventListener("click", () => {
  counterValueEL.textContent = 0;

  // reset background color
  counterEl.classList.remove("counter--limit");

  // reset counter title
  counterTitleEl.textContent = "Fancy Counter";

  // enable buttons
  increaseButtonEl.disabled = false;
  decreaseButtonEl.disabled = false;

  // unfocus (blur)
  resetButtonEl.blur();
});
