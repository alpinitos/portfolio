<template>
    <div class="container__body">
        <div class="container__landing">
            <div class="container__landing--title">
                <div class="container__landing--title__contain">
                    <h2>Grupo DESCA</h2>
                    <p>
                        GRUPO DESCA S.A.S., somos una empresa
                        que presta servicios de asesoría y consultoría
                        para las empresas en el diseño e implementación
                        del Sistema de Gestión de Seguridad y Salud
                        en el Trabajo, realizamos acompañamiento
                        con profesionales con conocimiento y
                        experiencia en prevención y control
                        de riesgos laborales.
                    </p>
                </div>
                
            </div>
        </div>
        <Mision />
    </div>
</template>
<style scoped>
.container__body{
    margin-top: 90px;
    width: 100%;
    height: 100%;
}
.container__landing{
    display: grid;
    grid-template-rows: 1fr;
}
.container__landing--title{
    background-image: url('https://cdn.pixabay.com/photo/2017/08/03/21/37/construction-2578410_960_720.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    width: 100vw;
    height: 700px;
   
}
.container__landing--title__contain{
    height: 200px;
    margin-top: 30vh;
    background-color: rgba(40, 40, 42,0.7);
    display: flex;
    justify-content: center;
    align-items: center;    
    flex-wrap: wrap;
    color:white;
    font-size: 20px;
}
.container__landing--title__contain h2{
    width: 100%;
    text-align: center;
    font-size: 30px;
    padding: 0;
    margin: 0;
}
.container__landing--title__contain p{
    width: 50%;
    text-align: justify;
    padding: 0;
    margin: 0;
}
.container__landing--text{
    display: grid;
    grid-template-columns: repeat(2,1fr);
}
.container__landing--text__image{
    display: flex;
    justify-content: center;
    align-items: center;
}
.container__landing--text__p{
    display: flex;
    justify-content: center;
    align-items: center;
    margin:0 60px;
}
.container__landing--text__p p{
    text-align: justify;
}
@media (max-width: 850px) {
    .container__landing--text{
        grid-template-columns: 1fr;

    }
    .container__body{
        height: 1650px;
    }
    .container__landing--title{
        height: 800px;
    }
    .container__landing--title__contain{
        height: 550px;
        background-color: rgba(40, 40, 42,0.8);
    }
    .container__landing--text__image img{
        width: 100%;
    }
}
@media (max-width: 850px) and (orientation: landscape){
    .container__landing--text{
        grid-template-columns: 1fr;

    }
    .container__body{
        height: 100%;
    }
    .container__landing--title{
        height: 500px;
    }
    .container__landing--text__image img{
        width: 100%;
    }
}
</style>