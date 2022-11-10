const pixels = document.querySelectorAll('.pixel');
const chosenColorSelect = document.querySelector('.chosen-color');
const eraser = document.querySelector('#eraser-mode');

pixels.forEach(function (p) {
  // Вешаем событие клик
  p.addEventListener('click', function (e) {
    if (eraser.checked) {
      e.target.style.background = 'white';
    } else {
      e.target.style.background = chosenColorSelect.value;
    }
  });
});

/*

1. Все «пиксели» имеют класс pixel.
2. Выпадающий список с цветами имеет класс chosen-color.
3. «Ластик» — это чекбокс с классом eraser.
4. Когда на «пиксель» кликают, у него должен измениться цвет фона.
5. Если в момент клика ластик выключен, фон нажатого «пикселя» должен стать того цвета, который выбран в списке.
6. Если в момент клика ластик включён, фон нажатого «пикселя» должен стать белым — 'white'.

*/
