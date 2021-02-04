<template>
  <div class="letters-row">
      <template v-for="(l, index) in letters">
        <div class="letterClass" v-if="l.value == ' '" :key="index"></div>
        <div class="letterClass" v-else-if="l.value == '#'" :key="index"></div>
        <div class="letterClass letterClassGap" v-else-if="l.value == ''" :key="index"></div>
        <div class="letterClass letterClassHidden" v-else-if="l.hidden" :key="index"></div>
        <div class="letterClass letterClassFound" v-else :key="index">{{l.value}}</div>
      </template>
  </div>
</template>

<script>
export default {
  name: "lettersRow",
  props: {
    letters: Array,
  },
};
</script>

<style scopped>
.letters-row {
  width:100%;
  display: flex;
  flex-direction: row;
}

.letterClass{
  width: 68px;
  height: 80px;
  border: solid black 1px;
  background-color: #17b4db;
  color: black;
  font-size: 3rem;
  font-weight: bolder;

  display: flex;
  justify-content: center;
  align-items: center;
}

.letterClassGap{
    background-color: #3b745c;
}

.letterClassHidden{
    background-color: white;
}

.letterClassFound{
    background-color: white;
}

</style>