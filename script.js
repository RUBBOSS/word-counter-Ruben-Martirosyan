document.addEventListener("DOMContentLoaded", function () {
    const textInput = document.getElementById("textInput");
    const countButton = document.getElementById("countButton");
    const generateBackgroundButton = document.getElementById("generateBackground");
    const letterCount = document.getElementById("letterCount");
    const wordCount = document.getElementById("wordCount");
    const sentenceCount = document.getElementById("sentenceCount");

    countButton.addEventListener("click", function () {
        const text = textInput.value;

        // Count letters, words, and sentences
        const letters = text.replace(/[^a-zA-Z]/g, "").length;
        const words = text.split(/\s+/).filter(word => word.length > 0).length;
        const sentences = text.split(/[.!?]/).filter(sentence => sentence.length > 0).length;

        // Update counts in the DOM
        letterCount.textContent = letters;
        wordCount.textContent = words;
        sentenceCount.textContent = sentences;
    });

    generateBackgroundButton.addEventListener("click", function () {
        const randomColor = getRandomColor();
        document.body.style.backgroundColor = randomColor;
    });

    function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
