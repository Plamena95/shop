<template>
       <section
      class="
      ps-0 ps-md-5
        quick-menu
        d-block d-md-flex
        align-items-start
        justify-content-around
        py-5
      "
    >
      <div class="offices col-12 col-md-4 mx-auto mx-md-0 col-md-3">
        <div class="offices-header d-flex px-md-2 justify-content-start">
          <img
            class="col-1 mx-3 mx-md-0"
            src="https://ideogen.unbelievable.digital/assets/images/footer_icon_1.svg"
            alt=""
          />
          <h4 class="col-10 col-md-5 mx-2">Our Global Offices</h4>
        </div>
        <div class="info col-9 mx-auto">
          <ul class="px-0">
             <li v-for="item in firstcol" :key="item">
                <a href="#">{{item}}</a>
              </li>
          </ul>
        </div>
      </div>
      <div class="links col-12 col-md-4 mx-auto mx-md-0 col-md-2">
        <div class="links-header d-flex px-md-2 justify-content-start">
          <img
            class="col-1 mx-3 mx-md-0"
            src="https://ideogen.unbelievable.digital/assets/images/footer_icon_2.svg"
            alt=""
          />
          <h4 class="col-10 col-md-5 mx-2">Useful Links</h4>
        </div>
        <div
          class="
            info
            d-md-flex d-block
            col-9 col-md-6
            justify-content-md-between
            mx-auto mx-md-0
          "
        >
          <div class="links-first">
            <ul class="px-0">
              <li v-for="item in thirdcol" :key="item">
                <a href="#">{{item}}</a>
              </li>
            </ul>
          </div>
          <div class="links-second">
            <ul class="px-0">
              <li v-for="item in thirdcol" :key="item">
                <a href="#">{{item}}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="medicine col-12 col-md-4 mx-auto mx-md-0 col-md-3">
        <div class="medicine-header d-flex px-md-2 justify-content-start">
          <img
            class="col-1 mx-3 mx-md-0"
            src="https://ideogen.unbelievable.digital/assets/images/footer_icon_3.svg"
            alt=""
          />
          <h4 class="col-10 col-md-5 mx-2">Find A Medicine</h4>
        </div>
        <p class="info col-9 mx-auto">Ideogen Products Hepacor</p>
      </div>
    </section>
</template>
<script>
export default {
  name: 'Footer',
  
  data(){
    return{
     firstcol:["Switzerland","Turkey","United States","United Kingdom","European Union"],
    
     thirdcol:["Stay In Touch","Terms of use ","Cookies","Privacy policy","Sitemap"]
    }
  },
  methods:{
   

  }
}
</script>
<style scoped>
h4,p{
    color: white;
}
.main{
  background: #16181C;
    padding: 20px;
}
nav{
  width: 20%;
}
li{
    list-style: none;
}

a{
  text-decoration: none;
  color: white;
  padding-right: 10px;

}
a:hover{
  color: gray;
  font-weight: bold;
  transition: 0.5s;
}
.quick-menu{
  background:#16181C;

}
</style>
