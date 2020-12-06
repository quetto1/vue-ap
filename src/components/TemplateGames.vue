<template>
  <div class="about">

    <div class="row1">
      <div class="row1-container1">
        <h1>Dungeon Adventure</h1>
            <br>
        <hr>
        <p> I made a fighting engine fully created in Vue.js, fight system is basen on rounds, i every single round the user has to choose, what he whats to do.
             The purpose of the game is to salin a Monster. You can Attack, use Special Attacks, Heal yourself or If you think you wont manage, you can always choose to flee.
             Play smart and you will defead a monster!
       </p>
      </div>
      <div class="row1-container2">
        <router-link to="/game">
        <img class="screen-night-img" src="../assets/gamegif.gif" alt="">
        </router-link>
      </div>
    </div>

    <div class="row2">
      
      <div class="row1-container1 row-container2">
        <h1>Date Picker </h1>
            <br>
        <hr>
        <p>
           Date Picker allows user to selected a certain date on the calendar and stores choosen date in array. User by clicking again on the same date can remove it from the array.
           Besieds that Calndar lights up all dates that are currently choosen (stored in array). Calndar allways opens on the current month. From this point in can be used for booking systems etc..
            This is defnitly one of my more advnaced app that I've created so far. Logic was written completly in raw java script code in order to be easli transfer to other JS framewokrs.
       </p>
      </div>
      <div class="row1-container2">
        <router-link to="/">
        <img class="screen-night-img2" src="../assets/calendargif.gif" alt="">
        </router-link>
      </div>
    </div>

  </div>
  
</template>
<script>


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
    /* border: solid black 2px; */
    /* height: 500px; */
    justify-content: center;
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
    margin-right: 100px;
  }
  .row1-container1 p{
    font-family: Georgia, 'Times New Roman', Times, serif;
    padding-top: 40px;
    font-size: 20px;
    letter-spacing: 1px;
  }
.row-container2{
  margin-right: 150px;
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
    justify-content: center;

  }

  .screen-night-img2{
   width: 400px;
    height: 340px;
    border-radius: 15px;
    margin-top: 50px;
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
  .row-container2{
  margin-right: 80px;
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
    margin-top: 20px;
  }
  .screen-night-img{
    width: 320px;
    margin-bottom: 20px;
  }
   h1{
    font-size:20px;
  }
}
</style>