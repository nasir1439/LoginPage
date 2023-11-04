const togglebtn = document.getElementById('nav-toggle');
let navlinks = document.getElementById('nav-links');


togglebtn.addEventListener('click',()=>{
    if(navlinks.classList.contains('ino')== true){
        navlinks.classList.remove('ino');
        navlinks.classList.add('inoactive');
    }
    else if(navlinks.classList.contains('inoactive')== true){
        navlinks.classList.remove('inoactive');
        navlinks.classList.add('ino');
    }
    else{

    }
})
let text=document.getElementById('text');
console.log(text);
togglebtn.addEventListener('click',()=>{
    if(text.classList.contains('text-section')){
        text.classList.replace('text-section','text-sectionoe')
    }
    else{
        text.classList.replace('text-sectionoe','text-section')
    }
})