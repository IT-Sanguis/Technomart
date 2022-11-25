var slider = document.querySelector(".slider");
var btnPrev = slider.querySelector(".slider__btn--prev");
var btnNext = slider.querySelector(".slider__btn--next");
var items = slider.querySelectorAll(".slider__item");
var inputs = slider.querySelectorAll("input");
var current = 1;

var tabs = document.querySelector('.services-tabs');
var tabsTab = tabs.querySelectorAll('.services-tabs__item');
var tabsInputs = tabs.querySelectorAll('input');

// Переключение slider по стрелкам

btnNext.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (current < items.length-1) {
    current++;
  } else {
    current = 0;
  }
  items.forEach(item => {
    item.classList.remove("element--current");
  });
  items[current].classList.add("element--current");
  inputs[current].checked = true;
});

btnPrev.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (current > 0) {
    current--;
  } else {
    current = items.length-1;
  }
  items.forEach(item => {
    item.classList.remove("element--current");
  });
  items[current].classList.add("element--current");
  inputs[current].checked = true;
});

// Переключение slider по radiobutton

inputs.forEach(input => {
  input.addEventListener('click', SliderInputsClick);
});

function SliderInputsClick() {
  toggleDots.call(this);
  toggleSliders.call(this);
}

function toggleDots() {
  inputs.forEach(Dot => Dot.checked = false);
  this.checked = true;
}

function toggleSliders() {
  items.forEach(item => item.classList.remove('element--current'));
  slider.querySelector('.' + this.dataset.slider).classList.add('element--current');
}

// Переключение services вкладок

tabsInputs.forEach(tabsInput => {
  tabsInput.addEventListener('click', TabsInputsClick);
});

function TabsInputsClick() {
  toggleInputs.call(this);
  toggleTabs.call(this);
}

function toggleInputs() {
  tabsInputs.forEach(Input => Input.checked = false);
  this.checked = true;
}

function toggleTabs() {
  tabsTab.forEach(tab => tab.classList.remove('element--current'));
  tabs.querySelector('.' + this.dataset.tab).classList.add('element--current');
}
