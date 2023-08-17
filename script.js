document.addEventListener("DOMContentLoaded", function () {
    const textInput = document.getElementById("textInput");
    const countButton = document.getElementById("countButton");
    const generateBackgroundButton = document.getElementById("generateBackground");
    const letterCount = document.getElementById("letterCount");
    const wordCount = document.getElementById("wordCount");
    const sentenceCount = document.getElementById("sentenceCount");

    countButton.addEventListener("click", function () {
        const text = textInput.value;

        // Count letters
        const letters = text.replace(/[^a-zA-Z]/g, "").length;

        // Count words by splitting on spaces and common punctuation, excluding standalone periods and non-word sequences
        const words = text.split(/\s+|[,;:!\?\(\)]+/).filter(word => word.trim().length > 0 && word !== '.' && word.match(/[a-zA-Z]/)).length;

        // Count sentences using a more comprehensive regex pattern
        const sentences = text.split(/(?<=[.!?])\s+/).filter(sentence => sentence.trim().length > 0 && sentence.match(/[a-zA-Z]/)).length;

        // Check if the last character is a sentence-ending punctuation or a comma
        if ((text.trim().endsWith('.') || text.trim().endsWith(',')) && !text.trim().match(/[.!?]$/)) {
            sentences++;
        }

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
