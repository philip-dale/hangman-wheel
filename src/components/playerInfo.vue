<template>
  <div v-if="playerIndex == currentPlayer" class="playerInfo" v-bind:style="{ background:player.colour }">
    {{ player.name }} | Round £{{ player.roundScore }} | Total £{{ player.score }}
  </div>
  <div v-else class="playerInfo" v-bind:style="{ background:'gray' }">
    {{ player.name }} | Round £{{ player.roundScore }} | Total £{{ player.score }}
  </div>
</template>

<script>
export default {
  name: "player-info",
  props: {
    player: Object,
    playerIndex: Number
  },
  computed:{
      currentPlayer(){
          return this.$store.state.currentPlayer
      }
  }
};
</script>

<style scopped>
.playerInfo {
  width: 100%;
  color: white;
  border-radius:15px;
  font-size: 1.4rem;
  margin: 5px;
}
</style>