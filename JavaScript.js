// функция для products для переключения вкладок;
let tabs = document.querySelectorAll('.info-box li a');
let panels = document.querySelectorAll('.info-box article');

for(i = 0; i < tabs.length; i++) {
  var tab = tabs[i];
  setTabHandler(tab, i);
}

function setTabHandler(tab, tabPos) {
  tab.onclick = function() {
    for(i = 0; i < tabs.length; i++) {
      tabs[i].className = '';
    }

    tab.className = 'active';

    for(i = 0; i < panels.length; i++) {
      panels[i].className = '';
    }

    panels[tabPos].className = 'active-panel';
  }
}

// Получаем элементы
    const burger = document.getElementById('burgerBtn');
    const menu = document.getElementById('menu');
    const overlay = document.getElementById('overlay');

    // Функция переключения (активации/деактивации)
    function toggleMenu() {
        burger.classList.toggle('active');
        menu.classList.toggle('active');
        overlay.classList.toggle('active');
        
        // Блокировка прокрутки страницы при открытом меню (опционально)
        if (menu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }

    // Клик по бургеру
    burger.addEventListener('click', toggleMenu);

    // Клик по затемнению — закрыть меню
    overlay.addEventListener('click', toggleMenu);

    // Закрыть меню при нажатии на клавишу Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && menu.classList.contains('active')) {
            toggleMenu();
        }
    });


