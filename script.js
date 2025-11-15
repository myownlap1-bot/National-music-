document.addEventListener("DOMContentLoaded", () => {
    console.log("Сайт национальной музыки запущен 🎵");

    const buttons = document.querySelectorAll(".download-btn");
    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            alert("Скачивание началось! 🎶");

            // Пример ссылки на файл
            const fileUrl = "music/eldordo.mp3"; // путь к файлу
            const link = document.createElement("a");
            link.href = fileUrl;
            link.download = "eldordo.mp3"; // имя скачиваемого файла
            link.click();
        });
    });
});

  <!-- Скрипт вашего сайта, если он у вас есть -->
    <script src="script.js"></script>

    <!-- БЛОК ПОДКЛЮЧЕНИЯ И ЛОГИКИ FIRESTORE -->
    <script type="module">
        // 1. ИМПОРТЫ: ПОДКЛЮЧАЕМ НУЖНЫЕ БИБЛИОТЕКИ
        import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
        import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-analytics.js";
        
        // 💡 ИМПОРТ FIRESTORE: Используем ту же версию (12.6.0)
        import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";
        

        // 2. КОНФИГУРАЦИЯ: ВАШИ УНИКАЛЬНЫЕ КЛЮЧИ ПРОЕКТА
        const firebaseConfig = {
            apiKey: "AIzaSyB59vRSw3ZkIAs4tYjQfDcIpKKm4QnLKSM",
            authDomain: "an-base.firebaseapp.com",
            projectId: "an-base",
            storageBucket: "an-base.firebasestorage.app",
            messagingSenderId: "629172760240",
            appId: "1:629172760240:web:937b5ac8f37e9c804dd575",
            measurementId: "G-V8G2Q98VW4"
        };

        // 3. ИНИЦИАЛИЗАЦИЯ
        const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);
        
        // 💡 КОРРЕКТНАЯ ИНИЦИАЛИЗАЦИЯ DB (должна быть перед ее использованием)
        const db = getFirestore(app); 

        // 4. ФУНКЦИЯ ДЛЯ ЗАПИСИ ДАННЫХ В FIRESTORE
        async function addTestData() {
            try {
                // Используем инициализированную переменную db
                const docRef = await addDoc(collection(db, "test_songs"), { 
                    title: "Тестовая песня",
                    artist: "Начинающий разработчик",
                    progress: 1,
                    timestamp: new Date()
                });
                console.log("Документ успешно записан с ID: ", docRef.id);
                // Показываем подтверждение
                // ВАЖНО: alert() не работает в этой среде. Используем console.log
                console.log("УСПЕХ: Тестовые данные успешно отправлены в базу данных!"); 

            } catch (e) {
                // Если произошла ошибка (например, неправильные ключи или проблемы с правилами)
                console.error("КРИТИЧЕСКАЯ ОШИБКА при добавлении документа:", e);
                console.error("Убедитесь, что правила Firestore установлены на 'allow read, write: if true;'");
            }
        }
