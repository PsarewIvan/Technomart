var slider = document.getElementById('range-slider');

noUiSlider.create(slider, {
  start: [0, 30000],
  connect: true,
  range: {
      'min': 0,
      'max': 30000
  },
  step: 50
});

var minPrice = document.getElementById('minPrice');
var maxPrice = document.getElementById('maxPrice');

slider.noUiSlider.on('update', function (values, handle) {
  var value = values[handle];
  if (handle) {
    maxPrice.value = Math.floor(value);
  } else {
    minPrice.value = Math.floor(value);
  }
});

minPrice.addEventListener('change', function() {
  slider.noUiSlider.set([this.value, null]);
});

maxPrice.addEventListener('change', function() {
  slider.noUiSlider.set([null, this.value]);
});
