var SpeechRecognition = window.webkiSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

regonition.onresult = function(event) {

    console.log(event);

    var Content = event.result[0] [0].transcript;
    
    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
        speak();
}

function speak(){
    var synth = window.speechSynthesis;

    speak_data = document.getElementById("textbox").innerHTML;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);
    Webcam.attach(camera);
}

camera = document.getElementById("camera");
Webcam.set({
    width: 360,
    height:250,
    image_format : 'jpeg',
    png_quality:90
});
