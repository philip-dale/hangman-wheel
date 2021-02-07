<template>
    <div class="wheelInfo">
      <label class="labelClass">Set Item Value</label>
      <b-form-input
        class="wheelValue"
        v-model="val"
        placeholder="Enter Wheel Text"
        type="text"
      ></b-form-input>
      <label class="labelClass">Set Item Colour</label>
      <b-form-input
        class="wheelColour"
        v-model="colour"
        type="color"
      ></b-form-input>
    </div>
</template>

<script>
export default {
    name:"wheelItemEdit",
    props: {
        itemIndex:Number
    },
    computed: {
      val:{
        get: function () {
            return this.$store.getters.wheelSetup[this.itemIndex].val;
        },
        set: function (newValue) {
            this.$store.commit("wheelVal", {index:this.itemIndex, value:parseInt(newValue)});
        },
      },
      colour:{
        get: function () {
            return this.$store.getters.wheelSetup[this.itemIndex].colour;
        },
        set: function (newValue) {
            this.$store.commit("wheelColour", {index:this.itemIndex, value:newValue});
        },
      }
    }
}
</script>

<style scoped>
.wheelInfo {
  display: flex;
  flex-direction: row;
  text-align: center;
}

.labelClass {
  margin: 5px;
}

.wheelValue,
.wheelColour {
  margin: 5px;
  width: 25%;
}
</style>