<template>
     <div class="main">
    <nav class="mx-auto d-flex justify-content-between col-10">
        <div class="logo col-2">
        </div>
    <div class="menu col-3">
        <router-link to="/" >Home</router-link> 
    <router-link to="/about">About</router-link>
    <router-link to="/contacts">Contacts</router-link>
    </div>
    <div class="search col-1">
        <input type="search" placeholder="Search">
    </div>
  </nav>
  </div>
  <router-view/>
</template>
<script>
export default {
  name: 'Header',
  
  data() {
    return{
    
    }
  },
  methods:{
   

  }
}
</script>
<style scoped>

.main{
  background-color:#16181C ;
    padding: 20px;
}
input{
    outline: none;
        border: none;
    border-radius: 20px;
    padding-left: 10px;
}
nav a{
  text-decoration: none;
  color: white;
  padding-right: 10px;
}
.router-link{
    font-size: 40px;
    font-weight: bold;
}
.router-link-active,
nav a:hover{
  color: gray;
  font-weight: bold;
  transition: 0.5s;
}
.quick-menu{
  background: linear-gradient(135deg, rgba(0, 0, 142, 0.8) 0%, rgba(1, 114, 128, 0.8) 100%);

}
</style>