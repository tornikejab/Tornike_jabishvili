let subMenu = document.getElementById("subMenu");

    function toggleMenu (){
        subMenu.classList.toggle("open-menu");
    }

    let sliderImg = document.querySelector('.slider-img')
    let images = ['a.png','b.png']
    let i = 0;

    function prev(){
        if (i <= 0) i = images.length;
        i--;
        return setImg();
    }


    function next(){
        if ( i >= images.length - 1) i = -1;
        i++;
        return setImg();
    }

    function setImg(){
        return sliderImg.setAttribute('src', 'img/' + images[i])
    }

    $(".testimonial_slider_area").owlCarousel({
        autoplay:true,
        slideSpeed:3000,
        items:3,
        nav:true,
        navText:['<i class="fa fa-arrow-left"></i>','<i class="fa fa-arrow-right"></i>'],
        margin:30,
        dots:true,
        responsive:{
            320:{
                items:2
            },
            700:{
                items:2
            },
            1000:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });


