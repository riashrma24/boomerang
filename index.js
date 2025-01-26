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
            console.log(audioBuffer)
        })


    });

});

console.log(input)