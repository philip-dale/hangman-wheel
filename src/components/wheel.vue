<template>
  <div class="wheel-area" ref='wheelArea'>
    <div class="pointerContainer"><div class="pointer"></div></div>
    <div class="wheelContainer">
      <li class='slice' v-for="(item, index) in wheelSetup" :key="index" :style="'transform: rotate(' + ((index - wheelIndex - 0.5)*rotateDeg).toString() + 'deg) skewY(' + skewYDeg.toString() + 'deg); background:' +item.colour">
        <div class='sliceText' :style="'transform: skewY(' + (skewYDeg * -1).toString() + 'deg);'">{{item.text}}</div>
      </li>
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
    },
    rotateDeg() {
      return 360/this.$store.state.wheelSetup.length
    },
    skewYDeg() {
      return (360/this.$store.state.wheelSetup.length) + 90
    },
    
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
  align-items: center;
}

.wheelContainer {
  overflow:hidden;
  position: relative;
  margin: 1em auto;
  border: dashed 1px;
  padding: 0;
  width: 45em; height: 45em;
  border-radius: 50%;
  list-style: none;
}

.slice {
  overflow: hidden;
  position: absolute;
  top: 0; right: 0;
  width: 50%; height: 50%;
  transform-origin: 0% 100%;
  display: flex;
  justify-content: left;
  align-items:center;
  font-weight: bolder;
}

.sliceText {
  writing-mode: vertical-rl;
  text-orientation: upright;
}

.pointer {
  width: 0; 
  height: 0; 
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  
  border-top: 20px solid black;
  margin: 0 auto;
}

.pointerContainer {
  min-width:45em;
}
</style>
