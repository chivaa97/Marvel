window.addEventListener('scroll', function () {

    function fade(direction) {
        var p = document.querySelectorAll('.fade-'+direction);
        // console.log(altura);

        
 
        for (let i = 0; i < p.length; i++) {

            // altura de la ventana
            var altura = window.innerHeight / 1;
            var distancia = p[i].getBoundingClientRect().top;
            p[i].classList.add('transform-'+direction);

            if (distancia <= altura) {
                p[i].classList.add('aparece');
            } else {
                p[i].classList.remove('aparece');
            }
        }
    }
    fade('up');
    fade('left');
})



 const activePage = window.location.pathname;
//  console.log(activePage);
 const navLinks = document.querySelectorAll('nav a').forEach(link =>{
     if(link.href.includes(`${activePage}`)){
         link.classList.add('active');
     }
 });

 const marvel = {
    render: () => {
      const url =
  
        `https://gateway.marvel.com:443/v1/public/characters?limit=50&ts=1&apikey=cd12be8edb275a24681f9c6f8df72cc3&hash=f021cd884fdf7958d58e7c80068ab279`;
      const container = document.querySelector("#marvel-row");
      let contentHTML = ""; 
  
      fetch(url)
        .then((res) => res.json())
        .then((json) => {
        //   console.log(json, "RES.JSON");
          for(const hero of json.data.results) {
              let urlHero = hero.urls[0].url;
  
              contentHTML +=`<div class="hero-container">
                              <a href="${urlHero}" target="_blank">
                              <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}"
                              class="img-thumbnail">
                              </a>
                              <h3 class="title">${hero.name}</h3>
                            <!--<h1 class="title">${hero.comics.available}</h1>-->
                             </div>`;
                             console.log("cantidad de personajes: "+hero)
          }
          container.innerHTML = contentHTML;
        });
    },
  };
marvel.render();
   
$(document).ready(function(){

    $('.ir-arriba').click(function(){
        $('body, html').animate({
            scrollTop: '0px'
        }, 800);
    });

    $(window).scroll(function(){
        // console.log(scrollY);
        if( $(this).scrollTop() > 500 ){
            $('.ir-arriba').slideDown(300);
        } else {
            $('.ir-arriba').slideUp(300);
        }
    });

});

