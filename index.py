from flask import Flask, request, jsonify
import requests
import os

app = Flask(__name__)

# Замените на токен своего бота и ID чата
BOT_TOKEN = os.environ.get("7369277499:AAFT-sbPbCWJh15kCjvFwTMycuVamKGcFic") #Получаем значение из переменной окружения
CHAT_ID = os.environ.get("CHAT_ID") #Получаем значение из переменной окружения

@app.route('/send_telegram', methods=['POST'])
def send_telegram():
    data = request.get_json()
    message = data['message']

    url = f"https://api.telegram.org/bot{BOT_TOKEN}/sendMessage"
    payload = {
        "chat_id": CHAT_ID,
        "text": message
    }

    try:
        response = requests.post(url, json=payload)
        response.raise_for_status()  # Raises HTTPError for bad responses (4xx or 5xx)
        return jsonify({'status': 'success'}), 200
    except requests.exceptions.RequestException as e:
        print(f"Ошибка при отправке сообщения: {e}")
        return jsonify({'status': 'error', 'message': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)