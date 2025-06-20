let menu=document.querySelector('#menu')
let navbar=document.querySelector('.navbar')
let navA=document.querySelectorAll('.navbar a')
let sections =document.querySelectorAll('section')

window.onscroll =()=>{
    sections.forEach(sec => {
        let top=window.screenY
        let offset=sec.offsetTop-150
        let height =sec.offsetHeight
        let id=sec.getAttribute('id')

        if(top >= offset && top < offset+height){
            navA.forEach(links=>{
                links.classList.remove('active')
                document.querySelector('header nav a[herf*='+id+']').classList.add('active')
            })
        }
        
    });
}
menu.onclick=()=>{
    navbar.classList.toggle('active')
}