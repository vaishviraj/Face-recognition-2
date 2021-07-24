Webcam.set({
    height: 350,
    width: 300,
    image_format:'png',
    png_quality:90
});

camera= document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML= '<img id="captured_image"src="'+data_uri+'">';
    });
}

console.log('ml5 version:', ml5.version);
classifier= ml5.imageClassifier('https://drive.google.com/file/d/1fUhhBFi_NQdMI7TwJK6VoLWdDd7X-B01/view?usp=sharingmodel.json', modelLoaded);

function modelLoaded(){
    console.log('Model Loaded!')
}

function check(){
    img= document.getElementById("captured_image");
    classifier.classify(img, gotResult);

}

function gotResult(){

}