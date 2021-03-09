const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

// this is where the response messages will be defined in arrays //

const greetings = [
    'I am blessed beyond all measure',
    'Fine and Yourself?',
    'Im a freed slave and captivated by Christ our lord',
    'Absolutely better than I could have ever asked for',
    'The real question is how are you?'
];

const weather = [
    'Weather is nice',
    'Im not sure what the weather looks like i havent bee out I am just a computer dumbass',
    'The weather is not so great'
];
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = () => {
    console.log('voice is activated, you may talk in the microphone');
};

recognition.onresult = function(event) {
    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript);
};

// add the listener to the button

btn.addEventListener('touchstart', () => {
    recognition.start();
});

function readOutLoud(message) {
    const speech = new SpeechSynthesisUtterance();

    speech.text = 'I dont understand but God is good try another question';

    if (message.includes('how are you')) {
        const finalText = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalText;
    }



    speech.volume = 1;
    speech.rate = 0.9;
    speech.speed = 0.2;

    window.speechSynthesis.speak(speech);
}
