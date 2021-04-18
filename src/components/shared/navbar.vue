<template>
    <div class="navbar__container">
       <div class="navbar__container--items">
           <div class="navbar__container--items__logo">
               <img :src="require('../../assets/logo.png')" alt="Logo" @click="goToHome()">
           </div>
           <div class="navbar__container--items__caption">
               <h1>Regniek - Camilo Espitia</h1>
           </div>
           <div class="navbar__container--items__menu">
               <img :src="require('../../assets/menu.png')"  alt="menu" @click="showMenu=true">
           </div>
       </div>
       <div class="float_menu" v-if="showMenu==true">
           <p @click="showMenu=false">Close</p>
           <ul>
               <li @click="goToProjects()">Projects</li>
               <li @click="goToExperience()">Experience</li>
               <li @click="goToAboutMe()">About Me</li>
               <li @click="goToContactMe()">Contact Me</li>
           </ul>
       </div>
    </div>
</template>
<script>
export default {
    data (){
        return{
            showMenu:false,
        }
    },
    methods:{
        goToHome(){
            this.$router.push({name:'Container'})
            this.showMenu=false
        },
        goToProjects(){
            this.$router.push({name:'Projects'})
            this.showMenu=false
        },
        goToExperience(){
            this.$router.push({name:'Experience'})
            this.showMenu=false
        },
        goToAboutMe(){
            this.$router.push({name:'AboutMe'})
            this.showMenu=false
        },
        goToContactMe(){
            this.$router.push({name:'ContactMe'})
            this.showMenu=false
        },
    }
}
</script>
<style scoped>
.float_menu{
    position: fixed;
    right: 0;
    top: 0;
    height: 100vh;
    background: rgba(40, 40, 42,1);
    width: 250px;
}
.float_menu ul{
    list-style: none;
    padding: 0;
    margin: 0;

}
.float_menu ul li{
    width: 90%;
    padding: 10% 5%;
    text-align: center;
}
.float_menu ul li:hover{
    background: rgba(255,255,255,0.5);
}
.float_menu p{
    text-align: right;
    padding: 20px;
    background: linear-gradient(#17005C,#000);

}
.navbar__container{
    position: fixed;
    width: 100%;
    top:0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    background-color:rgba(40, 40, 42,0.9);
    color:white;
}
.navbar__container--items{
    display: grid;
    grid-template-columns: repeat(3,1fr);
    width: 100%;
}
.navbar__container--items div{
    display: flex;
    align-items: center;
    width: 100%;
}
.navbar__container--items__logo{
    justify-content: left;
    
}
.navbar__container--items__menu{
    justify-content: flex-end;
    
}
.navbar__container--items__caption{
    justify-content: center;
    
}
.navbar__container--items__logo img{
    height: 60px;
    padding-left: 30px;
}
.navbar__container--items__menu img{
    height: 60px;
    padding-right: 30px;
}
@media (max-width: 850px) {
    .navbar__container{
        width: 100%;
    }
    .navbar__container--items__caption h1{
        font-size: 15px;
        text-align: center;
    }
    .float_menu{
        width: 100vw;
    }
}
@media (max-width: 380px) {
  
 
  
}
</style>