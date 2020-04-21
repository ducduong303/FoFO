var all = {
    init: function () {
        this.fixedmenu();
        this.menuclick();
        this.tab();
        this.slide();
        this.ontop();
    },
    fixedmenu: function () {
        var header = document.querySelector('.header')
        var img = document.querySelector('.nav__logo img')
        var i = 0;
        window.addEventListener('scroll', function () {
            var scroll = window.pageYOffset;
            if (scroll > i) {
                header.classList.remove('hien');
                img.src = "./assets/image/logo-white.png";
            }
            else if (scroll == 0) {
                img.src = "./assets/image/logo-white.png";
                header.classList.remove('hien');
            }
            else {
                header.classList.add('hien');
                img.src = "./assets/image/logo.png";
            }
            i = scroll
        })
    },
    menuclick: function () {
        var bar = document.querySelector('.bar')
        var nav = document.querySelector('.nav__list')
        var tab = document.querySelectorAll('.tab');
        console.log(tab);
        var sub = document.querySelectorAll('.sub__nav')
        bar.addEventListener('click', function () {
            nav.classList.toggle('ra')
        })
        tab.forEach(function (btn, index) {
            btn.addEventListener('click', function () {
                sub[index].classList.toggle('he');
            })
        })
    },
    tab: function () {
        var btn = document.querySelectorAll('#btn li')
        var content = document.querySelector('.content__row').children;
        btn.forEach(function (item, index) {
            item.addEventListener('click', function () {
                for (var i = 0; i < btn.length; i++) {
                    btn[i].classList.remove('active')
                }
                this.classList.add('active')
                var taget = this.getAttribute("data-taget");
                for (var j = 0; j < content.length; j++) {
                    // content[j].style.visibility = "hidden" 
                    content[j].style.opacity = "0.5"
                    content[j].style.transform = "scale(0.8)";
                    content[j].style.transition = 'transform .5s ease-in-out';
                    if (content[j].getAttribute("data-moda") == taget) {
                        content[j].style.opacity = "1"
                        content[j].style.transform = "scale(1)";
                    }
                    if (content[j].getAttribute("data-anve") == taget) {
                        content[j].style.opacity = "1"
                        content[j].style.transform = "scale(1)";
                    }
                    if (content[j].getAttribute("data-bra") == taget) {
                        content[j].style.opacity = "1"
                        content[j].style.transform = "scale(1)";
                    }
                    if (content[j].getAttribute("data-des") == taget) {
                        content[j].style.opacity = "1"
                        content[j].style.transform = "scale(1)";
                    }
                    if (content[j].getAttribute("data-photo") == taget) {
                        content[j].style.opacity = "1"
                        content[j].style.transform = "scale(1)";
                    }
                    if (taget == "all") {
                        content[j].style.opacity = "1"
                        content[j].style.transform = "scale(1)";
                    }
                }
            })
        })
    },
    slide: function () {
        var nutPrev  = document.querySelector('.prev')
        var nutNext = document.querySelector('.next')
        var slides = document.querySelectorAll('.section-6__slide ul li')
        var chisohientai = 0; // để xác định phần tử hiện tại
        var soluongslide = slides.length; // để xác định số lượng slide
        var trangthai = 'dangdungyen';

        function Slider(btn) {
            if (trangthai == 'dangchuyendong') { return false; } // dừng chương trình luôn
            // sau khi bước trên false 
            trangthai = 'dangchuyendong';
            var trangthai2chuyendong = 0;
            var phantuhientai = slides[chisohientai]
            chisohientai = (btn == 'nutNext') ? ((chisohientai < soluongslide - 1) ? (chisohientai + 1) : 0) : (chisohientai > 0) ? (chisohientai - 1) : (soluongslide - 1)
            var phantutieptheo = slides[chisohientai]
            var xulyEndhientai = function () {
                this.classList.remove('dangxem');
                this.classList.remove((btn == 'nutNext') ? ('bienmatkhinext') : ('bienmatkhiprev'))
                trangthai2chuyendong++; // =1
                if (trangthai2chuyendong == 2) { trangthai = 'dangdungyen' }
            }
            var xulyEndtieptheo = function () {
                this.classList.add('dangxem');
                this.classList.remove((btn == 'nutNext') ? ('divaokhinext') : ('divaokhiprev'))
                trangthai2chuyendong++;
                if (trangthai2chuyendong == 2) { trangthai = 'dangdungyen' }
            }
            phantuhientai.addEventListener('webkitAnimationEnd', xulyEndhientai)
            phantutieptheo.addEventListener('webkitAnimationEnd', xulyEndtieptheo)
            phantuhientai.classList.add((btn == 'nutNext') ? ('bienmatkhinext') : ('bienmatkhiprev'))
            phantutieptheo.classList.add((btn == 'nutNext') ? ('divaokhinext') : ('divaokhiprev'))
        }
        var chuyenslideNext = function () {
            Slider('nutNext')
        }
        var chuyenslidePrev = function () {
            Slider('nutPrev')
        }
        nutNext.addEventListener('click', chuyenslideNext)
        nutPrev.addEventListener('click', chuyenslidePrev)

    },
    ontop:function(){
        var top = document.querySelector('.ontop')
        window.addEventListener('scroll', function () {
            if (this.window.scrollY > 100) {
                top.classList.add('ra')
            }
            else {
                top.classList.remove('ra')
            }
        })
        
    }


}
all.init();