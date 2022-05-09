const sounds=["applause","boo","gasp","tada","victory","wrong"]

sounds.forEach((sound)=>{
    const btn=document.createElement('button')

    btn.innerText=sound;

    btn.classList.add("style")

    btn.addEventListener('click',()=>{
        stop()
        document.getElementById(sound).play()
    })

    document.body.appendChild(btn)
})

function stop(){
    sounds.forEach((sound)=>{
        const song=document.getElementById(sound)
        song.pause()
        song.currentTime=0
    })
}