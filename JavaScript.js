let humburger = document.querySelector(".menu__humburger");
if (humburger) {
  humburger.addEventListener("click", function (event) {
    event.target.closest(".top__header--menu").classList.toggle("menu--active");
  });
}



async function sendMessage() {
  const message = document.getElementById("message").value;

  // Проверка на пустую строку
  if (!message.trim()) {
    alert("Введите своё проблему: ");
    return;
  }

  const response = await fetch("https://t.me/HelloWorldfromRussia", { // Замените на URL вашего серверного скрипта
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ message: message })
  });

  if (response.ok) {
    alert("Тебя услышали!");
    document.getElementById("message").value = ""; // Очистка поля ввода
  } else {
    alert("Тебя не услышали.");
  }
}


const btn = document.getElementById('callback-btn');
const modal = document.getElementById('callback-modal');




async function sendMessage() {
  const messageTextarea = document.getElementById('message-text');
  const messageStatusDiv = document.getElementById('message-status');
  const message = messageTextarea.value.trim(); // Получаем текст и удаляем пробелы по краям

  // 1. Валидация (проверка, что сообщение не пустое)
  if (!message) {
    messageStatusDiv.textContent = "Пожалуйста, введите сообщение.";
    messageStatusDiv.style.color = "red";
    return;
  }

  // 2. Отправка запроса на сервер
  // Замените '/send-to-telegram' на URL вашего серверного скрипта (бэкенда)
  const serverEndpoint = "https://t.me/HelloWorldfromRussia";

  try {
    const response = await fetch(serverEndpoint, {
      method: 'POST', // Используем POST-метод для отправки данных
      headers: {
        'Content-Type': 'application/json', // Указываем, что отправляем JSON
      },
      body: JSON.stringify({ message: message }), // Преобразуем сообщение в JSON
    });

    const data = await response.json(); // Ожидаем JSON-ответ от сервера

    // 3. Обработка ответа от сервера
    if (response.ok) { // Если сервер вернул успешный статус (2xx)
      messageStatusDiv.textContent = "Сообщение успешно отправлено!";
      messageStatusDiv.style.color = "green";
      messageTextarea.value = ''; // Очищаем поле ввода после отправки
    } else { // Если на сервере произошла ошибка
      const errorMessage = data.message || 'Не удалось отправить сообщение.';
      messageStatusDiv.textContent = `Ошибка: ${errorMessage}`;
      messageStatusDiv.style.color = "red";
    }
  } catch (error) {
    // 4. Обработка сетевых ошибок
    console.error('Ошибка при отправке запроса:', error);
    messageStatusDiv.textContent = "Ошибка сети. Пожалуйста, попробуйте позже.";
    messageStatusDiv.style.color = "red";
  }
}

/* отслеживание движение курсора */ 
// const follower = document.getElementById('follower');

//   document.addEventListener('mousemove', (event)=> {
//     const x = event.clientX;
//     const y = event.clientY;
 
//     follower.style.left = `${x}px`;
//     follower.style.top = `${y}px`;
    
//   });

