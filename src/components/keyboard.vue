<template>
  <div class="keyboard-row">
      <template v-for="(l, index) in letters">
          <div class="keyboardletterClass letterUsed" v-if="!enabled" :key="index">{{l.value}}</div>
          <div class="keyboardletterClass letterUsed" v-else-if="l.used" :key="index">{{l.value}}</div>
          <div class="keyboardletterClass" v-else :key="index" @click="clicked(index)">{{l.value}}</div>
      </template>
  </div>
</template>

<script>
export default {
  name: "lettersRow",
  props: {
    letters: Array,
    enabled: Boolean,
    keyboardType: String,
  },
  methods:{
      clicked(index) {
          let keyboardType = this.keyboardType
          this.$store.dispatch('keyPressed', {index, keyboardType})
      }
  }
};
</script>

<style scopped>
.keyboard-row {
  display: flex;
  flex-direction: row;
}

.keyboardletterClass{
  width: 4.5%;
  height: 40px;
  border: solid black 1px;
  background-color: #cfd7db;
  color: #000000;
  font-size: 1.5rem;
  font-weight: bolder;
}

.letterUsed{
    color: #acb5b9;
}
</style>