To access test it with your own sounds, access https://riashrma24.github.io/boomerang/

# Creation Steps-


## Getting the audio file

1. create index.html and index.js files
2. leave the index.js file empty for now, and specify an input tag and canvas in the html. also attach js file to it
3. inside the js file try to get the event object generated every time we get a new input file, and print it


inside the event object, we have a target property, inside this target property we have a files variable that stores all the files that our object carries

4. Try to get to our audio file via the event object and then print it

## Processing the data inside the audio file

5. inorder to read our mp3 file we will use a file reader 

ArrayBuffer -> handling raw binary data
and to read the file we will use the readAsArrayBuffer method
but this readAsArrayBuffer method is an asynchronous method, so it does not return anything directly from it
therefore inorder to get the value we make use of event listeners

inside the progressEvent object we have a target attribute, inside the target attribute we have a result attribute. This result attribute contains the ArrayBuffer

6. Now, to visualize the contents we will need to convert this ArrayBuffer to AudioBuffer (using the AudioContext provided by the Web audio API)

7. We will be plotting the properties of audioBuffer, therefore lets first take a look at them

    (i) Channels : independent audio signals contained within an audio buffer, each channel represents a separate stream of audio's data. (eg : mono, stereo, surround sound)

    (ii) SampleRate : Number of samples of audio carried per sec, measured in Hertz. It determines the quality of the audio.

We will use channels property and SampleRate property to visualize the audio

8. In visualize, we will first need the canvas element of our page. Now, in order to draw something on the canvas, we need the context.

9. To get channel data, we use getChannelData method, it returns the Pulse Code Modulation(PCM) data associated.

We will plot this amplitude data. Instead of plotting each and every element we will plot a chunk of points as one.

10. Right now the channel data(PCM data) has positive and negative values because it represents the waveform of an audio signal. 

11. To draw something on the rectangle we use the fillRect(x,y,width,height) method of canvas context. Here, the x,y represent the top left corner of the rectangle.

12. By, 

let max = Math.max(...chunk) *100
        let min = Math.min(...chunk) *100
       // console.log(min, max)
	
	canvasContext.fillRect(i*barWidth,center-max,barWidth,max+Math.abs(min))


we have represented our entire audio as waveform, but we want a moving chart. For this we will use Fast Fourier Transform(FFT) to convert time based waves to frequency based waves.


13. We donot need the frequency analysis of all 500 million samples. To divide our original sample into chunks we use fftsize. This cannot be a random value, it should always be a power of 2 and should lie between 32 and 16384. The default value is 2048.

