<template>
    <div class="all__about">
        <div class="container__about"> 
            <div class="container__about--name">
                <h2>{{about.name}}</h2>
                <img :src="about.img" alt="">
            </div>
            <div class="container__about--site">
                <h3>{{about.city}}</h3><h3>{{about.country}}</h3>
            </div>
            <div class="container__about--description">{{about.description}}</div>
        </div>
    </div>

</template>
<script>
export default {
    data(){
        return{
            about:{
                
                    name:'Juan Camilo Espitia Camacho',
                    description:'<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nemo voluptatem voluptate qui, pariatur facilis. Eius mollitia doloremque hic porro!</p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur ipsum animi nesciunt quasi dolores earum.</p><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora recusandae, deserunt architecto totam fuga expedita veritatis laborum adipisci! Modi numquam fuga nulla iusto voluptatibus perferendis.</p>',
                    city:'Bogotá',
                    country:'Colombia',
                    img:'https://images.emojiterra.com/twitter/v13.0/512px/1f1e8-1f1f4.png'

                
            }
        }
    }
}
</script>
<style scoped>
.all__about{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70vh;
}
.container__about{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 80%;
}
.container__about--name img{
    height: 70px;
}
.container__about--name{
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background: rgba(255,255,255,0.1);
    color:white;
    margin:8px;
}
.container__about--name h2{
    margin:0 30px;
}
.container__about--site{
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background: rgba(255,255,255,0.1);
    color:white;
    margin:8px;
}
.container__about--site h3{
    margin-left: 20px;
}
.container__about--description{
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background: rgba(255,255,255,0.1);
    color:white;
    margin:8px;
}
</style>
