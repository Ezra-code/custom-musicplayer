document.addEventListener("DOMContentLoaded", () => {
    fetchAllSongs()
})


function fetchAllSongs(){
    fetch('https://acnhapi.com/v1a/songs/?_limit=20')
    .then(res => res.json())
    .then(songs => {
        songs = songs.slice(0, 10)
        songs.forEach(song => {
            displaySongs(song)
        })
    })
}
// function displaySongs(song){
//     let displayDiv = document.querySelector(".cards")
//     displayDiv.innerHTML += `  
//     <div class="music-card">    
//         <img src="${song["image_uri"]}" alt="" >

//         <h3>${song["file-name"]}</h3>

//         <audio controls>
//             <source src="${song["music_uri"]}">
//         </audio>

//         <div id="price">
//             <p id="buy-price">buying price: <span>${song["buy-price"]}</span></p>
//             <p id="sell-price">selling price: <span>${song["sell-price"]}</span></p>
//         </div>

//         <div class="price-button">
//             <button id="buy">buy</button>
//             <button id="sell">sell</button>
//         </div>

//         <button id="edit">Edit</button>
//     </div>
//     `
// }