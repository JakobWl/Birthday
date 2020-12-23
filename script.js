$(document).ready(function () {

    AOS.init();
    let t1 = gsap.timeline({
        paused: true
    });
    let flap = CSSRulePlugin.getRule(".envelope:before");

    var folder = "./images";

    var ily = ['Ich', 'Liebe', 'Dich']

    var counter = 0;

    var slidercount = 0;

    $(document).on('click', '.arrow', function (e) {
        if(slidercount == 2){
            slidercount = -1;
        }
        slidercount++;
        updateSlider();
    });

    t1.to(flap, {
            duration: 0.5,
            cssRule: {
                rotateX: 180
            }
        })
        .set(flap, {
            cssRule: {
                zIndex: 10
            }
        })
        .to('.letter', {
            translateY: -200,
            duration: 0.9,
            ease: "back.inOut(1.5)"
        })
        .set('.letter', {
            zIndex: 40
        })
        .to('.letter', {
            duration: .7,
            ease: "back.out(.4)",
            translateY: 0,
            width: "100vw",
            height: "100vh",
            left: 0,
            top: 0,
            "margin-left": "calc(-50vw + 50%)",
            "margin-top": "-20vh",
            "font-size": "5vh",
            overflow: 'hidden'
        })
        .to('.slider', {
            display: 'flex',
            "font-size": "medium",
        });

    let t2 = gsap.timeline({
        paused: true
    });

    t2.to('.letter_shadow', {
        delay: 1.4,
        width: 450,
        boxShadow: "-75px 150px 10px 5px #eeeef3",
        ease: "back.out(.2)",
        duration: .7
    });

    $('.envelope').click(function (e) {
        t1.play();
        t2.play();
        setTimeout(function () {
            updateSlider();
        }, 2000);
    });

    function updateSlider(){
        $($('.slider').children()).hide();
        $($('.slider').children()[slidercount]).show();
    }
})