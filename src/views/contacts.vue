<template>
<div class="header">
  <h1>Contact Us</h1>
</div>
<div v-show="applyshow" class="contact">
      <div class="names col-12 flex-row my-3">
    <label class="me-4" for="names">Full Names: </label>
    <input class="me-4" type="text" name="names" v-model="firstName" placeholder="First Name"/>
    <input type="text" name="names" v-model="lastName" placeholder="Last Name">
  </div>
  <div class="email col-5">
    <label class="me-4" for="email">Email: </label>
    <input type="email" name="email" v-model="email" placeholder="employee@gmail.com"/>
  </div>
  <div>
    <label class="me-4" for="tel">Phone number:</label>
    <input type="phone" name="tel" v-model="tel" placeholder="+359xxxxxxxx">
  </div>
  <div class="job-type col-6 my-4">
      <label class="me-4" for="Type">Position: </label>
    <select name="Type" id="">
      <option v-for="job in jobType" :key="job" >{{ job }}</option>
    </select>
  </div>
  <div class="text d-flex flex-column col-12">
      <label class="my-3" for="questions">Why you want to work for us?</label>
  <textarea  name="questions" id="" cols="30" rows="10" placeholder="Text" v-model="message"></textarea>
  </div>
  <button class="my-4" @click="submitApp()">Submit</button>
</div>
<div v-show="showed" class="application">
    <h1>Thank you for the application {{finalname}}!</h1>
    <p class="email">Your e-mail:  {{email}}</p>
    <p class="phone">Your phone:  {{tel}}</p>
    <p class="message">Your message:  {{message}}</p>
</div>
</template>
<script>
export default {
  data() {
    return {
      jobType: ["Front End", "Back End", "Full Stack"],
      firstName:"",
      lastName:"",
      finalname:"",
      showed:false,
      applyshow:true,
      email:"",
      tel:"",
      message:""
      
    };
  },
  methods:{
      submitApp(){
          this.finalname=this.firstName + ` ` +this.lastName;
          this.name=""
          this.showed=true
          this.applyshow=false
         
      }
  }
};
</script>
<style scoped>
p{
  font-style: italic;
  font-size: 30px;
}
.header{
  background-image: url(http://cdn.eso.org/images/screen/eso2202a.jpg);
  height: 300px;
  display: flex;
    align-items: end;
    justify-content: end;
    background-repeat: no-repeat;
    background-size: cover;
}
.header h1{
color: white;
font-size: 100px;
margin: 50px;
}
.contact{
    flex-wrap: wrap;
    display: flex;
    width: 50%;
    margin: 100px auto;
}
.application{
      width: 50%;
    margin: 100px auto;
}
.application h1{
  font-weight: bold;
  margin-bottom:30px;
}
button{
      background: black;
    color: white;
    padding: 20px 50px;
    border-radius: 40px;
    font-size: 30px;
    font-weight: bold;
    border:none;
}
button:hover{
background: orange;
color: gray;
}
</style>