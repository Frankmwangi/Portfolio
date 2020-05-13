<template>
    <div class="work-page">
       <div class="card-deck" >
  <div class="card">
      <a href="https://udemy-modern-javascript-d9d2e.firebaseapp.com/">
    <img src="../assets/chatroom.png" class="card-img-top" alt="...">
    </a>
    <div class="card-body">
      <h5 class="card-title">Chatroom</h5>
     </div>
  </div>
  <div class="card">
      <a href="https://gaming-app-195d8.firebaseapp.com/">
    <img src="../assets/Gameapp.png" class="card-img-top" alt="...">
    </a>
    <div class="card-body">
      <h5 class="card-title">Game app</h5>
     </div>
  </div>
  <div class="card">
           <a href="https://to-do-list-31fcb.firebaseapp.com/">
    <img src="../assets/Todoapp.png" class="card-img-top" alt="...">
    </a>
    <div class="card-body">
      <h5 class="card-title">Todoapp</h5>
   </div>
  </div>
   <div class="card">
        <a href=" https://weather-app-4947d.firebaseapp.com/">
<img src="../assets/Weatherapp.png"  class="card-img-top" alt="...">
</a>
    <div class="card-body">
      <h5 class="card-title">Weatherapp</h5>
   </div>
  </div>
</div>
    </div>
</template>
<style>
.work-page{
     background-image: 
  linear-gradient(to right, rgba(111, 126, 213, 0.8), rgba(105, 20, 202, 0.8)),
  url(../assets/mywork.jpg) ;
   height: 91.6vh;
   background-position: center;
    background-size: 100%;
    filter: blur(110);
}
.card-deck{
max-width: 100%;
max-height: 100%;
padding-top:80px;

}
.card {
    transition:all 0.3s ease;
}
@-webkit-keyframes card {
    15% {
        -webkit-transform: translateY(5px);
        transform: translateY(5px);
    }
    30% {
        -webkit-transform: translateY(-5px);
        transform: translateY(-5px);
    }
    50% {
        -webkit-transform: translateY(3px);
        transform: translateY(3px);
    }
    65% {
        -webkit-transform: translateY(-3px);
        transform: translateY(-3px);
    }
    80% {
        -webkit-transform: translateY(2px);
        transform: translateY(2px);
    }
    100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
    }
}
@keyframes card {
    15% {
        -webkit-transform: translateY(5px);
        transform: translateY(5px);
    }
    30% {
        -webkit-transform: translateY(-5px);
        transform: translateY(-5px);
    }
    50% {
        -webkit-transform: translateY(3px);
        transform: translateY(3px);
    }
    65% {
        -webkit-transform: translateY(-3px);
        transform: translateY(-3px);
    }
    80% {
        -webkit-transform: translateY(2px);
        transform: translateY(2px);
    }
    100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
    }
}
.card:hover
{
    -webkit-animation: swing 1s ease;
    animation: swing 1s ease;
    -webkit-animation-iteration-count: 1;
    animation-iteration-count: 1;
}
</style>