<template>
<div>
<nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <h1 class="navbar-brand" >FRANK</h1>
    </div>
    <ul class="nav navbar-nav ">
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
     :to="{name:'contact'}">Contact me</router-link></li>
    </ul>
  </div>
</nav>
<div>
  <div class="container-home">
      <div class="text">
        <h1>
        <span style="color:red">H</span>
         <span m-left>i</span>
          <span m-left>,</span>
          <br>
          <span>I</span>
           <span m-left>'</span>
           <span m-left>m</span>
           <span class="name">F</span>
           <span class=" m-left name">r</span>
            <span class=" m-left name">a</span>
             <span class=" m-left name">n</span>
              <span class=" m-left name">k</span>
             <span class="m-left">,</span>
             <br>
             <span>W</span>
             <span class="m-left">e</span>
              <span class="m-left">b</span>
              <span>D</span>
              <span class=" m-left name">e</span>
              <span class=" m-left name">v</span>
              <span class=" m-left name">e</span>
              <span class=" m-left name">l</span>
              <span class=" m-left name">o</span>
              <span class=" m-left name">p</span>
              <span class=" m-left name">e</span>
              <span class=" m-left name">r</span>
              </h1>
              <p>CSS/JAVASCRIPT/VUE/HTML</p>
              




      </div>
    </div> 
</div>

</div>







  
</template>
<style scoped>
.container-home {
  margin-top: 0;
  background-image: 
  linear-gradient(to right, rgba(111, 126, 213, 0.8), rgba(105, 20, 202, 0.8)),
  url(../assets/portfolio.jpg) ;
  background-repeat: no-repeat;
  height: 87.6vh;
  background-position: center;
  background-size: 100%;
  filter: blur(110);
 
}
.text{
  margin-top: 0;
}
.container-fluid{
  display: flex;
  max-width: 100%;
  background-color: rgb(4, 68, 110);
  margin-bottom:0;
  
}
.navbar-brand{
  position: relative;
  top:-3px;
}
.navbar{
  margin-bottom:0;
  padding:0;
}
.navbar-nav {
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
.navbar-brand{
  font-size: 50px;
}
li{
  float:right;
}
.text {
  position: absolute;
  top:300px;
  left: 400px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

}
.text h1{
  font-size:3rem;
  cursor:context-menu;
}
.text span{
  display:inline-block;
  font-size:60px;
}
span:hover {
  color:#48CFAD;
}
span:name{
  color:#ED5565;
}
span.m-left{
  margin-left:4px;
}
.text p{
  font-size:30px;
}



</style>