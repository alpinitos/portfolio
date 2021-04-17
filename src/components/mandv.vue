<template>
        <div class="container__mision">
                    <div class="container__mision--text">  
                        <h2>Mision</h2>
                        <p>
                        Grupo DESCA S.A.S., somos una
                        empresa privada, dedicada a la
                        prestación de servicios laborales
                        orientada a promover la seguridad,
                        el bienestar y mejorar los ambientes
                        laborales de las empresas clientes.
                    </p>
                    </div>
                    <div class="container__mision--img">
                        <img src="https://cdn.pixabay.com/photo/2016/09/01/15/18/industrial-1636390_960_720.jpg" alt="">
                    </div>     
        </div>
</template>
<style scoped>

.container__mision{
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 560px;
}
.container__mision--text{
    height: 500px;
    width: 45vw;
    background  : linear-gradient(0deg,rgba(0,0,0,0.9) 0%, rgba(173,23,16,0.9) 100%);
    box-shadow: 4px 4px 2px 2px rgba(0,0,0,0.7);
    color:white;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items:stretch;
    flex-wrap: wrap;
}
.container__mision--text h2{
    width: 100%;
    text-align: center;
    font-size: 40px;
}
.container__mision--text p{
    width: 70%;
    text-align: justify;
    font-size: 25px;
}
.container__mision--img{
    height: 500px;
    width: 45vw;
    background  : linear-gradient(0deg,rgba(0,0,0,0.9) 0%, rgba(173,23,16,0.9) 100%);
    box-shadow: 4px 4px 2px 2px rgba(0,0,0,0.7);
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.container__mision--img img{
    height: 90%;
    width: 90%;
    object-fit: contain;
}
@media (max-width: 850px) {
    .container__mision{
        display: grid;
        grid-template-columns: 1fr;
    }
    .container__mision--text{
        width: 90vw;
        margin: 20px auto;
        grid-row:2;
    }
    .container__mision--img{
        width: 90vw;
        height: auto;
        padding-top: 10px;
        padding-bottom: 10px;
        margin: 20px auto;
        grid-row:1;
    }
}
@media (max-width: 850px) and (orientation: landscape){
   
}
</style>