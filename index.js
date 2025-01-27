const input = document.getElementById("audio").addEventListener("change", (event) => {
    // console.log(event)
    const file = event.target.files[0]
    // console.log(file)

    const reader = new FileReader()

    reader.readAsArrayBuffer(file)

    reader.addEventListener("load", (event) => {
        // console.log(event);
        const arrayBuffer = event.target.result;

        const audioContext = new (window.AudioContext || window.webkitAudioContext)()

        audioContext.decodeAudioData(arrayBuffer, (audioBuffer) => {
            // console.log(audioBuffer)
            visualize(audioBuffer,audioContext);
        })


    });

});


function visualize(audioBuffer,audioContext) {

    const canvas = document.getElementById("canvas")
    canvas.width=800
    canvas.height=600

  const analyser = audioContext.createAnalyser()
    analyser.fftSize = 128
  

   // console.log(analyser.frequencyBinCount)

    const frequencyBufferLength = analyser.frequencyBinCount
    const frequencyData = new Uint8Array(frequencyBufferLength)
    const source = audioContext.createBufferSource()
    source.buffer = audioBuffer
    source.connect(analyser)
    analyser.connect(audioContext.destination)
    source.start()


    const canvasContext = canvas.getContext("2d")

/*    const channelData = audioBuffer.getChannelData(0)

    const numberOfChunks = 400
    const chunkSize = Math.ceil(channelData.length / numberOfChunks)

*/

    canvasContext.fillStyle='#D1B3D1';
   // canvasContext.fillRect(0,0,canvas.width,canvas.height);
   // console.log(canvas.width, canvas.height);

    const center = canvas.height/2
    const barWidth = canvas.width/frequencyBufferLength
    




function draw()
{
    requestAnimationFrame(draw)
    canvasContext.clearRect(0,0,canvas.width,canvas.height)
    analyser.getByteFrequencyData(frequencyData)
    console.log(frequencyData)
    
for (let i = 0; i < frequencyBufferLength ; i++) {

  /*      const chunk = channelData.slice(i * chunkSize, (i + 1) * chunkSize)
        let max = Math.max(...chunk) *100
        let min = Math.min(...chunk) *100
       // console.log(min, max)
  */	
	canvasContext.fillRect(i*barWidth,canvas.height - frequencyData[i],barWidth-1,frequencyData[i])

    }


}

draw()
  

}

