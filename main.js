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
  }