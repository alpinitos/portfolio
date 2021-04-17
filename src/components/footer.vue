<template>
    <div class="footer__container">
        
        <div class="footer__container--message">
            <h3>CONTÁCTENOS</h3>
            <p>¿Quieres hacernos alguna pregunta? Ponte en
                contacto con nosotros y te responderemos en el
                menor tiempo posible. A tu disposición ponemos
                a todo un equipo de profesionales dispuestos a
                aportar soluciones a tus problemas
            </p>
        </div>
        <div class="footer__container--network">
            <div class="footer__container--network__icons">
                <!-- <img class="img_icons" :src="require('../assets/images/mail.png')" alt=""> -->
                <a href="mailto:grupodesca@gmail.com">GrupoDesca@gmail.com</a></div>
            <div class="footer__container--network__icons">
                <!-- <img class="img_icons" :src="require('../assets/images/phone2.png')" alt=""> -->
                <a href="tel:+573114442194">+57 311 444 21 94</a></div>
            <div class="footer__container--network__icons">
                <!-- <img class="img_icons" :src="require('../assets/images/globo.png')" alt=""> -->
                <a href="http://grupodesca.com">www.grupodesca.com</a></div>
        </div>
        <div class="credit"><a href="http://www.regniek.dev" target="blank_">Powered by Regniek</a> </div>
    </div>
</template>

<style scoped>
.footer__container{
    background  : linear-gradient(0deg,rgba(0,0,0,1) 0%, rgba(173,23,16,0.9) 100%);
    height: 200px;
    display:grid;
    grid-template-columns: repeat(2,1fr);
    color: white;
}
.footer__container--network{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}
.footer__container--message{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding-left: 60px;
   
}
.img_icons{
    height: 40px;
}
.footer__container--network__icons{
    width: 80%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    
}
.footer__container--network__icons p,a{
    width: 60%;
    text-align: left;
    color: white;
    text-decoration: none;
    
}
.credit{
    grid-column: 1/3;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    font-size: 12px;
}
.credit a{
    text-align: center;
}



@media (max-width: 850px) {
    .credit{
        grid-column: 1/2;
    }
    .footer__container{
        grid-template-columns: 1fr;
        height: 400px;
    }
    .footer__container--message{
        padding: 0px 10px;
        margin: 0 auto;
        text-align: justify;
    }
    .footer__container--message p{
        margin: 0 20px;
    }
    .footer__container--network{
        width: 100%;
    }
    .footer__container--network__icon{
        width: 100%;
    }
    .footer__container--network__icons p,a{
        width: 100%;
    }
}
</style>