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
      if (output=="take my selfie"){
        speak()
      }
      
}
  
  function speak(){
    var speechAPI=window.speechSynthesis// This is the API to convert text into speech//
    var speechData="Taking selfie in 5 seconds...Say cheese"
    var utterThis= new SpeechSynthesisUtterance(speechData)//This will store the coverted text to speech//
    speechAPI.speak(utterThis)//This will make the text into speech//
    Webcam.attach("#camera")
    setTimeout(function(){
      snapshot();
      save()
    },5000)
  }

  Webcam.set({
    height:250,
    width:360,
    image_format:"jpg",
    jpg_quality:90
    })
 
    function snapshot(){
      Webcam.snap(
        function(selfie) {
          document.getElementById("snapshot").innerHTML=`<img id="selfie" src=${selfie}>`
          
    
        }
      )
    }

    function save(){
      link=document.getElementById("blank")
      img=document.getElementById("selfie").src
      link.href=img
      link.click()
    }