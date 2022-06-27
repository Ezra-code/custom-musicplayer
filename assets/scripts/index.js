document.addEventListener("DOMContentLoaded", () => {
    fetchAllSongs()
    submitNewMusic()
    fetchLocalMusic()
})


function fetchAllSongs(){
    fetch('https://acnhapi.com/v1a/songs')
    .then(res => res.json())
    .then(songs => {
        songs = songs.slice(0, 10)
        songs.forEach(song => {
            displaySongs(song)
        })
    })
}
function displaySongs(song){
    let displayDiv = document.querySelector(".cards")
    displayDiv.innerHTML += `  
    <div class="music-card">    
        <img src="${song["image_uri"]}" alt="" id="img">

        <h3>${song["file-name"]}</h3>

        <audio controls>
            <source src="${song["music_uri"]}">
        </audio>

        <div class="social-button">
            <button id="favorite">Favorite <i class="fa-solid fa-heart"></i></button>
            <button id="like">Like <i class="fa-solid fa-thumbs-up"></i></button>
        </div>

    </div>
    `
}
    let url = 'http://localhost:3000/songs'
    let music = {}
function uploadNewMusic(){
    fetch(url, {
        method:'POST',
        headers:{
            "content-type":"application/json",
            Accept:"application/json"
        },
        body:JSON.stringify(music)
    })
}

function submitNewMusic(){
    document.querySelector('form').addEventListener('submit', (e) =>{
        e.preventDefault()
        const sName = document.getElementById('sname').value
        const sPrice = document.getElementById('sprice').value
        const songLink = document.getElementById("song").value
        const songImage = document.getElementById("image").value
        console.log(songLink)
        document.querySelector('form').reset()
        if(sName == "" || sPrice == ""){
            document.getElementById('error').innerHTML = "all input fields are required".toUpperCase()
        }else{
            music.name = sName
            music.price = sPrice
            music.src = songLink
            music.img = songImage
        }
        uploadNewMusic()
    })
}
function fetchLocalMusic(){
    fetch(url)
    .then(res => res.json())
    .then(data => data.forEach(song=>{
        displayLocalSongs(song)
    }))
}

function displayLocalSongs(song){
    let displayDiv = document.querySelector(".cards")
    displayDiv.innerHTML += `  
    <div class="music-card">    
        <img src="${song.img}" alt="" id="img">

        <h3>${song["name"]}</h3>

        <audio controls>
            <source src="${song["src"]}">
        </audio>

        <div class="social-button>
            <button id="favorite">Favorite <i class="fa-solid fa-heart"></i></button>
            <button id="like">Like <i class="fa-solid fa-thumbs-up"></i></button>
        </div>

    </div>
    `
}
