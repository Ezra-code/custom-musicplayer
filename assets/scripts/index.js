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
let totDuration = document.querySelector('.total-duration')
let wave = document.getElementById('wave')
let randomIcon = document.querySelector('.bi-shuffle')
let curr_track = document.createElement('audio')

let trackIndex = 1
let isPlaying = false
let isRandom = false
let updateTimer

getTrack()

function getTrack(){
    fetch(' http://localhost:3000/songs')
    .then(r => r.json())
    .then(songs => songs.forEach(element => {
        if(element.id == trackIndex){
            loadTrack(element)
            console.log(element)
        }
    }))
}

function loadTrack(trackIndex){
    clearInterval(updateTimer)
    reset()

    curr_track.src = trackIndex.Music
    curr_track.load()

    trackArt.style.backgroundImage = "url(" + trackIndex.image + ")"
    trackName.textContent = trackIndex.name
    trackArtist.textContent = trackIndex.Artist
    nowPlaying.textContent = `Playing song number ${trackIndex.id}: ${trackIndex.name}`

    updateTimer = setInterval(setupdate, 1000)

    curr_track.addEventListener('ended', nextTrack)
    randomBgColor()
}

const randomBgColor = () =>{
    let hex = ['1','2','3','4','5','6','7','8','9','a','b','c','d','e']
    let a;

    function populate(a){
        for(let i=0; i<6; i++){
            let x = Math.round(Math.random() * 14)
            let y = hex[x]
            a += y
        }

        return a;
    }

    let color1 = populate('#')
    let color2 = populate('#')
    let angle = 'to right'

    let gradient = `linear-gradient(${angle},${color1},${color2})`

    document.body.style.background = gradient
}
function reset(){
    currTime.textContent = "00:00"
    totDuration.textContent = "00:00"
    seek_slider.value = 0
}

function randomTrack(){
    isRandom ? pauseRandom() : playRandom()
}

function playRandom(){
    isRandom = true
    randomIcon.classList.add('randomActive')
}
function pauseRandom(){
    isRandom = false
    randomIcon.classList.remove('randomActive')
}
function repeatTrack(){
    let currIndex = trackIndex
    loadTrack(currIndex)
    playTrack()
}

function playpauseTrack(){
    isPlaying ? pauseTrack() : playTrack()
}

function playTrack(){
    curr_track.play()
    isPlaying = true
    trackArt.classList.add('rotate')
    wave.classList.add('loader')
    playpause_btn.innerHTML = '<i class="bi bi-pause-circle-fill"></i>'
}
function pauseTrack(){
    curr_track.pause();
    isPlaying = false
    trackArt.classList.remove('rotate')
    wave.classList.remove('loader')
    playpause_btn.innerHTML = '<i class="bi bi-play-circle-fill"></i>'

}