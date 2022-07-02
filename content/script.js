if(window.screen.width >= 880){
    var $simpleCarousel = document.querySelector(".js-carousel--simple");
     
    const gliderInstance = new Glider($simpleCarousel, {
      slidesToShow: 2,
      slidesToScroll: 1,
      draggable: false,
      scrollLock: true
    });
    
    gliderAutoplay(gliderInstance, {interval: 2000});
    gliderInstance.run();
}else{
    let slider = document.querySelector('#slider div')
    let foward = true
    let i = 0
    
    setInterval(() => {
        if(foward){
            let fwd = setInterval(()=>{
                slider.style.transform = `translateX(-${i}%)`
                    
                if(i < 100)
                    i++
                else if(i == 100){
                    i++
                    clearInterval(fwd)
                }
                else if(i > 100 && i < 200)
                    i++
                else if(i == 200){
                    foward = false
                    clearInterval(fwd)
                }
            }, 5)
        }else{
            let bwd = setInterval(()=>{
                slider.style.transform = `translateX(-${i}%)`
                    
                if(i > 100)
                    i--
                else if(i == 100){
                    i--
                    clearInterval(bwd)
                }
                else if(i > 0 && i < 100)
                    i--
                else if(i == 0){
                    foward = true
                    clearInterval(bwd)
                }
            }, 5)
        }
    }, 5000)
}