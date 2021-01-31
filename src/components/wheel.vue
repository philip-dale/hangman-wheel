<template>
  <div class="wheel-area">
    <div class="wheel-items">
      <div class="wheel-item" v-for="(item, index) in wheelSetup" :key="index">
        <div v-if="wheelIndex == index" class="wheel-text-selected" >{{item.text}}</div>
        <div v-else class="wheel-text" :style="'background:'+item.colour" >{{item.text}}</div>
      </div>
    </div>
    
  </div>
</template>

<script>

export default {
  name: "wheelArea",
  data: () => {
    return {
      initTimeStep: 6,
      currentTimeStep: 6,
      steps: 0,
      interval: null
    }
  },
  computed:{
    wheelText() {
      return this.$store.getters.wheelText
    },
    gamePhase() {
      return this.$store.state.gamePhase
    },
    wheelSetup() {
      return this.$store.state.wheelSetup
    },
    wheelIndex() {
      return this.$store.state.currentWheelIndex
    },
    wheelSpinning() {
      return this.$store.state.wheelSpinning
    }
  },
  watch: {
    wheelSpinning: function (value) {
      if(value){
        this.currentTimeStep = this.initTimeStep
        this.steps = (this.wheelSetup.length*1) + (Math.floor(Math.random() * this.wheelSetup.length))
        this.interval = setInterval(this.wheelStep, this.currentTimeStep);
      }
    },
    gamePhase: function (value) {
      if(value != 4) {
        clearInterval(this.interval);
      }
    }
  },
  methods:{
    wheelStep() {
      this.steps--
      this.$store.dispatch('stepWheel')
      this.currentTimeStep += this.initTimeStep
      clearInterval(this.interval);
      this.interval = setInterval(this.wheelStep, this.currentTimeStep);
      if(this.steps <= 0) {
        clearInterval(this.interval);
        this.$store.dispatch('wheelSpinEnd')
      }
    }
  }
};
</script>

<style scopped>
.wheel-area {
  width: 100%;
  height: 100%;
}

.wheel-items {
  display: flex;
  flex-direction: row;
  height: 100%;
}

.wheel-item {
  flex-grow: 1;
  height: 100%;
  /* margin: 5px; */
  writing-mode: vertical-rl;
  text-orientation: upright;
  
  display: flex;
  justify-content: center;
  align-items: center;
  border-color: black;
  border-width:thin;
  border-style: solid;
}

.wheel-text {
  width:100%;
  height:100%;
  color:black;
  /* background: turquoise; */

  display: flex;
  justify-content: center;
  align-items: center;
  border-color: white;
  border-width:5px;
  border-style: solid;
  
}

.wheel-text-selected {
  width:100%;
  height:100%;
  color:black;
  border-color: crimson;
  border-width:5px;
  border-style: solid;
  background: rgb(224, 221, 64);

  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bolder;
  font-size: 1.0rem;
}

</style>
