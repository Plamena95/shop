<template>
<h1 class="text-center mt-5">Products</h1>
  <div class="home d-flex flex-wrap mx-auto">
    <div v-for="i in item" :key="i" @click="info()" class="position-relative item col-3 my-3 mx-3 text-center d-flex flex-column align-items-center justify-content-between">
      <router-link v-bind:to="`/home/` + i.id"><img :src="i.image" alt="" class="col-6"></router-link>
      <h3>{{i.title}}</h3>
    </div>
  </div>
</template>

<script>
export default {
  props:["id"],
  name:"HomeView",
  data(){
    return{
      api: `http://fakestoreapi.com/products?limit=9`,
      item:"",
      goTo:``
    }
  },
   mounted() {
      fetch(`http://fakestoreapi.com/products?limit=9`)
      .then(response=>{
        return response.json()
      }).then(result=>{
        this.item=result
      }).catch(err=>{
        console.log(err.message)
      })
    }
}
</script>
<style scoped>
h1{
      margin-bottom: 50px;
    font-size: 100px;
    font-weight: bold;
}
.home{
  width: 80%;
  justify-content: space-between;
}
.item{
    background: lightgray;
    border-radius: 20px;
    padding: 20px;
    height: 200px;
}
.item a{
 
  height: 100%;
    position: absolute;
    top: 0;
width: 100%;
}
.item img{
      width: 100%;
    border-radius: 20px;
    opacity: 0.5;
    height: 100%;
}
.item h3{
  z-index: 999;
  font-size: 20px;
}
.item h3:hover{
  z-index: 999;
  display: flex;
  align-self: end;
  
}
.item:hover{
  border: 2px solid orange;
  transition: 0.5s;
  cursor: pointer;
}
</style>