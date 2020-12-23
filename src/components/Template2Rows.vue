<template>
  <div class="about">

    <div class="row1">
      <div class="row1-container1">
        <h1>What this Website is all about?</h1>
        <p>The porpuse of this website is to show a working Vue.js aplication which holds many features 
          that are used in modern world of web development, such as simple login and registration system, 
          which is an user authentication, routing, desktop and mobile view, responsivnes of HTML elements
           and simple projects that I've crated along with this website. 
       </p>
      </div>
      <div class="row1-container2">
        <img class="screen-night-img" src="../assets/gif2.gif" alt="">
      </div>
    </div>

    <div class="row2">
      <div class="row1-container2">
        <img class="screen-night-img2" src="../assets/gif5.gif" alt="">
      </div>
      <div class="row1-container1">
        <h1>How to see "Projects"?</h1>
            <br>
        <hr>
        <p>
            > Register a new account (Click "Register")
            <br>
            > Login by usisng your new account
            <br>
            > Once you are logged in a Projects card should appear in the navbar. Click on it!
            <br>

            > Enjoy and test out hidden conent for Logged ussers, You can now Play game or see other apps! :D
       </p>
      </div>
    </div>

  </div>
  
</template>
<script>

import Navbar from '@/components/Navbar.vue'

export default {
  name: 'Home',
  components: {
  }
}
</script>

<style scoped>
/* .about{
    background: url('../../dist/img/cool-background.png') no-repeat center center fixed;
 -webkit-background-size: cover;
 -moz-background-size: cover;
 -o-background-size: cover;
 background-size: cover;
 background-repeat: no-repeat;
 scroll-behavior: smooth;
} */

  .row1{
    display: flex;
    flex-direction: row;
    width: 100%;
    padding-top: 100px;
    margin-left: auto;
    margin-right: auto;
    max-width: 1224px;
    justify-content: space-evenly;
  }

  .row1-container1{
    width: 520px;
    background: rgb(20,30,48);
    background: linear-gradient(356deg, rgba(20,30,48,0.9) 0%, rgba(36,59,85,0.9) 100%);
    color: blanchedalmond;
    padding: 20px;
    padding-top: 40px;
    border-radius: 15px;
    min-height: auto;
  }
  
  .row1-container1 p{
    font-family: Georgia, 'Times New Roman', Times, serif;
    padding-top: 40px;
    font-size: 20px;
    letter-spacing: 1px;
  }

  .screen-night-img{
    /* width: 100%; */
    width: 500px;
    height: 340px;
    border-radius: 15px;
  }

  .row2{
    display: flex;
    flex-direction: row;
        width: 100%;
    margin-top: 100px;
    padding-bottom: 100px;
    margin-left: auto;
    margin-right: auto;
    /* height: 500px; */
    justify-content: space-evenly;
max-width: 1224px;
  }

  .screen-night-img2{
   width: 500px;
    height: 340px;
    border-radius: 15px;
  }
  
@media screen and (max-width:1024px){
   .row1-container1{
     margin-top: 30px;
    width: 400px;
  }
  .row1-container1 p{
    font-family: Georgia, 'Times New Roman', Times, serif;
    padding-top: 40px;
    font-size: 17px;
  }

  .screen-night-img{
    margin-top: 50px;
    width: 360px;
    height: 260px;
  }
  h1{
    font-size: 22px;
  }
  .row2{
    margin-top: 0;
  }
.screen-night-img2{
    margin-top: 50px;
    width: 360px;
    height: 260px;
  }
}
@media screen and (max-width:768px){
  .row1{
    flex-direction: column;
    justify-content: center;
  }
  .row2{
     flex-direction: column;
    justify-content: center;
  }
  .row1-container1{
    margin: auto;
    width: 100%;
    max-width: 400px;
  }
  .screen-night-img2{
    width: 320px;
    margin-bottom: 20px;
  }
  .screen-night-img{
    width: 320px;
  }
   h1{
    font-size:20px;
  }
}
</style>