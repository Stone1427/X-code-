
const morseCode = {
    'A': '÷=', 'B': '=÷÷÷', 'C': '=÷=÷', 'D': '=÷÷', 'E': '÷', 'F': '÷÷=÷', 'G': '==÷', 
    'H': '÷÷÷÷', 'I': '÷÷', 'J': '÷===', 'K': '=÷=', 'L': '÷=÷÷', 'M': '==', 'N': '=÷', 
    'O': '===', 'P': '÷==÷', 'Q': '==÷=', 'R': '÷=÷', 'S': '÷÷÷', 'T': '=', 'U': '÷÷=', 
    'V': '÷÷÷=', 'W': '÷==', 'X': '=÷÷=', 'Y': '=÷==', 'Z': '==÷÷',
    '1': '÷====', '2': '÷÷===', '3': '÷÷÷==', '4': '÷÷÷÷=', '5': '÷÷÷÷÷', 
    '6': '=÷÷÷÷', '7': '==÷÷÷', '8': '===÷÷', '9': '====÷', '0': '=====',
    ' ': ' / '
};

const reverseMorseCode = Object.fromEntries(
    Object.entries(morseCode).map(([key, value]) => [value.trim(), key])
);

function translateToMorse() {
    const inputText = document.getElementById('inputText').value.toUpperCase();
    let translatedText = '';

    for (let char of inputText) {
        translatedText += morseCode[char] ? morseCode[char] + ' ' : '';
    }

    document.getElementById('outputText').innerText = translatedText.trim();
}

function translateToText() {
    const inputText = document.getElementById('inputText').value.trim();
    const morseWords = inputText.split(' / ');
    let translatedText = '';

    for (let morseWord of morseWords) {
        const morseChars = morseWord.split(' ');
        for (let morseChar of morseChars) {
            translatedText += reverseMorseCode[morseChar] ? reverseMorseCode[morseChar] : '';
        }
        translatedText += ' ';
    }

    document.getElementById('outputText').innerText = translatedText.trim();
}
