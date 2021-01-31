<template>
  <div>
    <div class="playerInfo" v-for="(p, index) in players" :key="index">
      <playerInfo :player='p' :playerIndex='index'></playerInfo>
    </div>
  </div>
</template>

<script>
import playerInfo from './playerInfo'

export default {
  name: "player-area",
  components:{
    playerInfo
  },
  computed: {
    players() {
      return this.$store.state.players;
    },
  },
};
</script>

<style scopped>
.player-area {
  width: 100%;
}
</style>
