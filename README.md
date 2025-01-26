# Steps-


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

7. 


