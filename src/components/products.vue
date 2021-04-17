<template>
    <div class="container__body">
        <div class="container__products">
            <div class="container__products--title">
                <h1>LINEA DE PRODUCTOS</h1>
            </div>
            <div class="container__products--categories">
                
                <div class="container__products--categories__papeleria item">
                    <!-- <img class="all__img" :src="require('../assets/images/papeleria.jpg')" alt=""> -->
                    <h2>Papeleria</h2>
                    <ul>
                        <li>Papeleria y suministros</li>
                        <li>Mobiliario</li>
                        <li>Computadores y electrónicos</li>
                    </ul>
                </div>
                <div class="container__products--categories__asesorias item">
                    <!-- <img class="all__img" :src="require('../assets/images/acesorias.jpg')" alt=""> -->
                    <h2>Programas de capacitación</h2>
                    <ul>
                        <li>Consultoria</li>
                        <li>Capacitación y entrenamiento</li>
                        <li>Estructura de proyectos</li>
                        <li>Coaching</li>
                    </ul>
                </div>
                <div class="container__products--categories__epp item">
                    <!-- <img class="all__img" :src="require('../assets/images/epps.jpg')" alt=""> -->
                    <h2>Seguridad y dotación industrial</h2>
                    <ul>
                        <li>Ropa industrial</li>
                        <li>Botas en cuero</li>
                        <li>Protección auditiva,facila y manual</li>
                        <li>Señalización personal e industrial</li>
                    </ul>
                </div>
                <div class="container__products--categories__importar item">
                    <!-- <img class="all__img" :src="require('../assets/images/importar.jpg')" alt=""> -->
                    <h2>Importación y distribución de piezas industriales</h2>
                    <ul>
                        <li>Sector Ferretero</li>
                        <li>Sector Metalúrgico</li>
                        <li>Miscelánea en general</li>
                        <li>Sector minero</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.container__body{
    width: 100%;
    height: 100%;
}
.container__products{
    display:grid;
    grid-template-rows: 2fr 10fr;
}
.container__products--categories{
    display: grid;
    grid-template-columns: repeat(4,1fr);
}
.all__img{
    height: 40vh;
}
.item{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}
.item h2{
    width: 100%;
    text-align: center;
}
@media (max-width: 850px) {
   .container__products--categories{
        grid-template-columns: 1fr;
    }
    .container__body{
        height: 100%;
    }
    .container__service--img img{
        width: 100%;
    }
    .container__products{
        display:flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }
    .container__products--title h1{
        text-align: center;
    }
}
</style>