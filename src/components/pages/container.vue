<template>
    <div class="container__landing">
       <div class="container__landing--box">
           <div class="container__landing--box__image">
               <p>
                   FLUTTER DEVELOPER
               </p>
           </div>
            <div class="container__landing--box__text">
                <p class="quote">"The most important thing in life will always be the people in this room, right here, right now."</p>
                <p class="author">-Dominic Toretto</p>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .container__landing{
        padding-top:100px;
        width: 100%;
        height: 70vh;
        display: flex;
        justify-content:center;
        text-align: center;
   }
   .container__landing--box{
       display: grid;
       grid-template-rows: 3fr 1fr;
       border: 2px solid pink;
       margin: 60px;
       box-shadow: 0 0 20px white;
   }
   .container__landing--box__image{
       height: 100%;
       width: 100%;
       display: flex;
       justify-content: center;
       align-items: center;
   }
   .container__landing--box__image p{
       font-size:40px;
       color: white;
       margin: 0 30px;
       text-align: center;
   }
   .container__landing--box__text{
       display: flex;
       justify-content:center;
       text-align: center;
       flex-wrap: wrap;
   }
   .container__landing--box__text p{
       width: 100%;
       color: white;
   }

@media (max-width: 850px) {
   .container__landing{
        height: 100%;
   }

}
@media (max-width: 850px) and (orientation: landscape){
   
}
</style>