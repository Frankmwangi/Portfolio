<template>
    <div class="contact-page">
   <div class="row text-center">
  <div class="col-md-4">
      <div class="card">
          <h1>Linked in</h1>
          <a href="https://www.linkedin.com/in/frank-waweru-82664018b/" title="Linked-in">
           <i  class="fab fa-linkedin-in fa-7x" ></i></a>
      </div>
  </div>
  <div class="col-md-4">
      <div class="card">
          <h1>Github</h1>
           <a href="https://www.linkedin.com/in/frank-waweru-82664018b/" title="Linked-in">
           <i class="fab fa-github fa-7x"></i></a>
      
      </div></div>
  <div class="col-md-4">
      <div class="card">
          <h1>Email</h1>
            <a href="https://www.linkedin.com/in/frank-waweru-82664018b/" title="Linked-in">
           <i class="far fa-envelope-square fa-7x"></i></a>

      </div></div>
</div>
 
</div>
      
   
</template>
<style scoped>
.contact-page{
    position: relative;
     background-image: 
  linear-gradient(to right, rgba(111, 126, 213, 0.8), rgba(105, 20, 202, 0.8)),
  url(../assets/contact.jpg) ;
   height: 100vh;
   background-position: center;
    background-size: 100%;
    filter: blur(110);
}
.column {
  float: left;
  width: 33.33%;
}
.row{
  padding-top: 300px;
  width:100%;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
  
}
</style>