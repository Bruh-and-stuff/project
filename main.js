Webcam.set({
    width:500,
    height:450,
    image_format:"png",
    png_quality:90
})

Webcam.attach("#camera")

function snap_Photo(){
    Webcam.snap(function(data_url){
        document.getElementById("result").innerHTML = "<img id='resultimg' src='"+data_url+"'>"
    })
}

console.log("ml5: ", ml5.version)
var teach_machine = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/NYtGXo7UQ/model.json", working)

function working(){
    console.log("ITS WORKING")
}

//add the TeachableMachine