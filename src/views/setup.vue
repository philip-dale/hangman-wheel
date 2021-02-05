<template>
  <div class="setup">
    <div class="spacer"></div>
    <label class="labelClass">Select Number of Players </label>
    <b-form-checkbox v-model="keepAllScores" name="check-button" switch>
      Keep All Scores <b>({{ keepAllScores }})</b>
    </b-form-checkbox>
    <b-form-spinbutton
      id="selectPlayers"
      v-model="noPlayers"
      min="1"
      :max="maxPlayers"
      inline
    ></b-form-spinbutton>
    <div class="setPlayerInfo" v-for="(p, index) in players" :key="index">
      <label class="labelClass">Set Player Name</label>
      <b-form-input
        class="playerName"
        v-model="p.name"
        placeholder="Enter Player Name"
        type="text"
      ></b-form-input>
      <label class="labelClass">Set Player Score</label>
      <b-form-input
        class="playerScore"
        v-model="p.score"
        placeholder="Update Score"
        type="number"
      ></b-form-input>
      <label class="labelClass">Set Player Colour</label>
      <b-form-input
        class="playerScore"
        v-model="p.colour"
        type="color"
      ></b-form-input>
    </div>
  </div>
</template>

<script>
export default {
  name: "Setup",
  computed: {
    players() {
      return this.$store.getters.players;
    },
    keepAllScores: {
      get: function () {
        return this.$store.getters.keepAllScores;
      },
      set: function (newValue) {
        this.$store.commit("keepAllScores", newValue);
      },
    },
    noPlayers: {
      get: function () {
        return this.$store.getters.noPlayers;
      },
      set: function (newValue) {
        this.$store.commit("updatePlayers", newValue);
      },
    },
    maxPlayers() {
      return this.$store.getters.maxPlayers;
    },
  },
};
</script>
<style scoped>
.labelClass {
  margin: 5px;
}

.setPlayerInfo {
  display: flex;
  flex-direction: row;
  text-align: center;
}

.playerName,
.playerScore {
  margin: 5px;
  width: 25%;
}

.spacer {
  height: 50px;
}
</style>