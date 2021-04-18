<template>
    <div class="navbar__container">
       <div class="navbar__container--items">
           <div class="navbar__container--items__logo">
               <img :src="require('../../assets/logo.png')" alt="Logo">
           </div>
           <div class="navbar__container--items__caption">
               <h1>Regniek - Camilo Espitia</h1>
           </div>
           <div class="navbar__container--items__menu">
               <img :src="require('../../assets/menu.png')"  alt="menu">
           </div>
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
        
    }
}
</script>
<style scoped>
.navbar__container{
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
 
}
@media (max-width: 380px) {
  
 
  
}
</style>