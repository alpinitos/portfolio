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
                    description:'In this work I am working in diferrents apps as developer with ruby on rails and vue js, I have focus in Backend developer but I have little task in the frontend and the DevOps',
                    start:'dec-2020',
                    finish:'Now'
                },
                {
                    name:'General Motors Colmotores',
                    job:'Reporting BI Engineer',
                    description:'It was my finish position in General Motors, I had differents recognition for delivery excelents reports that allow follow the planning of production and the allow the comapny over passed the first re open time in quarantine.',
                    start:'mar 2020',
                    finish:'dec 2020'
                },
                {
                    name:'General Motors Zoficol',
                    job:'Production Control Engineer',
                    description:'It was my first position as engineer, In that position I improved my skils in short lead time, continous improvement and development with visual basic',
                    start:'sep 2017',
                    finish:'dec 2020'
                },
                {
                    name:'General Motors Zoficol',
                    description:'In that Job I won a strong skill in lead, beacouse I learning to work with work groups with lenght 18 people in a team, I work in differents areas about production assembly as dress truck, heavy suspensions, autmovile suspensions, tires, riveting trucks.',
                    job:'Team Leader',
                    start:'oct 2014',
                    finish:'agu 2017'
                },
                {
                    name:'Ingefarm',
                    description:'It were my first work,in that position I was gain different skills about flight learning, proactivity and lead, I applied differents skill in the mechanic area.',
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
