let text="Balabhadra chakrinya sri rama sai eswar"



let index=0;

function repeat(){
    
    document.body.innerHTML=text.slice(0,index)
  

    if(index>text.length){
        index=0;
    }

    index++;
}

setInterval(()=>{
    repeat()
},100)