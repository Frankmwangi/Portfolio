<template>
  <div class=" hrsder">
    <nav class="navbar navbar-default" style="padding:0" >
  <div class="container-fluid">
    <div class="navbar-header">
      <h1 class="navbar-brand" >FRANK</h1>
    </div>
    <ul class="nav navbar-nav " style="display:inline">
       <li class=""><router-link
     tag="a" 
     :to="{name:'contact'}">Contactme</router-link></li>
     <li class=""><router-link
     tag="a" 
     :to="{name:'mywork'}">My work</router-link></li>
      <li><router-link 
       tag="a" 
     :to="{name:'Skills'}">skills</router-link></li>
      <li><router-link
       tag="a" 
     :to="{name:'about'}">About me</router-link></li>
      <li><router-link 
       tag="a" 
     :to="{name:'Home'}">Home</router-link></li>
    </ul>
  </div>
</nav>
<div>
  <transition name="slide">
    <router-view/>
  </transition>
  </div>
  </div>
</template>
<script>
import Home from '../src/components/Home.vue';
export default {
  components:{
    appHome:Home
  }
}
</script>


<style>
.container-fluid{
  display: flex;
  max-width: 100%;
  background-color: rgb(4, 68, 110);
  margin-bottom:0;
  padding-bottom: 10px;
  padding-top: 10px;
  
}
.navbar-brand{
  position: relative;
  top:-3px;
  font-size:50px;
}
.navbar{
  margin-bottom:0;
  padding:0;
}
.navbar-default{
  padding:0;
}
.navbar-nav  {
  margin-left: 1000px;
  margin-bottom: 0;
  display:inline-block;

}
.navbar-nav a{
  margin :10px;
  border:15px round green;
}
a:link {
  color: red;
}

/* visited link */
a:visited {
  color: green;
}

/* mouse over link */
a:hover {
  color: hotpink;
}

/* selected link */
a:active {
  color: blue;
}

li{
  float:right;
}
  .fade-enter{
        opacity:0;
    }
    .fade-enter-active{
        transition: opacity 1s;
    }
    .fade-leave {
        /* opacity : 1s*/
    }
    .fade-leave-active{
        transition: opacity 1s;
        opacity: 0;
    }
     .slide-enter{
      opacity: 0;
    }
    .slide-enter-active{
        animation: slide-in 2s ease-out forwards;
        transition: .5s;
    }
    .slide-leave{
    }
    .slide-leave-active{
        animation: slide-out 1s ease-out forwards;
        transition: opacity 1s;
        opacity:0;
    }
    @keyframes slide-in{
        from{
            transform: translateY(50px);
        }
        to{
            transform: translateY(0);
        }
    }
     @keyframes slide-out{
        from{
            transform:translateY(0);
        }
        to{
            transform: translateY(20px);
        }
    }

</style>
