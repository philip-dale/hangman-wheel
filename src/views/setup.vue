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
      <label class="labelClass">Select Current Player</label>
      <b-form-spinbutton
        id="currentPlayer"
        v-model="currentPlayer"
        min="0"
        :max="noPlayers-1"
        inline
      ></b-form-spinbutton>
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
    <playerItemEdit v-for="n in noPlayers" :key='n+1000' :itemIndex='n-1'></playerItemEdit>
    <div class="inputDiv">
      <label class="labelClass">Select Number Wheel Items </label>
      <b-form-spinbutton
        v-model="noWheelItems"
        min="1"
        inline
      ></b-form-spinbutton>
    </div>
    <div>Set value of -1 for LOSE A TURN, -2 for BANKRUPT</div>
    <wheelItemEdit v-for="n in noWheelItems" :key='n' :itemIndex='n-1'></wheelItemEdit>
    <b-button
      class="settingButton"
      variant="primary"
      @click="startNewGame()"
      >Start New Game</b-button
    >
    <b-button
      class="settingButton"
      variant="primary"
      @click="resetSettings()"
      >Reset Settings</b-button
    >
    <b-button
      class="settingButton"
      variant="primary"
      @click="saveSettings()"
      >Save Settings</b-button
    >
    <b-button
      class="settingButton"
      variant="primary"
      @click="deleteSaveSettings()"
      >Delete Save Settings</b-button
    >
  </div>
</template>

<script>
import wheelItemEdit from '../components/wheelItemEdit.vue';
import playerItemEdit from '../components/playerItemEdit.vue';

export default {
  name: "Setup",
  components: {
    wheelItemEdit,
    playerItemEdit
  },
  computed: {
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
        this.$store.commit("pointsForWin", parseInt(newValue));
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
    currentPlayer: {
      get: function () {
        return this.$store.getters.currentPlayer;
      },
      set: function (newValue) {
        this.$store.commit("currentPlayer", newValue);
      }
    },
    noWheelItems: {
      get: function () {
        return this.$store.getters.noWheelItems;
      },
      set: function (newValue) {
        this.$store.commit("noWheelItems", parseInt(newValue));
      },
    },
  },
  methods:{
    saveSettings() {
      this.$store.dispatch("saveSettings")
    },
    resetSettings() {
      this.$store.dispatch("setDefaultSettings")
    },
    deleteSaveSettings() {
      this.$store.dispatch("clearSave")
    },
    startNewGame() {
      this.$store.dispatch("startNewGame")
    }
  }
};
</script>
<style scoped>
.setup {
  align-items: left;
}

.settingButton,
.labelClass {
  margin: 5px;
}

.inputDiv {
  display: flex;
  flex-direction: row;
  width: fit-content;
  margin: 0;
}

.inputBox {
  margin: 5px;
  width: 25%;
}

.spacer {
  height: 50px;
}

</style>