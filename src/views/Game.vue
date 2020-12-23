<template>
  <div class="wrapper">
       <div class="game" id="game">

    <div class="monster-and-player-wrapper">
      <div class="monster-wrapper">
        <section id="monster" class="container monster-box">
          <h2>Chimera: {{ monsterHealth }}</h2>
          <div class="healthbar">
            <div class="healthbar__value" v-bind:style="monsterBarStyles"></div>
          </div>
          <div class="img-wrapper">
            <img style="width: 330px; height: 260px;" src="../assets/Mantikora.png" alt="">
          </div>
        </section>
      </div>
      <div class="player-wrapper">
        <section id="player" class="container">
          <h2>Player: {{playerHealth}}</h2>
          <div class="healthbar">
            <div class="healthbar__value" v-bind:style="playerBarStyles"></div>
          </div>
          <div class="manabar">
            <div class="manabar__value" v-bind:style="manaBarStyles"></div>
          </div>
          <div class="img-wrapper">
            <img style="width: 330px; height: 246px;" src="../assets/Mage.png" alt="">
          </div>
        </section>
      </div>
    </div>

    <div class="battle-log-and-controls">
      <div class="controls">
        <section v-if="winner" class="container">
          <h2>Game Over</h2>
          <h3 v-if="winner === 'monster'">You lost!</h3>
          <h3 v-else-if="winner==='player'">You won!</h3>
          <h3 v-else-if="winner==='draw'">It`s a draw</h3>
          <h3 v-else-if="winner==='playerFlee'">Roll: {{escapeRollValue}}. You have escaped succefuly, but it wont get
            easier next time</h3>
          <h3 v-else-if="winner==='playerDied'">Roll: {{escapeRollValue}}. You died, Moster cought you right before you
            were about to escape the dungeon.</h3>
          <button @click="startGame"> New Game</button>
        </section>

        <section v-else id="controls">
          <button v-bind:disabled="disableButton" @click="attackMonster()">ATTACK</button>
          <button :disabled="disableSpecialAttack" v-on:click="specialAttackMonster()">Strike</button>
          <button :disabled="diableHeal || disableButton" @click="healPlayer()">HEAL</button>
          <button v-on:click="flee" v-bind:disabled="disableButton">FLEE</button>
        </section>
      </div>

      <div>
        <section id="log" class="container battle-log">
          <h2>Battle Log</h2>
          <ul>
            <li v-for="logMessage in logMessages" :key="logMessage">
              <span
                :class="{'log--player': logMessage.actionBy === 'player', 'log--monster' : logMessage.actionBy === 'monster'}">{{ logMessage.actionBy === 'player' ? 'Player' : 'Monster'}}</span>
              <span v-if="logMessage.actionType === 'heal' "> Heals himself for
                <span class="log--heal">{{ logMessage.actionValue}}</span>
              </span>
              <span v-else-if="logMessage.actionValue === 'fail' "> attempt to escape
                  <span class="log--player">{{ logMessage.actionValue}}</span>
              </span>
              <span v-else-if="logMessage.actionValue === 'success' "> attempt to escape
                  <span class="log--monster">{{ logMessage.actionValue}}</span>
              </span>
              <span v-else>
                attacks and deals
                <span class="log--damage">{{ logMessage.actionValue }}</span>
              </span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  </div>
  </div>
</template>

<script>

function getRandomValue(max, min) {
    return Math.floor(Math.random() * (max - min)) + min;
}

export default {
  mounted() {
    if (!this.$store.getters.user.loggedIn) {
      this.$router.replace({ name: 'Home' });
    }
  },
     data() {
        return {
            monsterHealth: 100,
            playerHealth: 100,
            playerMana: 100,
            currentRound: 0,
            escapeRollValue: null,
            winner: null,
            logMessages: []
        }
    },
    methods: {
        startGame() {
            this.currentRound = 0;
            this.playerMana = 100;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.winner = null;
            this.logMessages = [];
        },
        attackMonster() {
            this.currentRound++;
            const attackValue = getRandomValue(12, 5);
            this.monsterHealth = this.monsterHealth - attackValue;
            this.addLogMessage('player','attack',attackValue)
            this.attackPlayer();
        },
        attackPlayer() {
            const attackValue = getRandomValue(15, 8);
            this.playerHealth -= attackValue;
            this.addLogMessage('monster','attack',attackValue)
            console.log(this.currentRound);
        },
        specialAttackMonster() {
            this.currentRound++;
            const attackValue = getRandomValue(25, 10);
            this.monsterHealth -= attackValue;
            this.addLogMessage('player','heavy strike',attackValue)
            
            this.attackPlayer();
        },
        healPlayer() {
            const spellCost = 20;
            const healValue = getRandomValue(20, 8);

            this.currentRound++;
            this.playerMana -= spellCost;
            if (this.playerHealth + healValue > 100) {
                this.playerHealth = 100;
            }
            else{
                this.playerHealth += healValue;
            }
            this.addLogMessage('player','heal',healValue)
            // this.addLogMessage('player','mana',spellCost)

            this.attackPlayer();
        },
        flee() {
            const rollEscape = getRandomValue(100, 1);
            this.escapeRollValue = rollEscape;
            if (rollEscape <= 30) {
                this.winner = 'playerDied'
                this.playerHealth = 0;
                this.currentRound = 0;
                this.addLogMessage('player','flee','fail')
            }
            else {
                this.winner = 'playerFlee';
                this.currentRound = 0;
                this.addLogMessage('player','flee','success')

            }
        },
        addLogMessage(who, what, value) {
            //   if (this.logMessages.length >= 10) {
            //     this.logMessages.shift();
            //     this.logMessages.shift();
            // }
            // else {
            this.logMessages.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value
            });
        //   }
        },
        
    },
    computed: {
        monsterBarStyles() {
            if (this.monsterHealth < 0) {
                return { width: 0 + '%' };
            }
            else {
                return { width: this.monsterHealth + '%' };
            }
        },
        playerBarStyles() {
            if (this.playerHealth < 0) {
                return { width: 0 + '%' };
            }
            else {
                return { width: this.playerHealth + '%' };
            }
        },
        manaBarStyles() {
            return { width: this.playerMana + '%' };

        },
        disableSpecialAttack() {
            if (((this.playerHealth <= 0) || (this.monsterHealth <= 0))) {
                return true;
            }
            else if (this.winner === 'playerFlee' || this.winner === 'playerDied') {
                return true;
            }
            else {
                return this.currentRound % 3 !== 0;
            }
        },
        diableHeal() {
            if (this.playerHealth >= 100){
                return true;
            }
            else   {
                return this.playerMana === 0;
            }
        },
        testfun() {
            return this.playerHealth === 0;
        },
        // disable Button when the game is over
        disableButton() {
            if (this.winner === 'playerFlee' || this.winner === 'playerDied') {
                return true;
            }
            else if ((this.playerHealth <= 0) || (this.monsterHealth <= 0)) {
                return true;
            }
            else{
                return false;
            }
        }
    },
    watch: {
        playerHealth(value) {
            // A draw scenario
            if (value <= 0 && this.monsterHealth <= 0) {
                this.winner = 'draw';
            }
            // PLayer Lost
            else if (value <= 0 && this.winner !== 'playerDied') {
                this.winner = 'monster';
            }
        },
        monsterHealth(value) {
            // Draw
            if (value <= 0 && this.playerHealth <= 0) {
                this.winner = 'draw';

            }
            // Monster Lost
            else if (value <= 0) {
                this.winner = 'player';

            }
        }

    },

};
</script>

<style scoped>
 .wrapper {
     height: fit-content;
      margin: 0;
  padding: 0;
  /* background: url('../assets/Dunegon.jpg') no-repeat center center fixed; */
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-repeat: no-repeat;
  scroll-behavior: smooth;
 }

section {
  width: 350px;
  max-width: 40rem;
  margin: auto;
  background-color: #243b55;
  /* background: url('assets/Bricks-white.jpg')no-repeat center center ; */
}

span{
  font-weight: bold;
  font-size: 18px;
}
.battle-log{
  height: 180px;
  max-height: 210px;
  overflow: hidden;
}
.monster-and-player-wrapper{
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.monster-wrapper{
  margin-right: 30px;
}

.battle-log-and-controls{
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.controls{
  margin-right: 30px;
}

.healthbar__value {
  background-color: #00a876;
  width: 100%;
  height: 100%;
}
.healthbar {
  width: 100%;
  height: 40px;
  border: 1px solid #575757;
  margin-bottom: 5px;
  background: #fde5e5;
}
.manabar {
  width: 100%;
  height: 40px;
  border: 1px solid #575757;
  margin-bottom: 5px;
  background: #fde5e5;
}
.manabar__value {
  background-color: blue;
  width: 100%;
  height: 100%;
}

.container {
  text-align: center;
  color: antiquewhite;
  padding: 0.5rem;
  margin: 1rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
}

#player h2 {
  margin: 0.25rem;
}

#controls {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  border-radius: 12px;

}

button {
  font: inherit;
  border: 1px solid #88005b;
  background-color: #88005b;
  color: white;
  padding: 1rem 2rem;
  border-radius: 12px;
  margin: 1rem;
  width: 140px;
  cursor: pointer;
  font-size: 13px;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

button:focus {
  outline: none;
}

button:hover,
button:active {
  background-color: #af0a78;
  border-color: #af0a78;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.26);
}

button:disabled {
  background-color: #ccc;
  border-color: #ccc;
  box-shadow: none;
  color: #3f3f3f;
  cursor: not-allowed;
}

#log ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

#log li {
  margin: 0.2rem 0;
}

.log--player {
  color: #7700ff;
}

.log--monster {
  color: #af0a78;
}

.log--damage {
  color: red;
}

.log--heal {
  color: green;
}

.log--mana {
  color: blue;
}

@media screen and (max-width: 750px){
 
  .monster-and-player-wrapper{
    flex-direction: column;
  }
  .monster-wrapper{
    margin-right: 0px;
  }
  .battle-log-and-controls{
    flex-direction: column;
  }
  .controls{
    margin-right: 0px;
  }
  
}
</style>