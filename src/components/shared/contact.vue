<template>
    <div class="container__contact">
        <div class="container_network">
            <p class="text">Hello, If I can help You, You can find me in:</p>
            <p class="close" @click="goToBefore()">X</p>
            <div class="container_network--links">
                <a href="https://www.instagram.com/edwinbikes" target="blank_"><img :src="require('../../assets/iconos/instagram.png')" alt=""></a>
                <a href="mailto:edwinbykes@hotmail.com" target="blank_" alt=""><img :src="require('../../assets/iconos/mail.png')" alt=""></a>
                <a href="https://www.youtube.com/channel/UC0YYLINtrwuwzMMN-SetBLA" target="blank_"><img :src="require('../../assets/iconos/youtube.png')" alt=""></a>
                <a href="https://api.whatsapp.com/send?phone=+573057135213" target="blank_"><img :src="require('../../assets/iconos/whatsapp.png')" alt=""></a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        goToBefore(){
            this.$router.go(-1)
        }
    }
}
</script>
<style scoped>
.container__contact{
    height: 100vh;
    width: 100vw;
    background:linear-gradient(#17005C,#000);
    position: fixed;
    z-index: 12;
    display: flex;
    justify-content: center;
    align-items: center;
}
.container_network{
    height: 50vh;
    width: 50vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    background:rgba(40, 40, 42,0.9) ;
}
.text{
    width: 30vw;
    margin-left: 5vw;
    text-align: center;
    color: white;
    padding-right: 60px;
}
.close{
    
    padding: 15px;
    text-align: center;
    color: white;
    font: optional;
    background: rgba(40, 40, 42,0.9);
    border-radius: 40%;
    box-shadow: 0 0 20px white;

}
.container_network--links{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    width: 100%;
    height: 40vh; 
}
.container_network--links a{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.container_network--links a img{
    height: 80px;
}
@media (max-width: 850px) {
    .container_network{
        height: 80vh;
        width: 80vw;
    }
    .container_network--links{
        display: flex;
        justify-content: center;
        text-align: center;
        flex-wrap: wrap;
    }
}
</style>