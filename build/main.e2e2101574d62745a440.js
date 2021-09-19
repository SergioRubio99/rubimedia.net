(()=>{"use strict";var n={924:(n,t,e)=>{e.d(t,{Z:()=>b});var o=e(81),i=e.n(o),r=e(645),a=e.n(r),c=e(667),l=e.n(c),p=new URL(e(483),e.b),s=new URL(e(823),e.b),d=new URL(e(601),e.b),g=new URL(e(123),e.b),h=a()(i()),f=l()(p),u=l()(s),x=l()(d),m=l()(g);h.push([n.id,"@font-face {\n    font-family: Akrobat;\n    src: url("+f+")\n}\n\n@font-face {\n    font-family: Futurist;\n    src: url("+u+")\n}\n\n* {\n    margin: 0px;\n    box-sizing: border-box;\n}\n\na,\nbutton {\n    cursor: pointer;\n}\n\n\n.header {\n    width: 100%;\n    height: 60px;\n    opacity: 0.9;\n    background-color: transparent;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    font-family: 'Akrobat';\n}\n\n.header_left {\n    width: 200px;\n    margin-left: 15%;\n}\n\n.header_left-name {\n    position: absolute;\n    letter-spacing: 2px;\n    margin-left: 5px;\n    top: 70px;\n    color: white;\n}\n\n.header_left-hidden {\n    left: 55px;\n    top: -35px;\n    width: 130px;\n    height: 14px;\n    position: relative;\n    background-color: rgba(255, 255, 255);\n}\n\n.header_left-logoImg {\n    margin-top: 80px;\n    /* transform: rotate(45deg); */\n    /* To get it white: */\n    filter: brightness(0) invert(1);\n    \n\n}\n\n.header_left-logoChar {\n    font-family: 'Akrobat';\n    font-weight: 800;\n    position: absolute;\n    /* transform: rotate(-45deg); */\n    font-size: 38px;\n    margin-top: 82px;\n    color: white;\n\n}\n\n.header_right {\n    display: flex;\n    width: 400px;\n    /* border: 1px solid black; */\n    margin-right: 15%;\n    font-size: 25px;\n    margin-top: 100px;\n}\n\n.header_right a {\n    width: 100px;\n    height: 50px;\n    display: flex;\n    align-items: center;\n    transition: all 200ms;\n    justify-content: center;\n    color: white;\n}\n\n.header_right a:hover {\n    font-size: 28px;\n}\n\n.header_right-github {\n    text-decoration: none;\n    color: black;\n}\n\n.header_right-contact {\n    text-decoration: none;\n    color: black;\n}\n\n.header_right-linkedIn {\n    text-decoration: none;\n    color: black;\n}\n\n\n/* PRESENTATION AND MAIN SLIDE: */\n\n.main {\n    width: 100%;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.presentation {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    height: 100%;\n    color: white;\n}\n\n.presentation-title {\n    font-family: 'Akrobat';\n    font-size: 40px;\n    text-align: center;\n    text-transform: uppercase;\n    margin-top: 29.5vh;\n    font-family: 'Akrobat';\n}\n\n.presentation-number {\n    font-family: 'Akrobat';\n    font-size: 40px;\n    text-align: center;\n    text-transform: uppercase;\n    left: 0;\n    right: 0;\n    margin-top: 42vh;\n    font-family: 'Akrobat';\n    position: absolute;\n}\n\n.presentation-btn {\n    position: absolute;\n    width: 130px;\n    height: 45px;\n    background: rgba(255, 255, 255, 0.5);\n    font-size: 16px;\n    border: none;\n    margin-left: auto;\n    margin-right: auto;\n    left: 0;\n    right: 0;\n    margin-top: 42vh;\n    font-family: 'Akrobat';\n}\n\n\n/* \n.spacer {\n    aspect-ratio: 960/540;\n    width: 100%;\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: cover;\n    z-index: 1;\n    position: absolute;\n}\n\n.layer1 {\n    background-image: url(\"./wave-haikei.svg\");\n} */\n\n.spacer2 {\n    aspect-ratio: 960/540;\n    width: 100%;\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: cover;\n    z-index: -2;\n    position: fixed;\n}\n\n.layer2 {\n    background-image: url("+x+");\n    background-size: cover;\n    transform: scale(1.2);\n}\n\n.black_layer {\n    aspect-ratio: 960/540;\n    width: 100%;\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: cover;\n    z-index: -1;\n    position: fixed;\n    background-color: rgba(0, 0, 0, 0.8);\n}\n\n\n/* RESPONSIVE DESIGN (MOBILE)*/\n\n@media(max-width: 414px) {\n    body {\n        height: 100vh;\n        overflow-y: hidden;\n    }\n    .header {\n        color: white;\n        width: 100%;\n        height: 60px;\n        opacity: 0.52;\n        background-color: transparent;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        font-family: 'Akrobat';\n        opacity: 1;\n    }\n    .header_left {\n        width: auto;\n        margin-left: 5%;\n        margin-top: -15px;\n    }\n    .header_left-name {\n        position: absolute;\n        letter-spacing: 2px;\n        margin-left: 5px;\n        top: 27px;\n        display: none;\n    }\n    .header_left-hidden {\n        display: none;\n        left: 55px;\n        top: -35px;\n        width: 130px;\n        height: 14px;\n        position: relative;\n        background-color: rgba(255, 255, 255);\n    }\n    .header_left-logoImg {\n        margin-top: 115px;\n        filter: invert();\n        width: 90px;\n        /* transform: rotate(45deg); */\n        /* To get it white: */\n        /* filter: brightness(0) invert(1); */\n    }\n    .header_left-logoChar {\n        font-family: 'Akrobat';\n        font-weight: 800;\n        position: absolute;\n        /* transform: rotate(-45deg); */\n        font-size: 45px;\n        margin-top: 135px;\n        margin-left: 16px;\n        color: white;\n        /* transform: rotate(-45deg); */\n    }\n    .header_right {\n        display: flex;\n        flex-direction: column;\n        justify-content: space-evenly;\n        width: 100%;\n        height: 340%;\n        margin-top: 180px;\n        margin-right: 40px;\n        /* border: 1px solid black; */\n        font-size: 20px;\n    }\n    .header_right a {\n        /* margin-right: auto; */\n        color: white;\n        margin-left: auto;\n        width: 90px;\n        height: 50px;\n        display: flex;\n        align-items: center;\n        transition: all 200ms;\n        justify-content: center;\n    }\n    .header_right a:hover {\n        color: white;\n        font-size: 35px;\n    }\n    .header_right-github {\n        text-decoration: none;\n        color: black;\n        font-size: 35px;\n    }\n    .header_right-contact {\n        text-decoration: none;\n        color: black;\n        font-size: 35px;\n    }\n    .header_right-linkedIn {\n        text-decoration: none;\n        color: black;\n        font-size: 35px;\n    }\n    /* PRESENTATION AND MAIN SLIDE: */\n    .main {\n        width: 100%;\n        height: 70vh;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        /* background-image: url(\"./mountain-peak-night-dusk.jpg\"); */\n        margin-top: 500px;\n    }\n    .presentation {\n        display: flex;\n        flex-direction: column;\n        width: 100%;\n        height: 70%;\n        color: white;\n    }\n    .presentation-title {\n        font-family: 'Akrobat';\n        font-size: 30px;\n        text-align: center;\n        text-transform: uppercase;\n        margin-left: auto;\n        margin-right: auto;\n        left: 0;\n        right: 0;\n        margin-top: -320px;\n        font-family: 'Akrobat';\n        position: absolute;\n    }\n    .presentation-number {\n        font-family: 'Akrobat';\n        font-size: 30px;\n        text-align: center;\n        text-transform: uppercase;\n        left: 0;\n        right: 0;\n        margin-top: -30vh;\n        font-family: 'Akrobat';\n        position: absolute;\n    }\n    /* \n        @media only screen and (max-width: 1366px) {\n            .presentation-title {\n                margin-top: 29.5vh;\n            }\n        } */\n    .presentation-btn {\n        position: absolute;\n        width: 130px;\n        height: 45px;\n        background: rgba(255, 255, 255, 0.5);\n        font-size: 16px;\n        border: none;\n        margin-left: auto;\n        margin-right: auto;\n        left: 0;\n        right: 0;\n        margin-top: -140px;\n        font-family: 'Akrobat';\n    }\n    .spacer2 {\n        aspect-ratio: 960/540;\n        width: 100%;\n        background-repeat: no-repeat;\n        background-position: center;\n        background-size: cover;\n        z-index: -2;\n        position: fixed;\n        display: none;\n    }\n    .layer2 {\n        background-image: url("+m+");\n        background-size: cover;\n        transform: scale(1.2);\n    }\n    .black_layer {\n        aspect-ratio: 960/540;\n        width: 100%;\n        height: 100%;\n        background-image: url("+m+");\n        background-position: center;\n        background-size: auto;\n        z-index: -999;\n        position: fixed;\n        background-color: rgba(0, 0, 0, 0.8);\n        /* overflow-x: hidden; */\n    }\n}",""]);const b=h},134:(n,t,e)=>{e.d(t,{Z:()=>z});var o=e(81),i=e.n(o),r=e(645),a=e.n(r),c=e(667),l=e.n(c),p=new URL(e(483),e.b),s=new URL(e(823),e.b),d=new URL(e(601),e.b),g=new URL(e(546),e.b),h=new URL(e(407),e.b),f=new URL(e(7),e.b),u=new URL(e(123),e.b),x=a()(i()),m=l()(p),b=l()(s),y=l()(d),w=l()(g),k=l()(h),v=l()(f),A=l()(u);x.push([n.id,"@font-face {\n    font-family: Akrobat;\n    src: url("+m+")\n}\n\n@font-face {\n    font-family: Futurist;\n    src: url("+b+")\n}\n\n* {\n    margin: 0px;\n    box-sizing: border-box;\n}\nhtml{\n    scroll-behavior: smooth;\n}\na,\nbutton {\n    cursor: pointer;\n}\n\n.header {\n    width: 100%;\n    height: 60px;\n    opacity: 0.9;\n    background-color: transparent;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    font-family: 'Akrobat';\n}\n\n.header_left {\n    width: 200px;\n    margin-left: 15%;\n}\n\n.header_left-name {\n    position: absolute;\n    letter-spacing: 2px;\n    margin-left: 5px;\n    top: 70px;\n    color: white;\n}\n\n.header_left-hidden {\n    left: 55px;\n    top: -35px;\n    width: 130px;\n    height: 14px;\n    position: relative;\n    background-color: rgba(255, 255, 255);\n}\n\n.header_left-logoImg {\n    margin-top: 80px;\n    /* transform: rotate(45deg); */\n    /* To get it white: */\n    filter: brightness(0) invert(1);\n    \n\n}\n\n.header_left-logoChar {\n    font-family: 'Akrobat';\n    font-weight: 800;\n    position: absolute;\n    /* transform: rotate(-45deg); */\n    font-size: 38px;\n    margin-top: 82px;\n    color: white;\n\n}\n\n.header_right {\n    display: flex;\n    width: 400px;\n    /* border: 1px solid black; */\n    margin-right: 15%;\n    font-size: 25px;\n    margin-top: 100px;\n}\n\n.header_right a {\n    width: 100px;\n    height: 50px;\n    display: flex;\n    align-items: center;\n    transition: all 200ms;\n    justify-content: center;\n    color: white;\n}\n\n.header_right a:hover {\n    font-size: 28px;\n}\n\n.header_right-github {\n    text-decoration: none;\n    color: black;\n}\n\n.header_right-contact {\n    text-decoration: none;\n    color: black;\n}\n\n.header_right-linkedIn {\n    text-decoration: none;\n    color: black;\n}\n\n\n/* PRESENTATION AND MAIN SLIDE: */\n\n.main {\n    width: 100%;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.presentation {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    height: 100%;\n    color: white;\n}\n\n.presentation-title {\n    font-family: 'Akrobat';\n    font-size: 40px;\n    text-align: center;\n    text-transform: uppercase;\n    margin-left: auto;\n    margin-right: auto;\n    left: 0;\n    right: 0;\n    margin-top: 33vh;\n    font-family: 'Akrobat';\n    position: absolute;\n}\n\n@media only screen and (max-width: 1366px) {\n    .presentation-title {\n        margin-top: 29.5vh;\n    }\n}\n\n.presentation-btn {\n    position: absolute;\n    width: 130px;\n    height: 45px;\n    background: rgba(255, 255, 255, 0.5);\n    font-size: 16px;\n    border: none;\n    margin-left: auto;\n    margin-right: auto;\n    left: 0;\n    right: 0;\n    margin-top: 45vh;\n    font-family: 'Akrobat';\n    text-decoration: none;\n    color: black;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n\n/* \n.spacer {\n    aspect-ratio: 960/540;\n    width: 100%;\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: cover;\n    z-index: 1;\n    position: absolute;\n}\n\n.layer1 {\n    background-image: url(\"./wave-haikei.svg\");\n} */\n\n.spacer2 {\n    aspect-ratio: 960/540;\n    width: 100%;\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: cover;\n    z-index: -2;\n    position: fixed;\n}\n\n.layer2 {\n    background-image: url("+y+");\n    background-size: cover;\n    transform: scale(1.2);\n}\n\n.black_layer {\n    aspect-ratio: 960/540;\n    width: 100%;\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: cover;\n    z-index: -1;\n    position: fixed;\n    background-color: rgba(0, 0, 0, 0.8);\n}\n\n.portfolio {\n    width: 100%;\n    height: 45vh;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    background-color: rgba(165, 165, 165, 0.03);\n}\n\n.crowdfunding {\n    background-image: url("+w+");\n    height: 45vh;\n    width: 25%;\n    transition: all 400ms;\n    text-decoration: none;\n    color: white;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    padding-left: 10px;\n    padding-right: 10px;\n    opacity: 0;\n}\n\n.crowdfunding:hover {\n    background-color: rgba(129, 129, 129, 0.3);\n    height: 45vh;\n    cursor: pointer;\n    opacity: 0.6;\n}\n\n.crowdfunding-title {\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.crowdfunding-text {\n    align-self: flex-start;\n    text-align: center;\n    font-family: 'Akrobat';\n    font-weight: 100;\n    font-size: 28px;\n    margin-top: 30px;\n    opacity: 0;\n}\n\n.crowdfunding-bg {\n    position: absolute;\n    width: 100%;\n    background-color: rgba(165, 165, 165, 0.03);\n}\n\n.pokeApi {\n    background-image: url("+k+");\n    background-size: cover;\n    /* background-position-x: 1200px;\n    background-position-y: 800px; */\n    height: 45vh;\n    width: 25%;\n    transition: all 400ms;\n    text-decoration: none;\n    color: white;\n    display: flex;\n    padding-left: 10px;\n    padding-right: 10px;\n    opacity: 0;\n    padding-top: 20px;\n}\n\n.pokeApi:hover {\n    background-color: rgba(129, 129, 129, 0.3);\n    height: 45vh;\n    cursor: pointer;\n    opacity: 0.6;\n}\n\n.pokeApi-title {\n    margin-left: auto;\n    margin-right: auto;\n    font-family: 'Akrobat';\n    font-weight: 100;\n}\n\n\n/* .pokeApi-text {\n    align-self: flex-start;\n    text-align: center;\n    font-family: 'Akrobat';\n    font-weight: 100;\n    font-size: 25px;\n    margin-top: 30px;\n    opacity: 0;\n} */\n\n.pokeApi-bg {\n    position: absolute;\n    width: 100%;\n    background-color: rgba(165, 165, 165, 0.03);\n}\n\n.propertyManager {\n    height: 45vh;\n    width: 25%;\n    transition: all 400ms;\n    text-decoration: none;\n    color: white;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    padding-left: 10px;\n    padding-right: 10px;\n}\n\n.propertyManager:hover {\n    background-color: rgba(129, 129, 129, 0.3);\n    height: 45vh;\n    cursor: pointer;\n    opacity: 0.6;\n}\n\n.propertyManager-title {\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.propertyManager-text {\n    align-self: flex-start;\n    text-align: center;\n    font-family: 'Akrobat';\n    font-weight: 100;\n    font-size: 25px;\n    margin-top: 30px;\n    opacity: 0;\n    width: 100%;\n}\n\n.propertyManager-bg {\n    position: absolute;\n    width: 100%;\n    background-color: rgba(165, 165, 165, 0.03);\n}\n\n.socialdashboard {\n    background-image: url("+v+");\n    height: 45vh;\n    width: 25%;\n    transition: all 400ms;\n    text-decoration: none;\n    color: white;\n    display: flex;\n    flex-direction: column;\n    /* justify-content: center; */\n    padding-left: 10px;\n    padding-right: 10px;\n    opacity: 0;\n}\n\n.socialdashboard:hover {\n    height: 45vh;\n    cursor: pointer;\n    opacity: 0.6;\n}\n\n.socialdashboard-title {\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 0px;\n}\n\n.socialdashboard-text {\n    align-self: flex-start;\n    text-align: center;\n    font-family: 'Akrobat';\n    font-weight: 100;\n    font-size: 28px;\n    margin-top: 30px;\n    opacity: 0;\n}\n\n.socialdashboard-bg {\n    position: absolute;\n    width: 100%;\n    background-color: rgba(165, 165, 165, 0.03);\n}\n\n\n/* RESPONSIVE DESIGN (MOBILE)*/\n\n@media(max-width: 520px) {\n    .header {\n        color: white;\n        width: 100%;\n        height: 60px;\n        opacity: 0.52;\n        background-color: transparent;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        font-family: 'Akrobat';\n        opacity: 1;\n    }\n    .header_left {\n        width: auto;\n        margin-left: 5%;\n        margin-top: -15px;\n    }\n    .header_left-name {\n        position: absolute;\n        letter-spacing: 2px;\n        margin-left: 5px;\n        top: 27px;\n        display: none;\n    }\n    .header_left-hidden {\n        display: none;\n        left: 55px;\n        top: -35px;\n        width: 130px;\n        height: 14px;\n        position: relative;\n        background-color: rgba(255, 255, 255);\n    }\n    .header_left-logoImg {\n        margin-top: 115px;\n        filter: invert();\n        width: 90px;\n        /* transform: rotate(45deg); */\n        /* To get it white: */\n        /* filter: brightness(0) invert(1); */\n    }\n    .header_left-logoChar {\n        font-family: 'Akrobat';\n        font-weight: 800;\n        position: absolute;\n        /* transform: rotate(-45deg); */\n        font-size: 45px;\n        margin-top: 135px;\n        margin-left: 16px;\n        color: white;\n        /* transform: rotate(-45deg); */\n    }\n    .header_right {\n        display: flex;\n        flex-direction: column;\n        justify-content: space-evenly;\n        width: 100%;\n        height: 340%;\n        margin-top: 180px;\n        margin-right: 40px;\n        /* border: 1px solid black; */\n        font-size: 20px;\n    }\n    .header_right a {\n        /* margin-right: auto; */\n        color: white;\n        margin-left: auto;\n        width: 90px;\n        height: 50px;\n        display: flex;\n        align-items: center;\n        transition: all 200ms;\n        justify-content: center;\n    }\n    .header_right a:hover {\n        color: white;\n        font-size: 35px;\n    }\n    .header_right-github {\n        text-decoration: none;\n        color: black;\n        font-size: 35px;\n    }\n    .header_right-contact {\n        text-decoration: none;\n        color: black;\n        font-size: 35px;\n    }\n    .header_right-linkedIn {\n        text-decoration: none;\n        color: black;\n        font-size: 35px;\n    }\n    /* PRESENTATION AND MAIN SLIDE: */\n    .main {\n        width: 100%;\n        height: 70vh;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        /* background-image: url(\"./mountain-peak-night-dusk.jpg\"); */\n        margin-top: 500px;\n    }\n    .presentation {\n        display: flex;\n        flex-direction: column;\n        width: 100%;\n        height: 70%;\n        color: white;\n    }\n    .presentation-title {\n        font-family: 'Akrobat';\n        font-size: 40px;\n        text-align: center;\n        text-transform: uppercase;\n        margin-left: auto;\n        margin-right: auto;\n        left: 0;\n        right: 0;\n        margin-top: -320px;\n        font-family: 'Akrobat';\n        position: absolute;\n    }\n    /* \n    @media only screen and (max-width: 1366px) {\n        .presentation-title {\n            margin-top: 29.5vh;\n        }\n    } */\n    .presentation-btn {\n        position: absolute;\n        width: 130px;\n        height: 45px;\n        background: rgba(255, 255, 255, 0.5);\n        font-size: 16px;\n        border: none;\n        margin-left: auto;\n        margin-right: auto;\n        left: 0;\n        right: 0;\n        margin-top: -60px;\n        font-family: 'Akrobat';\n    }\n    .spacer2 {\n        aspect-ratio: 960/540;\n        width: 100%;\n        background-repeat: no-repeat;\n        background-position: center;\n        background-size: cover;\n        z-index: -2;\n        position: fixed;\n        display: none;\n    }\n    .layer2 {\n        background-image: url("+A+");\n        background-size: cover;\n        transform: scale(1.2);\n    }\n    .black_layer {\n        aspect-ratio: auto;\n        width: 100%;\n        height: 100vh;\n        background-image: url("+A+");\n        background-position: bottom;\n        background-size: auto;\n        z-index: -999;\n        position: fixed;\n        background-color: rgba(0, 0, 0, 0.8);\n        /* overflow-x: hidden; */\n    }\n    .portfolio {\n        width: 100%;\n        height: 45vh;\n        margin-top: 0px;\n        display: flex;\n        flex-direction: row;\n        flex-wrap: wrap;\n        justify-content: center;\n        align-items: center;\n        background-color: rgba(165, 165, 165, 0.03);\n    }\n    .crowdfunding {\n        background-image: url("+w+");\n        height: 45vh;\n        width: 25%;\n        transition: all 400ms;\n        text-decoration: none;\n        color: white;\n        /* display: flex;filter: grayscale(100%); */\n        flex-direction: column;\n        justify-content: space-between;\n        padding-left: 10px;\n        padding-right: 10px;\n        flex-basis: 100%;\n        opacity: 0.8;\n    }\n    .crowdfunding:hover {\n        background-color: rgba(129, 129, 129, 0.3);\n        height: 45vh;\n        cursor: pointer;\n        opacity: 0.6;\n    }\n    .crowdfunding-title {\n        margin-left: auto;\n        margin-right: auto;\n    }\n    .crowdfunding-text {\n        align-self: flex-start;\n        text-align: center;\n        font-family: 'Akrobat';\n        font-weight: 100;\n        font-size: 28px;\n        margin-top: 30px;\n        opacity: 0.8;\n    }\n    .crowdfunding-bg {\n        position: absolute;\n        width: 100%;\n        background-color: rgba(165, 165, 165, 0.03);\n    }\n    .pokeApi {\n        background-image: url("+k+");\n        background-size: cover;\n        height: 45vh;\n        width: 25%;\n        transition: all 400ms;\n        text-decoration: none;\n        color: white;\n        display: flex;\n        padding-left: 10px;\n        padding-right: 10px;\n        opacity: 0;\n        padding-top: 20px;\n        opacity: 0.8;\n        flex-basis: 100%;\n    }\n    .pokeApi:hover {\n        background-color: rgba(129, 129, 129, 0.3);\n        height: 45vh;\n        cursor: pointer;\n        opacity: 0.6;\n    }\n    .pokeApi-title {\n        margin-left: auto;\n        margin-right: auto;\n        font-family: 'Akrobat';\n        font-weight: 100;\n    }\n    .pokeApi-bg {\n        position: absolute;\n        width: 100%;\n        background-color: rgba(165, 165, 165, 0.03);\n    }\n    .propertyManager {\n        height: 45vh;\n        width: 25%;\n        transition: all 400ms;\n        text-decoration: none;\n        color: white;\n        /*This is left this way until we got the property manager business website done*/\n        display: none;\n        flex-direction: column;\n        justify-content: center;\n        padding-left: 10px;\n        padding-right: 10px;\n        opacity: 0.8;\n        flex-basis: 100%;\n    }\n    .propertyManager:hover {\n        background-color: rgba(129, 129, 129, 0.3);\n        height: 45vh;\n        cursor: pointer;\n        opacity: 0.8;\n    }\n    .propertyManager-title {\n        margin-left: auto;\n        margin-right: auto;\n    }\n    .propertyManager-text {\n        align-self: flex-start;\n        text-align: center;\n        font-family: 'Akrobat';\n        font-weight: 100;\n        font-size: 25px;\n        margin-top: 30px;\n        opacity: 0.8;\n        width: 100%;\n    }\n    .propertyManager-bg {\n        position: absolute;\n        width: 100%;\n        background-color: rgba(165, 165, 165, 0.03);\n    }\n    .socialdashboard {\n        background-image: url("+v+");\n        height: 45vh;\n        width: 25%;\n        transition: all 400ms;\n        text-decoration: none;\n        color: white;\n        display: flex;\n        flex-direction: column;\n        /* justify-content: center; */\n        padding-left: 10px;\n        padding-right: 10px;\n        opacity: 0.8;\n        flex-basis: 100%;\n    }\n    .socialdashboard:hover {\n        height: 45vh;\n        cursor: pointer;\n        opacity: 0.8;\n    }\n    .socialdashboard-title {\n        margin-left: auto;\n        margin-right: auto;\n        margin-top: 0px;\n    }\n    .socialdashboard-text {\n        align-self: flex-start;\n        text-align: center;\n        font-family: 'Akrobat';\n        font-weight: 100;\n        font-size: 28px;\n        margin-top: 30px;\n        opacity: 0.8;\n    }\n    .socialdashboard-bg {\n        position: absolute;\n        width: 100%;\n        background-color: rgba(165, 165, 165, 0.03);\n    }\n}",""]);const z=x},645:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",o=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),o&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),o&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,o,i,r){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(a[l]=!0)}for(var p=0;p<n.length;p++){var s=[].concat(n[p]);o&&a[s[0]]||(void 0!==r&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=r),e&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=e):s[2]=e),i&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=i):s[4]="".concat(i)),t.push(s))}},t}},667:n=>{n.exports=function(n,t){return t||(t={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),t.hash&&(n+=t.hash),/["'() \t\n]|(%20)/.test(n)||t.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var t=[];function e(n){for(var e=-1,o=0;o<t.length;o++)if(t[o].identifier===n){e=o;break}return e}function o(n,o){for(var r={},a=[],c=0;c<n.length;c++){var l=n[c],p=o.base?l[0]+o.base:l[0],s=r[p]||0,d="".concat(p," ").concat(s);r[p]=s+1;var g=e(d),h={css:l[1],media:l[2],sourceMap:l[3]};-1!==g?(t[g].references++,t[g].updater(h)):t.push({identifier:d,updater:i(h,o),references:1}),a.push(d)}return a}function i(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;e.update(n=t)}else e.remove()}}n.exports=function(n,i){var r=o(n=n||[],i=i||{});return function(n){n=n||[];for(var a=0;a<r.length;a++){var c=e(r[a]);t[c].references--}for(var l=o(n,i),p=0;p<r.length;p++){var s=e(r[p]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}r=l}}},569:n=>{var t={};n.exports=function(n,e){var o=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}},216:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t),t}},565:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},795:n=>{n.exports=function(n){var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var o=e.css,i=e.media,r=e.sourceMap;i?n.setAttribute("media",i):n.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(o,n)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},589:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}},407:(n,t,e)=>{n.exports=e.p+"237d668cd4090a7f7c1f.png"},483:(n,t,e)=>{n.exports=e.p+"4e476945c2832176240e.ttf"},823:(n,t,e)=>{n.exports=e.p+"24dfecabee2c89173f2e.ttf"},546:(n,t,e)=>{n.exports=e.p+"d4f477d4cd11ac3a012f.jpg"},123:(n,t,e)=>{n.exports=e.p+"f7c8d5e53d3886d85d0e.jpg"},601:(n,t,e)=>{n.exports=e.p+"111c153c4fd2bbdfb7b8.jpg"},7:(n,t,e)=>{n.exports=e.p+"791d9b8d0a5aa3597aba.png"}},t={};function e(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={id:o,exports:{}};return n[o](r,r.exports,e),r.exports}e.m=n,e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var o in t)e.o(t,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:t[o]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var t=e.g.document;if(!n&&t&&(t.currentScript&&(n=t.currentScript.src),!n)){var o=t.getElementsByTagName("script");o.length&&(n=o[o.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),e.b=document.baseURI||self.location.href,(()=>{var n=e(379),t=e.n(n),o=e(795),i=e.n(o),r=e(569),a=e.n(r),c=e(565),l=e.n(c),p=e(216),s=e.n(p),d=e(589),g=e.n(d),h=e(134),f={};f.styleTagTransform=g(),f.setAttributes=l(),f.insert=a().bind(null,"head"),f.domAPI=i(),f.insertStyleElement=s(),t()(h.Z,f),h.Z&&h.Z.locals&&h.Z.locals;var u=e(924),x={};x.styleTagTransform=g(),x.setAttributes=l(),x.insert=a().bind(null,"head"),x.domAPI=i(),x.insertStyleElement=s(),t()(u.Z,x),u.Z&&u.Z.locals&&u.Z.locals;const m=document;gsap.timeline({}),window.innerWidth>600?(gsap.fromTo(".header_left-logoChar",{opacity:0,x:-30,scaleX:1.2,scaleY:1.2},{delay:1.5,scaleX:1,scaleY:1,opacity:.8,x:15}),gsap.fromTo(".header_left-logoChar",{scaleX:1,scaleX:1},{scaleX:.8,scaleY:.8,delay:2.5}),gsap.fromTo(".header",{y:-90},{ease:"circ.out",duration:1,delay:1,y:0}),gsap.fromTo(".header_left-logoImg",{scaleX:1.3,scaleY:1.3,y:-100},{delay:1,scaleX:1.3,scaleY:1.3,y:0}),gsap.fromTo(".layer2",{y:0},{ease:Power0,duration:1.5,y:-10})):(gsap.fromTo(".header_left-logoImg",{y:-100},{y:0}),gsap.fromTo(".header_left-logoChar",{opacity:0,x:10,scaleX:1.2,scaleY:1.2},{opacity:1,x:10,delay:1.5,scaleX:1,scaleY:1}),gsap.fromTo(".layer2",{y:0},{ease:Power0,duration:1.5,y:-10}),gsap.fromTo(".header_right-linkedIn",{opacity:0},{delay:2.5,opacity:1,duration:2}),gsap.fromTo(".header_right-github",{opacity:0},{delay:2.5,opacity:1,duration:2}),gsap.fromTo(".header_right-contact ",{opacity:0},{delay:2.5,opacity:1,duration:2}),gsap.fromTo(".presentation-btn",{y:0,opacity:0},{duration:1,delay:2.6,duration:1,opacity:2}),gsap.fromTo(".presentation-title",{opacity:0},{delay:2.6,duration:2,opacity:1}));const b=m.querySelector(".crowdfunding");b.addEventListener("mouseenter",(function(n){gsap.fromTo(".crowdfunding-text",{opacity:0},{opacity:1}),b.addEventListener("mouseleave",(function(n){gsap.fromTo(".crowdfunding-text",{opacity:1},{opacity:0})}),!1)}),!1);const y=m.querySelector(".pokeApi");y.addEventListener("mouseenter",(function(n){gsap.fromTo(".pokeApi-text",{opacity:0},{opacity:1}),y.addEventListener("mouseleave",(function(n){gsap.fromTo(".pokeApi-text",{opacity:1},{opacity:0})}),!1)}),!1);const w=m.querySelector(".propertyManager");w.addEventListener("mouseenter",(function(n){gsap.fromTo(".propertyManager-text",{opacity:0},{opacity:1}),w.addEventListener("mouseleave",(function(n){gsap.fromTo(".propertyManager-text",{opacity:1},{opacity:0})}),!1)}),!1);const k=m.querySelector(".socialdashboard");k.addEventListener("mouseenter",(function(n){gsap.fromTo(".socialdashboard-text",{opacity:0},{opacity:1}),k.addEventListener("mouseleave",(function(n){gsap.fromTo(".socialdashboard-text",{opacity:1},{opacity:0})}),!1)}),!1)})()})();