
Webcam.set({
        width:350,
        height:300,
        image_format:"png",
        png_quality:90
})
camera = document.getElementById("camera");
Webcam.attach(camera);
function take_snapshot(){
      Webcam.snap(function(photo){
          document.getElementById("result").innerHTML = "<img id='image' src="+photo+">"
      });
}
console.log("ml5.version", ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/pwMcILQJ0J/model.json", modelloaded);
function modelloaded(){
    console.log("Model Is Loaded");
}
prediction1 = "";
prediction2 = "";
function check(){
    img = document.getElementById("image");
    classifier.classify(img, gotresults);
}

function speak(){
    var synth = window.speechSynthesis;
    data1 = "Prediction 1 is "+prediction1;
    data2 = "And Prediction 2 is "+prediction2;
    var utterThis = new SpeechSynthesisUtterance(data1+data2);
    synth.speak(utterThis);
}
function gotresults(error, results){
    if (error) {
        console.error(error)
    } else {
        console.log(results);
        document.getElementById("result_emotion_name1").innerHTML = results[0].label;
        document.getElementById("result_emotion_name2").innerHTML = results[1].label;
        prediction1 = results[0].label;
        prediction2 = results[1].label;
        speak()
        if (prediction1 == "Happy") {
            document.getElementById("update_emoji1").innerHTML ="&#128512;"; 
        }
        if (prediction1 == "Sad") {
            document.getElementById("update_emoji1").innerHTML ="&#128532;"; 
        }
        if (prediction1 == "Angry") {
            document.getElementById("update_emoji1").innerHTML ="&#128545;"; 
        }
        if (prediction1 == "Scared") {
            document.getElementById("update_emoji1").innerHTML ="&#128552;"; 
        }
        if (prediction2 == "Happy") {
            document.getElementById("update_emoji2").innerHTML ="&#128512;"; 
        }
        if (prediction2 == "Sad") {
            document.getElementById("update_emoji2").innerHTML ="&#128532;"; 
        }
        if (prediction2 == "Angry") {
            document.getElementById("update_emoji2").innerHTML ="&#128545;"; 
        }
        if (prediction2 == "Scared") {
            document.getElementById("update_emoji2").innerHTML ="&#128552;"; 
        }
    }
}