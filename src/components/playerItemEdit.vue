<template>
    <div class="editPlayerInfo">
      <label class="labelClass">Set Player Name</label>
      <b-form-input
        class="editPlayerName"
        v-model="name"
        placeholder="Enter Player Name"
        type="text"
      ></b-form-input>
      <label class="labelClass">Set Player Score</label>
      <b-form-input
        class="editPlayerScore"
        v-model="score"
        placeholder="Update Score"
        type="number"
      ></b-form-input>
      <label class="labelClass">Set Player Colour</label>
      <b-form-input
        class="editPlayerColour"
        v-model="colour"
        type="color"
      ></b-form-input>
    </div>
</template>

<script>
export default {
    name:"playerItemEdit",
    props: {
        itemIndex:Number
    },
    computed: {
      name:{
        get: function () {
            return this.$store.getters.players[this.itemIndex].name;
        },
        set: function (newValue) {
            this.$store.commit("playerName", {index:this.itemIndex, value:newValue});
        },
      },
      colour:{
        get: function () {
            return this.$store.getters.players[this.itemIndex].colour;
        },
        set: function (newValue) {
            this.$store.commit("playerColour", {index:this.itemIndex, value:newValue});
        },
      },
      score:{
        get: function () {
            return this.$store.getters.players[this.itemIndex].score;
        },
        set: function (newValue) {
            this.$store.commit("playerscore", {index:this.itemIndex, value:parseInt(newValue)});
        },
      }
    }
}
</script>

<style scoped>
.editPlayerInfo {
  display: flex;
  flex-direction: row;
  text-align: center;
}

.labelClass {
  margin: 5px;
}

.editPlayerScore,
.editPlayerName,
.editPlayerColour {
  margin: 5px;
  width: 25%;
}
</style>