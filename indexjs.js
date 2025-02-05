let isEnglish = true;

window.onload = function () {
    currentSongIndex = 0;
    song1.style.color = "purple"
};

function yahooClick() {
    var yahoo = document.getElementById("yahoo");
    yahoo.play();
}

function meowClick() {
    var meow = document.getElementById("meow");
    meow.play();
    //setTimeout(function() {
    //window.open("catPage.html", "_self");
    //}, 1000);
}

function logoClick() {
    window.open("index.html", "_self");
}

const songs = ["pulsewidth", "melty", "digeridoo", "speedway", "sniping", "chris"];
let currentSongIndex = 0;

function togglePlayPause() {
    let playbtn = document.getElementById("play");
    let currentSong = document.getElementById(songs[currentSongIndex]);

    if (currentSong.paused) {
        currentSong.play();
        playbtn.src = "assets/mediaPlayer/mediaplayer_pause.png";
    } else {
        currentSong.pause();
        playbtn.src = "assets/mediaPlayer/mediaplayer_play.png";
    }
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    changeSong();
}

function previousSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    changeSong();
}

function changeSong() {
    pauseAllSongs();

    let playbtn = document.getElementById("play");
    let currentSong = document.getElementById(songs[currentSongIndex]);
    let trackPic = document.getElementById("trackPic");

    let song1 = document.getElementById("song1")
    let song2 = document.getElementById("song2")
    let song3 = document.getElementById("song3")
    let song4 = document.getElementById("song4")
    let song5 = document.getElementById("song5")
    let song6 = document.getElementById("song6")

    currentSong.currentTime = 0;
    currentSong.play();

    playbtn.src = "assets/mediaPlayer/mediaplayer_pause.png";

    const songNames = [song1, song2, song3, song4, song5, song6];
    songNames.forEach(song => song.style.color = "#41389b");

    switch (songs[currentSongIndex]) {
        case "melty":
            trackPic.src = "assets/images/meltyblood.jpg";
            song2.style.color = "purple"
            break;
        case "digeridoo":
            trackPic.src = "assets/images/Digeridoovinyl.jpg";
            song3.style.color = "purple"
            break;
        case "speedway":
            trackPic.src = "assets/images/stardustspeedway.jpg";
            song4.style.color = "purple"
            break;
        case "sniping":
            trackPic.src = "assets/images/raiden.jpg";
            song5.style.color = "purple"
            break;
        case "chris":
            trackPic.src = "assets/images/hedgehogboys.jpg";
            song6.style.color = "purple"
            break;
        default:
            trackPic.src = "assets/images/pulswidth.jpg";
            song1.style.color = "purple"
    }
}

function pauseAllSongs() {
    let allAudios = songs.map(id => document.getElementById(id));
    allAudios.forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
    });
}

function song1Click() {
    currentSongIndex = 0;
    changeSong();
}

function song2Click() {
    currentSongIndex = 1;
    changeSong();
}

function song3Click() {
    currentSongIndex = 2;
    changeSong();
}

function song4Click() {
    currentSongIndex = 3;
    changeSong();
}

function song5Click() {
    currentSongIndex = 4;
    changeSong();
}

function song6Click() {
    currentSongIndex = 5;
    changeSong();
}