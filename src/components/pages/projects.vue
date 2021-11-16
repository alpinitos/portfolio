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
import ingefarm from '../../assets/images/ingefarm.png'
// import grupodesca from '../../assets/images/grupodesca.png'
import blog from '../../assets/images/blog.png'
import letsroomie from '../../assets/images/letsroomie.png'
import mariachinuevojalisco from '../../assets/images/mariachinuevojalisco.png'
import pandar from '../../assets/images/pandar.png'
// import solutions from '../../assets/images/solutionspremium.png'
export default {
    data(){
        return{
        works:[
            {
                name:'Ingefarm page',
                description:'This project was my first work as a developer in this moment improvements are being made with vue and new desing in ingefarm.vercel.app.',
                tech:'Vue',
                url:'http://ingefarm.co',
                api:'',
                documentation:'',
                rol:'Frontend',
                img:ingefarm
            },
            {
                name:'Blog',
                description:'This project is the visual  part of one blog, the plan is to add an API for making it functional and start to write different articles about tech and life.',
                tech:'JS, CSS, HTML',
                url:'https://regniek.github.io/RegniekBlog/index.html',
                api:'',
                documentation:'',
                rol:'Frontend',
                img:blog
            },
            {
                name:'Mariachi Nuevo Jalisco',
                description:'It\'s a project in which I intend to help the local mariachi in pandemic for extending the participation on the internet.',
                tech:'JS, CSS, HTML',
                url:'https://mariachinuevojalisco.com.co/',
                api:'',
                documentation:'',
                rol:'Frontend',
                img:mariachinuevojalisco
            },
            // {
            //     name:'Solutioms Premium',
            //     description:'This is a project to display the SolutionsPremium SAS portfolio, this project is my first project in VUE and CI with vercel.',
            //     tech:'Vue',
            //     url:'https://www.solutionspremium.com.co/',
            //     api:'',
            //     documentation:'',
            //     rol:'Frontend',
            //     img:solutions
            // },
            {
                name:'PanDar-app',
                description:'This is a great project made when I was in intensive training in Platzi Master, I participated in the backend developer role, in this project I proposed different options for building the structure in data base and backend service.',
                tech:'Node JS',
                url:'https://pandar.vercel.app/',
                api:'https://backend-intellegent-tourism-system.vercel.app/',
                documentation:'https://gitlab.com/pandevs/backend-intellegent-tourism-system',
                rol:'Backend',
                img:pandar
            },
            {
                name:'Let\'sRoomie-app',
                description:'This project was very important because with it I finished my intensive phase in platzi master and in it I could use different skills on Node js Mongo DB and AWS.',
                tech:'Node JS AWS',
                url:'https://letsroomie.vercel.app/',
                api:'https://api-letsroomie.herokuapp.com/api-docs/',
                documentation:'https://github.com/Yuliana-Team-Project-PM/Backend-LetsRoomie',
                rol:'Backend',
                img:letsroomie
            },
            // {
            //     name:'Grupo DESCA',
            //     description:'This project was created around the need of people in different companies with low levels in the work safety system with respect to Colombian\'s law',
            //     tech:'Vue',
            //     url:'https://www.grupodesca.com/',
            //     api:'',
            //     documentation:'',
            //     rol:'Frontent',
            //     img:grupodesca
            // },
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
        height: 650px;
    }
    .container__portfolio--items__card--img{
        margin:10%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .container__portfolio--items__card--img img{
        height: 200px;
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