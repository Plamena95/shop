<template>
  <div class="col-10 mx-auto">
   <p class="category mt-5">Category: {{data.category}}</p>
   <div class="item d-flex flex-column align-items-center">
       <h1 class="title">{{data.title}}</h1>
       <p class="description">{{data.description}}</p>
       <img class="col-4" :src="data.image" alt="">
       <h1 class="price mt-4">Price: {{data.price}} $</h1>
       <button class="my-5">BUY NOW</button>
   </div>
  </div>
</template>

<script>


export default {
     props:["id"],
  data(){
    return{
      id:this.$route.params.id,
      data:""
    }
  },
     mounted() {
      fetch(`http://fakestoreapi.com/products/`+this.id)
      .then(response=>{
        return response.json()
      }).then(result=>{
        this.data=result
        console.log(result)
      }).catch(err=>{
        console.log(err.message)
      })
    }
}
</script>
<style scoped>
.title{
        font-size: 50px;
    color: gray;
    margin-bottom: 20px;
}
button{
        padding: 10px 50px;
    border-radius: 20px;
    background: black;
    color: white;
    font-weight: bold;
    border: none;
}
button:hover{
background: orange;
font-weight: bold;
color: black;
transition: 0.3s;
}
</style>