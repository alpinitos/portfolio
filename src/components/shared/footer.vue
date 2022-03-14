<template>
    <div class="footer__container">
        <div class="footer__container--links">
            <h4>Find me:</h4>
            <a href="https://www.linkedin.com/in/edwin-gutierrez57/" target="blank_">LinkedIn</a>
            <a href="https://www.instagram.com/edwinbikes" target="blank_">Instagram</a>
            <a href="https://www.youtube.com/channel/UC0YYLINtrwuwzMMN-SetBLA" target="blank_">Youtube</a>
            <a href="https://api.whatsapp.com/send?phone=+573057135213" target="blank_">Whatsapp</a>
            <a href="mailto:edwinbykes@hotmail.com" target="blank_">Email</a>
        </div>
        <!-- <div class="credit"><a href="http://www.regniek.dev">Powered and Desing by Regniek</a> </div> -->
    </div>
</template>

<style scoped>
.footer__container{
    background: linear-gradient(#52adc1,#000);
    height: 200px;
    display:grid;
    grid-template-rows: repeat(2,1fr);
    color: white;
}
.footer__container--links{
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.footer__container--links a{
    text-decoration: none;
    color: white;
}
.credit{
    grid-row: 2;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    font-size: 12px;
}
.credit a{
    text-align: center;
    text-decoration: none;
    color: white;
}



@media (max-width: 850px) {
    .credit{
        grid-column: 1/2;
    }
    .footer__container{
        grid-template-columns: 1fr;
        height: 400px;
    }

}
</style>