let btn=document.getElementById('btn')

let container=document.getElementById('container')

btn.addEventListener("click",()=>{
    cre()
});

function cre(){

  let notify=document.createElement('div')

  notify.classList.add('toast')

  notify.innerText="balabhadra chakrinya sri rama sai eswar"

  container.appendChild(notify)

  setTimeout(()=>{
      notify.remove()
  },3000)

}