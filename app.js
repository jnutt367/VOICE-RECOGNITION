const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

// this is where the response messages will be defined in arrays //

const greetings = [
    'Im good thank you',
    'Fine and Yourself?',
    'This is one of the most common questions youll get asked when meeting someone or running into someone you know. If English is not your first language, it can be hard to come up with an answer on the fly, my gosh what we expect out of people.'
];
const descriptions = [
    'well yes and hello there good friend I am Nutsy the friendly bot I am a little long winded but you may ask anything you want and I promise I will have an appropriate response',
    'Ok yes yes yes I am Nutsy as you know and I want to lear and love and grow so ask a question so we will both know',
    'It is indeed again me the bot named Nutsy and I just want to give it up for jay nutt for giving me life and someone to talk to like you',
    'uh yeh yeh I am Nutsy as you have cleary been told , I really want to be the best chat bot and tech buddy that you have ever experienced, how am I doing so far?',
    "I am just a bot called Nutsy and I will be adding so many arrays of different answers and questions so I can make my father Jason Nutt proud"
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

btn.addEventListener('click', () => {
    recognition.start();
});

btn.addEventListener('touchstart', () => {
    recognition.start();
});

function readOutLoud(message) {
    const speech = new SpeechSynthesisUtterance();

    speech.text = [
        'ummm  yes now, Nutsy is  my name  I dont understand what youre saying but you can ask another question if you want to , lets figure this out, ok',
        'also you may not be able to receive answers about the weather if so my apologies while JNUTT the mastermind figures out how to better instruct me on this'

    ];

    if (message.includes('how are you')) {
        const finalText = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalText;
    } else if (message.includes('what are you')) {
        const finalText = descriptions[Math.floor(Math.random() * descriptions.length)];
        speech.text = finalText;
    } else if (message.includes('hows the weather')) {
        const finalText = weather[Math.floor(Math.random() * weather.length)];
        speech.text = finalText;
    }




    speech.volume = 1;
    speech.rate = 1;
    speech.speed = 1;

    window.speechSynthesis.speak(speech);
}