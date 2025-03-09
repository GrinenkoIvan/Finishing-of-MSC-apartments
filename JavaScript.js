let humburger = document.querySelector(".menu__humburger");
if (humburger) {
  humburger.addEventListener("click", function (event) {
    event.target.closest(".top__header--menu").classList.toggle("menu--active");
  });
}
// функция для отправки сообщения на WhatsApp через форму.
function sendWhatsAppMessage() {
  var phone_number = "79605252905"; 
  var message = document.getElementById("message").value;
  var whatsapp_url =
    "https://wa.me/" + phone_number + "?text=" + encodeURIComponent(message);
  window.open(whatsapp_url, "_blank").focus(); // Открываем ссылку в новой вкладке
}

document.getElementById('telegramForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Предотвратить отправку формы по умолчанию

    const message = document.getElementById('message').value;

    try {
      const response = await fetch(`@HelloWorldfromRussia`, { // Замените '/send_telegram' на URL вашего бэкэнда
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: message })
      });

      if (response.ok) {
        alert('Сообщение отправлено!'); // Или другое уведомление об успехе
      } else {
        alert('Ошибка отправки сообщения.'); // Или другое уведомление об ошибке
      }
    } catch (error) {
      console.error('Ошибка:', error);
      alert('Произошла ошибка при отправке запроса.');
    }
  });
