var SpeechRecognition=window.webkitSpeechRecognition
var webSpeechAPI=new SpeechRecognition()

function start(){
  document.getElementById("textbox").value=""
  webSpeechAPI.start()

  }
  webSpeechAPI.onresult=function getResults(event){
      console.log(event)
      var output=event.results[0][0].transcript
      console.log(output)
      document.getElementById("textbox").value=output
      speak()
  }
  
  function speak(){
    var speechAPI=window.speechSynthesis// This is the API to convert text into speech//
    var speechData=document.getElementById("textbox").value//This is the data to be converted into speech//
    var utterThis= new SpeechSynthesisUtterance(speechData)//This will store the coverted text to speech//
    speechAPI.speak(utterThis)//This will make the text into speech//
    Webcam.attach("#camera")
  }

  Webcam.set({
    height:250,
    width:360,
    image_format:"jpg",
    jpg_quality:90
    })
 
