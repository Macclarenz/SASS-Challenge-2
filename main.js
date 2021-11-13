function introAnimation() {
    const tl = gsap.timeline({
        defaults: {
            ease: 'power1.out'
        }
    });

    tl.to('.load-icon-container', 
    {opacity: 0,
     duration: .3,
     delay: 1,
     display: 'none'})

    tl.fromTo('.phone-container', {
        opacity: 0
    }, {
        opacity: 1,
        duration: .5
    });

    tl.fromTo('.simple-booking-container', {
        opacity: 0,
        x: 50
    }, {
        opacity: 1,
        duration: .5,
        x: 0
    });

    const phoneAnimation = () => {
        // ANIMATE CHAT 1
        tl.fromTo('.chat-animate-1', {
            opacity: 0,
            transform: 'scale(0)'
        }, {
            opacity: 1,
            duration: .3,
            stagger: 1,
            transform: 'scale(1)'
        });

        // ANIMATE CHAT 2
        tl.fromTo('.chat-animate-2a', {
            opacity: 0,
            transform: 'scale(0)'
        }, {
            opacity: 1,
            duration: .3,
            delay: .8,
            stagger: .2,
            transform: 'scale(1)'
        });

        tl.fromTo('.chat-animate-2b', {
            opacity: 0,
            transform: 'scale(0)'
        }, {
            opacity: 1,
            duration: .3,
            delay: .8,
            stagger: 1.5,
            transform: 'scale(1)'
        });

        // ANIMATE CHAT 3
        tl.fromTo('.chat-animate-3', {
            opacity: 0,
            transform: 'scale(0)'
        }, {
            opacity: 1,
            duration: .3,
            delay: .8,
            stagger: 1.5,
            transform: 'scale(1)'
        });
    }

    phoneAnimation();
}

introAnimation()
