const startingNotesButton = document.getElementById('startingNotesButton');
const startingNotesIcon = document.getElementById('startingNotesIcon');
const urlParams = new URLSearchParams(window.location.search);
const bookName = urlParams.get("book");
const songNum = urlParams.get("song");

import { getSongMetaData } from "/books/index.js"

let book_song_metadata = null;
if (bookName != null && songNum != null){
    (async () => {
        book_song_metadata = await getSongMetaData(bookName);
        if (book_song_metadata[songNum]["notes"] != null){
            startingNotesIcon.classList.remove('hidden');
        }
    })();
}

const sampler = new Tone.Sampler({
	urls: {
		"C4": "C4.mp3",
		"D#4": "Ds4.mp3",
		"F#4": "Fs4.mp3",
		"A4": "A4.mp3",
	},
	release: 1,
	baseUrl: "https://tonejs.github.io/audio/salamander/",
}).toDestination();


startingNotesButton.addEventListener('mousedown', (e) => {
    var interval = (window.localStorage.getItem("playbackInterval") == undefined) ? 0.25 : parseFloat(window.localStorage.getItem("playbackInterval"));
    var duration = (window.localStorage.getItem("playbackDuration") == undefined) ? 3 : parseFloat(window.localStorage.getItem("playbackDuration"));
    if (book_song_metadata != null && book_song_metadata[songNum]["notes"] != null) {
        if(window.localStorage.getItem("staggered") == "true" || window.localStorage.getItem("staggered") == undefined) {
            for(var i = (book_song_metadata[songNum]["notes"].length); i > 0; i--) {
                sampler.triggerAttack(book_song_metadata[songNum]["notes"][i - 1], Tone.now() + (interval * (book_song_metadata[songNum]["notes"].length - i)));
            }
        } else {
            sampler.triggerAttack(book_song_metadata[songNum]["notes"], Tone.now());
        }
        sampler.triggerRelease(book_song_metadata[songNum]["notes"], Tone.now() + duration + (interval * book_song_metadata[songNum]["notes"].length));
    }
});
