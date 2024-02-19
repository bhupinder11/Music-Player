let arr = [
    {songName: "Admiring You", url:"./songs/Admiring You-(PagalWorld).mp3", img:"images/download.jpg", time:"3:34"},
    {songName: "Arjan Vailly", url:".songs/Arjan Vailly - Animal 320 Kbps.mp3", img:"images/arjanvailly.jpg", time:"3:02"},
    {songName: "Malang Sajna", url:"songs/Malang Sajna_320(PagalWorld.com.cm).mp3", img:"images/Malang-Sajna.jpg", time:"2:27"},
    {songName: "Pehle Bhi Main", url:"songs/Pehle Bhi Main Tumse Mila Hu_320(PagalWorld.com.cm).mp3", img:"images/arjanvailly.jpg", time:"4:10"}
]

let allsongs = document.querySelector("#all-songs");
let poster = document.querySelector("#left");

let play = document.querySelector("#play");
let backward = document.querySelector("#backward");
let forward = document.querySelector("#forward");

let audio = new Audio()

let selectedsong = 0

function mainFunction (){
    let clutter = ""

arr.forEach(function(elem,index){
    clutter += `<div class="song-card" id=${index}>
    <div class="part1">
        <img src=${elem.img} alt="">
        <h2>${elem.songName}</h2>
    </div>
    <h6>${elem.time}</h6>
</div>`
})
audio.src = arr[selectedsong].url
allsongs.innerHTML = clutter;

poster.style.backgroundImage = `url(${arr[selectedsong].img})`

}
mainFunction();

allsongs.addEventListener("click", function(details){
    selectedsong = details.target.id
    mainFunction()
    play.innerHTML = `<i class="ri-pause-fill"></i>`
    flag = 1
    audio.play()
})


let flag = 0

play.addEventListener("click", function(){
    if(flag == 0){
        play.innerHTML = `<i class="ri-pause-fill"></i>`
        mainFunction();
        audio.play();
        flag = 1
    } else{
        play.innerHTML = `<i class="ri-play-fill"></i>`
        mainFunction();
        audio.pause();
        flag = 0
    }
})


forward.addEventListener("click", function(){
    if(selectedsong < arr.length-1){
        selectedsong++
        mainFunction();
        audio.play;
    }else{
        forward.style.opacity = 0.4
    }
})

backward.addEventListener("click", function(){
    if(selectedsong > 0){
        selectedsong--
        mainFunction();
        audio.play;
    }else{
        backward.style.opacity = 0.4
    }
})

