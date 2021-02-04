<template>
  <div>
    <div class="playGame">
      <div class="game-elements">
          <div class="gameDiv">
              <gameBoard></gameBoard>
          </div>
          <div class="wheelDiv">
              <wheel></wheel>
          </div>
      </div>
      <div class="player-elements">
          <div class="controlsDiv">
              <controls></controls>
          </div>
          <div class="playersDiv">
              <players></players>
          </div>
      </div>
      
    </div>
    <b-alert v-model="showBankruptAlert" variant="danger" dismissible>
      Bankrupt!
    </b-alert>
    <b-alert v-model="showLoseTurnAlert" variant="danger" dismissible>
      LOSE A TURN!
    </b-alert>
    <b-alert v-model="showNotFoundAlert" variant="danger" dismissible>
      Not Found, Next Player
    </b-alert>
    <b-alert v-model="showWinAlert" variant="success" dismissible>
      You Win
    </b-alert>
    <b-alert v-model="showWheelValue" variant="success" dismissible>
      {{wheelText}}
    </b-alert>
  </div>
</template>

<script>
import players from '../components/players.vue'
import controls from '../components/controls.vue'
import gameBoard from '../components/gameBoard.vue'
import wheel from '../components/wheel.vue'

export default {
  components: {
    players,
    controls,
    gameBoard,
    wheel
  },
  name: 'playGame',
  computed:{
    showBankruptAlert() {
      return this.$store.state.showBankruptAlert
    },
    showLoseTurnAlert() {
      return this.$store.state.showLoseTurnAlert
    },
    showWinAlert() {
      return this.$store.state.showWinAlert
    },
    showWheelValue() {
      return this.$store.state.showWheelValue
    },
    showNotFoundAlert(){
      return this.$store.state.showNotFoundAlert
    },
    wheelText() {
      return this.$store.getters.wheelText
    },
  },
}

</script>

<style>
.playGame {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 95vw;
  height: 85vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-left: 5px;
}

.game-elements{
    width:70%;
    height: 100%;
    display: inline-block;
    flex-direction: column;
}

.player-elements {
    width:30%;
    height: 100%;
    display: inline-block;
    flex-direction: column;
}

.playersDiv {
    height: 60%;
    width:100%;
}
.controlsDiv {
    min-height: 40%;
    width:100%;
}

.gameDiv {
    height: 60%;
    width:100%;
}

.wheelDiv {
    height: 40%;
    width:100%;
    overflow: hidden;
}
</style>
