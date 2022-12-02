let nowPlaying = document.querySelector('.now-playing')
let trackArt = document.querySelector('.track-art')
let trackName = document.querySelector('.track-name')
let trackArtist = document.querySelector('.track-artist')


let playpause_btn = document.querySelector('.playpause-track')
let next_btn = document.querySelector('.next-trackt')
let prev_btn = document.querySelector('.prev-track')


let seek_slider = document.querySelector('.seek_slider')
let volume_slider = document.querySelector('.volume_slider')
let currTime = document.querySelector('.current-time')
let totDuration = document.querySelector('.total-duartion')
let wave = document.getElementById('wave')
let randomIcon = document.querySelector('.bi-shuffle')
let curr_track = document.createElement('audio')

let trackIndex = 0
let isPlaying = false
let isRandom = false
let updateTimer