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

  


