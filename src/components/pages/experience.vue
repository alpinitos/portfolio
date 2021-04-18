<template>
    <div class="container__experience">
        <div  class="container__experience--title">
            <h2>Experince</h2>
        </div>
        <div class="separate__containers">
            <div class="container__experience--learning">
                <div  class="container__experience--learning__tech">
                    <div class="container__experience--learning__tech--container">
                        <div  class="container__experience--learning__tech--container__title">
                            <h4>Education</h4>
                        </div>
                        <div class="container__experience--learning__tech--container__card" v-for="item in study" :key="item">
                            <div>
                                <h3>{{item.name}}</h3>
                                <p>{{item.institute}}</p>
                                <h4>{{item.finish}}</h4>
                            </div>
                        </div>
                    </div>
                    <div class="container__experience--learning__english--container">
                        <div class="container__experience--learning__english--container__title">
                            <h3>Lenguaje</h3>
                        </div>
                        <div class="container__experience--learning__english--container__card" v-for="item in idioms" :key="item">
                            <h2>{{item.name}}</h2>
                            <p>{{item.level}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div  class="container__experience--works">
                <div class="container__experience--works__title">
                    <h4>Work experience</h4>
                </div>
                <div class="container__experience--works__cards" v-for="item in works" :key="item">
                    <h3>{{item.name}}</h3>
                    <h4>{{item.job}}</h4>
                    <p>{{item.description}}</p>
                    <div class="container__experience--works__cards--date">
                        <h5>{{item.start}}</h5>
                        <h5>{{item.finish}}</h5>
                    </div>
                </div>
            </div>
        </div>        
    </div>
</template>
<script>
export default {
    data(){
        return{
            study:[
                {
                    name:'Backend Developer',
                    institute:'Platzi',
                    finish:'2023'
                },
                {
                    name:'Mechanic Engineer',
                    institute:'University Distral Francisco José de Caldas',
                    finish:'2020'
                },
                {
                    name:'Mechanical Technologist ',
                    institute:'University Distral Francisco José de Caldas',
                    finish:'2015'
                }
            ],
            idioms:[
                {
                    name:'English',
                    level:'A2'
                }
            ],
            works:[
                {
                    name:'Fusepong',
                    job:'Web Developer',
                    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate laboriosam, minima impedit corporis exercitationem quisquam?',
                    start:'dec-2020',
                    finish:'Now'
                },
                {
                    name:'General Motors Colmotores',
                    job:'Reporting BI Engineer',
                    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate laboriosam, minima impedit corporis exercitationem quisquam?',
                    start:'mar 2020',
                    finish:'dec 2020'
                },
                {
                    name:'General Motors Zoficol',
                    job:'Production Control Engineer',
                    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate laboriosam, minima impedit corporis exercitationem quisquam?',
                    start:'sep 2017',
                    finish:'dec 2020'
                },
                {
                    name:'General Motors Zoficol',
                    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate laboriosam, minima impedit corporis exercitationem quisquam?',
                    job:'Team Leader',
                    start:'oct 2014',
                    finish:'agu 2017'
                },
                {
                    name:'Ingefarm',
                    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate laboriosam, minima impedit corporis exercitationem quisquam?',
                    job:'Mechanic',
                    start:'feb 2014',
                    finish:'agu 2014'
                }
            ]
        }
    }
}
</script>
<style scoped>
.container__experience{
                padding-top:100px;
    }
*{
    color:white;
}
.container__experience--title{
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1px solid white;
    color: white;
}
.container__experience--title h2{
    padding-left: 40px;
}
.separate__containers{
    display: grid;
    grid-template-columns: 4fr 8fr;
}
.container__experience--learning{
    height: 100%;
    width: 100%;
    
}
.container__experience--learning__tech{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}
.container__experience--learning__tech--container{
    width: 80%;
    margin-left: 10px;
    padding: 10px;
    background: rgba(255,255,255,0.1);
    margin-top: 10px;
}
.container__experience--learning__english--container{
    width: 80%;
    margin-left: 10px;
    background: rgba(255,255,255,0.1);
    padding: 10px;
    margin-top: 10px;
}
.container__experience--learning__english--container__card{
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.container__experience--learning__english--container__card h2{
    margin-right: 20px;
}
.container__experience--works__cards{
    width: 80%;
    background: rgba(255,255,255,0.1);
    padding: 10px;
    margin-top: 10px;
}
.container__experience--works__title{
    width: 80%;
    background: rgba(255,255,255,0.1);
    padding: 10px;
    margin-top: 10px;
}
.container__experience--works__cards--date{
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.container__experience--works__cards--date h5{
    padding-left: 15px;
}
@media (max-width: 850px) {
    .separate__containers{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }
    .container__experience--work{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }
    .container__experience--works__title{
        margin: 15px auto;
    }
    .container__experience--works__cards{
        margin: 15px auto;   
    }
}
</style>
