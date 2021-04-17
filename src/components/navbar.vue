<template>
    <div class="navbar__container">
        <div class="navbar__container--img" @click="goToHome">
            <!-- <img  :src="require('../assets/logo.png')" alt="logo"> -->
            <p>Grupo</p><h3>&nbsp;DESCA</h3></div>
        <div class="navbar__container--main">
            <div class="mobil__main">
                <!-- <img :src="require('../assets/images/menu.png')" @click="showMenu = true" alt=""> -->
            </div>
            <div class="mobil__whatsapp">
                <a href="https://api.whatsapp.com/send?phone=+573114442194">
                <!-- <img :src="require('../assets/images/icons8-whatsapp-480 (2).png')" alt=""> -->
                </a>
            </div>
            <div class="navbar__container--main__links">
                <button  class="main__link" @click="goToServices">Servicios</button>
                <button class="main__link" @click="goToContact">Contactanos</button>
            </div>
        </div>
        <div v-if="showMenu" class="other__menu">
                <button  class="main__link" @click="goToHome">Inicio</button>
                <button  class="main__link" @click="goToServices">Servicios</button>
                <button class="main__link" @click="goToContact">Contactanos</button>
        </div>
    </div>
</template>
<script>
export default {
    data (){
        return{
            showMenu:false
        }
    },
    methods:{
        goToHome(){
            this.$router.push({path:'/'})
            if (this.showMenu == true){
                this.showMenu = false
            }
        },
        goToServices(){
            this.$router.push({path:'/servicios'})
            if (this.showMenu == true){
                this.showMenu = false
            }
        },
        goToProducts(){
            this.$router.push({path:'/productos'})
            if (this.showMenu == true){
                this.showMenu = false
            }
        },
        goToContact(){
            this.$router.push({path:'/contactanos'})
            if (this.showMenu == true){
                this.showMenu = false
            }
        }
    }
}
</script>
<style scoped>
.mobil__main{
    display: none;
}
.mobil__whatsapp{
    display: none;
}
.other__menu{
    z-index: 12;
    position: fixed;
    height: 100vh;
    width: 100vw;
    background-color:rgba(40, 40, 42,0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}
.other__menu button{
    width: 100%;
    font-size: 35px;
    background: none;
    color: white;
    border: none;
    padding: 0;
    cursor: pointer;
    outline: inherit;
}

.navbar__container{
    position: fixed;
    width: 100vw;
    top:0;
    display: grid;
    grid-template-columns: 4fr 2fr;
    height: 90px;
    background-color:rgba(40, 40, 42,0.9);
}
.navbar__container--img{
    display: flex;
    justify-content: left;
    align-items: center;
    font-size: 20px;
    color: white;
}
.navbar__container--img img{
    padding: 10px;
    height: 80px;
}
.navbar__container--main__links{
    color: white;
    padding-top: 36px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    
}
.navbar__container--main__links button{
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    padding-right: 40px;
}
@media (max-width: 850px) {
  .navbar__container--main__links{
      display: none;
  }
  .mobil__main{
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    
  }

  .navbar__container--img{
    font-size: 12px;
}
  .mobil__whatsapp{
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
  }
  .mobil__whatsapp img{
    height: 60px;
    padding-bottom: 10px;
    padding-right: 10px;
    position: fixed;
    z-index: 11;
    right: 0;
    bottom: 0;
  }
  .mobil__main img{
    height: 60px;
    padding: 10px;
    position: fixed;
    z-index: 11;
    
    border-radius:20px;
  }
}
@media (max-width: 380px) {
  
  .navbar__container--img{
    font-size: 10px;
}
  
}
</style>