<template>
  <div class="all__body">

    <div id="app">
      <router-view />
    </div>
  </div>  
</template>
<script>
export default {
  data() {
    return {
      
    }
  },

}
</script>
<style>
 @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');;
 *{
    font-family: 'Lato', sans-serif;
  }
  .all__body{
    background: linear-gradient(#000,#52adc1);
    width: 100vw;
    /* #0713A6 */
  }
</style>
