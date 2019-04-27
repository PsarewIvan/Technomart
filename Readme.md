# Учебный проект «Техномарт»

* Верстка: [Иван Псарёв](https://github.com/PsarewIvan).
* Дизайн: [HTML Academy](https://htmlacademy.ru).
* Используемые библиотеки: [noUIslider](https://refreshless.com/nouislider/).

* Страница: [Главная](https://psarewivan.github.io/Technomart/index.html)

---

### Технические требования

* Стандарты вёрстки: HTML5, CSS3, прогрессивное улучшение.
* Адаптивность вёрстки: нет.
* Кроссбраузерность: Chrome, Firefox, Opera, Safari (IE слабая поддержка из-за использования Grid Layout)
* Используемые шрифты: Cuprum, PT Sans

#### Описание макета

##### Все макеты

Контентная область центрируется и составляет 960px.
Авторизованному и неавторизованному посетителю показывается разный вид
блока авторизации (при нажатии кнопки "Войти").
При клике на кнопку «Купить» возникает модальное окно с сообщением о
добавлении в корзину

##### [Главная](https://psarewivan.github.io/Technomart/index.html)

Слайдер промо-блока на чистом JS. Поддерживает любое количество слайдов.
Кнопка: «Открыть каталог» в слайдере - это ссылка, которая ведет на
внутреннюю страницу: [Каталог](https://psarewivan.github.io/Technomart/catalog.html)
Блок «Сервисы»: слайдер чистый JS.
Блок карты — обычное изображение, клик по ней открывает модальное окно с Яндекс картами.
Кнопка "ЗАБЛУДИЛИСЬ? НАПИШИТЕ НАМ!" открывает модальное окно с формой обратной связи. При отключенном JS, происходит переход на отдельную страницу с [формой обратной связи](https://psarewivan.github.io/Technomart/form.html).

##### [Каталог](https://psarewivan.github.io/Technomart/catalog.html)

Слайдер выбора диапазона цены реализован с помощью [noUIslider](https://refreshless.com/nouislider/). Слайдер доступен с клавиатуры, можно вводить числовые значения.
Форму можно отправить и посмотреть отправленные на сервер результаты.


#### Preview

##### Главная

<img width="960" alt="" src="https://github.com/PsarewIvan/Technomart/blob/master/preview/index.jpg">

##### Каталог

<img width="960" alt="" src="https://github.com/PsarewIvan/Technomart/blob/master/preview/catalog.jpg">
