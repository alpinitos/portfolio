<template>
    <div class="container__portfolio">
        <div class="container__portfolio--title">
            <h2>My Projects</h2>
        </div>
        <div class="container__portfolio--items">
            <div class="container__portfolio--items__card" v-for="item in works" :key="item">
                <div class="container__portfolio--items__card--img">
                    <img :src="item.img" alt="">
                </div>
                <div class="container__portfolio--items__card--info">
                    <h3>{{item.name}}</h3>
                    <p>{{item.description}}</p>
                    <div class="text__edition">
                        <div class="text__edition--tech">
                            <h4>Tecnologia: </h4><p>{{item.tech}}</p>
                        </div>
                        <div class="text__edition--rol">
                            <h4>Rol: </h4><p>{{item.rol}}</p>
                        </div>
                    </div>
                </div>
                <div  class="container__portfolio--items__card--links">
                    <p>Acesos directos:</p>
                    <a v-if="item.url != '' || null" :href="item.url" target="blank_">WEB</a>
                    <a v-if="item.api != '' || null" :href="item.api" target="blank_">API</a>
                    <a v-if="item.documentation != '' || null" :href="item.documentation" target="blank_">DOCUMENTATION</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import ingefarm from '../../assets/images/imagen_movil.jpeg'

export default {
    data(){
        return{
            works:[
                {
                    name:'House Motors',
                    description:'Este proyecto fue realizado en Flutter, primer proyecto es un visualizador de automoviles',
                    tech:'Flutter',
                    url:'https://github.com/EdwinBikes/house_motors',
                    api:'',
                    documentation:'',
                    rol:'Movil Dev',
                    img:ingefarm
                }
        ]
        }   
    }
}
</script>
<style scoped>
    .container__portfolio{
                padding-top:100px;
    }
    .container__portfolio--items{
        display: grid;
        grid-template-columns: repeat(3,1fr);
        
    }
    .container__portfolio--items__card{
        background: #ededee;
        margin:10%;
        border-radius: 5px;
        box-shadow: 3px 3px 20px white;
        height: 800px;
    }
    .container__portfolio--items__card--img{
        margin:10%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .container__portfolio--items__card--img img{
        height: 400px;
        width: 90%;
        object-fit: cover;
    }
    .container__portfolio--title{
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        border-bottom: 1px solid white;
        color: white;
    }
    .container__portfolio--title h2{
        padding-left: 40px;
    }
    .container__portfolio--items__card--info{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;
        padding-left: 15px;
    }

    .text__edition{
        display: grid;
        grid-template-columns: repeat(2,1fr);
    }
    .text__edition--tech{
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    .text__edition--tech p{
        margin-left: 10px;
        background: darkgrey;
        color: linear-gradient(#17005C,#000);
        padding: 5px 10px;
        border-radius: 10px;
        text-align: center;
    }
    .text__edition--rol{
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    .text__edition--rol h4{
        padding-left: 10px;
    }
    .text__edition--rol p{
        margin-left: 10px;
        background: darkgrey;
        color: linear-gradient(#17005C,#000);
        padding: 5px 10px;
        border-radius: 10px;
        text-align: center;
    }
    .container__portfolio--items__card--links{
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;
        margin: 10px;
    }
    .container__portfolio--items__card--links p{
        width: 100%;
        margin-left: 10px;
    }
    .container__portfolio--items__card--links a{
        margin-left: 10px;
        text-decoration: none;
        background: darkgrey;
        color: linear-gradient(#17005C,#fff);
        padding: 5px 10px;
        border-radius: 10px;
        text-align: center;
    }
    @media (max-width: 850px) {
        .container__portfolio{
            height: 100%;
        }
        .container__portfolio--items{
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap ;
            
        }
        .container__portfolio--items__card{
            height: 100%;
            margin: 15px 30px;
        }
        .text__edition{
            grid-template-columns: 1fr;
        }
        .text__edition--tech{
            justify-content: center;
            flex-wrap: wrap;
        }
        .text__edition--tech h4{
            width: 100%;
        }
        .text__edition--rol{
            justify-content: center;
            flex-wrap: wrap;
        }
        .text__edition--rol h4{
           width: 100%;   
        }
    }
</style>