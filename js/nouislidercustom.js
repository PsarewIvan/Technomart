var slider = document.getElementById('range-slider');

noUiSlider.create(slider, {
  start: [0, 30000],
  connect: true,
  range: {
      'min': 0,
      'max': 30000
  },
  step: 200
});

var snapValues = [
  document.getElementById('min-price'),
  document.getElementById('max-price')
];

var formValues = [
  document.getElementById('min-price-value'),
  document.getElementById('max-price-value')
];

slider.noUiSlider.on('update', function (values, handle) {
  snapValues[handle].innerHTML = Math.floor(values[handle]);
  formValues[handle].value = Math.floor(values[handle]);
});