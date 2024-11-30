const processText = (text,{ uppercase = false, reverse = false, removeSpecialChars = false } = {}) => {
    let processedText = text;

    if (uppercase){
        processedText = processedText.toUpperCase();
    }

    if (removeSpecialChars){
        processedText = processedText.replace(/[^a-zA-Z0-9\s]/g, '');
    }

    if (reverse) {
        processedText = [...processedText].reverse().join('');
    }

    return processedText;
};

const inputText = "Simple Test By Adam";

const options = {
    uppercase: true,
    reverse: true,
    removeSpecialChars: true
};

const result = processText(inputText, options);

console.log(`Original Text: ${inputText}`);
console.log(`Modified Text: ${result}`);