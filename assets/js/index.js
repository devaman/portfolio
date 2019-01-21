let up = document.getElementById("up")
window.addEventListener('scroll',()=>{
    
    if(window.pageYOffset>400&&window.pageYOffset<=(document.body.getBoundingClientRect().height-700)){
        up.style.display='block';
    }else{
        up.style.display='none';
    }
})