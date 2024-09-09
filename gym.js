let sections = document.querySelectorAll('section');
let navlinks =document.querySelectorAll('header nav a')

window.onscroll= ()=>{
     sections.forEach(sec=> {
        let top = window.scrollY;
        let offset=sec.offsetTop;
        let heght=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top >= offset && top <offset+heght) {
             navlinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a'
                    [href*='+ id+']).classList.add
                    ('active');
            }); 
        };    

     });
};