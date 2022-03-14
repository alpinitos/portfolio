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
                    name:'Flutter Developer',
                    institute:'Platzi, Udemy , Codigo Facilito, BIT',
                    finish:'Actual'
                },
                {
                    name:'Tecnico Electricidad y Electronica Automotriz',
                    institute:'Instituto Juan Bosco Obrero',
                    finish:'2014'
                }
            ],
            idioms:[
                {
                    name:'English',
                    level:'A1'
                }
            ],
            works:[
                {
                    name:'General Motors Colmotores',
                    job:'Analista de Riesgos',
                    description:'Realizaba las siguientes actividades; Análisis, control y gestión de los riesgos de las áreas de auto y camión, Gestión de los nuevos proyectos para cumplir los requerimientos de seguridad y ergonomía de la organización, Gestión de cierre de reportes de seguridad y de ergonomía para el cumplimiento de los objetivos de la organización, Automatización de reportes y creación de Dashboard con Visual Basic for Applications para la optimización del tiempo, Integración de Visual Basic for Applications con otras herramientas para consolidar los datos de estandarizados y riesgos en un solo lugar y Generación de paneles de control en Visual Basic for Applications para el control de información en la eliminación de riesgos potenciales.',
                    start:'sep-2017',
                    finish:'Now'
                },
                {
                    name:'General Motors Colmotores',
                    job:'Operario General',
                    description:'Realizaba las siguientes actividades; Ensamble de autopartes para vehiculos pesados , livianos y automóviles, Desarrollo de trabajo estandarizado, Optimizar procesos de la cadena de producción con sugerencias tangibles, Inspección de autopartes terminadas y Aplicación de pintura para autopartes y automoviles.',
                    start:'sep 2014',
                    finish:'sep 2017'
                },
                {
                    name:'House Motors',
                    job:'Mecánico',
                    description:'Realizaba las siguientes actividades; Mantenimiento físico de vehículos eléctrica y mecánicamente, Asesoría en venta de refacciones, Manejo de personal, Aplicación de pintura para vehiculos y Coordinación de actividades diarias del taller.',
                    start:'ene 2016',
                    finish:'mar 2019'
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
