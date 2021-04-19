<template>
    <div class="all__about">
        <div class="container__about"> 
            <div class="container__about--name">
                <h2>{{about.name}}</h2>
                <img :src="about.img" alt="">
            </div>
            <div class="container__about--site">
                <h3>{{about.city}}</h3><h3>{{about.country}}</h3>
            </div>
            <div class="container__about--description">
                <p>
                    {{about.description}}
                </p>
                </div>
        </div>
    </div>

</template>
<script>
export default {
    data(){
        return{
            about:{
                
                    name:'Juan Camilo Espitia Camacho',
                    description:'Welcome to my being, I am Juan Camilo Espitia Camacho, Web developer of Fusepong in the city of Bogotá, Mechanical Engineer of the Francisco José de Caldas District University, passionate about all kinds of bicycles, substitute father of a boy and girl, husband of a great woman. I fell in love with software development at the age of 15, but for things of life, I left it for more than 10 years, at 28 I took it up again, and with the help of Platzi and my family, I will be one of the best. This site is created to start my journey as a Blogger and serve the community.',
                    city:'Bogotá',
                    country:'Colombia',
                    img:'https://images.emojiterra.com/twitter/v13.0/512px/1f1e8-1f1f4.png'

                
            }
        }
    }
}
</script>
<style scoped>
.all__about{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70vh;
}
.container__about{
    padding-top:100px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 80%;
}
.container__about--name img{
    height: 70px;
}
.container__about--name{
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background: rgba(255,255,255,0.1);
    color:white;
    margin:8px;
}
.container__about--name h2{
    margin:0 30px;
}
.container__about--site{
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background: rgba(255,255,255,0.1);
    color:white;
    margin:8px;
}
.container__about--site h3{
    margin-left: 20px;
}
.container__about--description{
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background: rgba(255,255,255,0.1);
    color:white;
    margin:8px;
}
.container__about--description{
    text-align: justify;
    padding: 0 15px;
}
@media (max-width: 850px) {
    .all__about{
        height: 100%;
    }
    .container__about--name h2{
        font-size: 20   px;
    }
}
</style>
