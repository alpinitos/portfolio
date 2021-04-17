<template>
    <div class="container__body">
        <div class="container__service">
            <div class="container__service--img">
                <img src="https://cdn.pixabay.com/photo/2015/01/08/18/27/startup-593341_960_720.jpg"  alt="">
            </div>
            <div class="container__service--info">
                <h1>NUESTROS SERVICIOS</h1>
                <div>
                    <p>
                    Destacamos por ofrecer servicios integrales de alta
                    calidad. Cumpliendo expectativas, generando alianzas
                    comerciales con nuestros clientes y proveedores.
                    Estos son algunos de los servicios profesionales que
                    ofrecemos: </p>
                <ul>
                    <li>Diseño, implementación y mantenimiento de SG-SST, calidad y medio ambiente.</li>
                    <li>Suministro de personal capacitado en SST</li>
                    <li>Asesoría y capacitación SG – SST</li>
                    <li>Comercialización de elementos de protección personal</li>
                    <li>Soporte en paginas web</li>
                    <li>Servicio de obras civiles</li>
                </ul>
                </div>
                
            </div>
        </div>
    </div>
</template>
<style scoped>
.container__body{
    margin-top: 90px;
    width: 100%;
    height: 80vh;
    font-size: 25px;
}
.container__service{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    height: 100%;
    width: 100%;
}
.container__service--img{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
}
.container__service--img img{
 width: 700px;
}
.container__service--info{
    display: grid;
    grid-template-rows: 2fr 10fr;
}
.container__service--info h1{
    width: 100%;
    text-align: center;
}
.container__service--info div p{
    width: 100%;
    text-align: justify;
}
.container__service--info div{
    padding:0 40px;
}
@media (max-width: 850px) {
   .container__service{
        grid-template-columns: 1fr;
    }
    .container__body{
        height: 100%;
    }
    .container__service--img img{
        width: 100%;
    }
}
</style>