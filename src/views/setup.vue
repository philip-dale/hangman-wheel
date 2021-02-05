<template>
  <div class="setup">
    <div class="spacer"></div>
    <div class="inputDiv">
      <label class="labelClass">Keep All Scores</label>
      <b-form-checkbox
        v-model="keepAllScores"
        name="check-button"
        size="lg"
        switch
      ></b-form-checkbox>
    </div>
    <div class="inputDiv">
      <label class="labelClass">Set Win Bonus</label>
      <b-form-input
        class="inputBox"
        v-model="pointsForWin"
        placeholder="Enter Bonus points"
        type="number"
      ></b-form-input>
    </div>
    <div class="inputDiv">
      <label class="labelClass">Set Vowel Cost</label>
      <b-form-input
        class="inputBox"
        v-model="vowelCost"
        placeholder="Enter Vowel Cost"
        type="number"
      ></b-form-input>
    </div>
    <div class="inputDiv">
      <label class="labelClass">Select Number of Players </label>
      <b-form-spinbutton
        id="selectPlayers"
        v-model="noPlayers"
        min="1"
        :max="maxPlayers"
        inline
      ></b-form-spinbutton>
    </div>
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
    pointsForWin: {
      get: function () {
        return this.$store.getters.pointsForWin;
      },
      set: function (newValue) {
        this.$store.commit("pointsForWin", newValue);
      },
    },
    vowelCost: {
      get: function () {
        return this.$store.getters.vowelCost;
      },
      set: function (newValue) {
        this.$store.commit("vowelCost", newValue);
      },
    },
  },
};
</script>
<style scoped>
.setup {
  align-items: left;
}

.labelClass {
  margin: 5px;
}

.inputDiv {
  display: flex;
  flex-direction: row;
  width: fit-content;
  margin: 0;
}

.setPlayerInfo {
  display: flex;
  flex-direction: row;
  text-align: center;
}

.inputBox,
.playerName,
.playerScore {
  margin: 5px;
  width: 25%;
}

.spacer {
  height: 50px;
}
</style>