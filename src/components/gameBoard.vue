<template>
  <div class="game-area">
    <div class="board-message">
      {{ puzzleId }}
      {{ currentPuzzleClue }}
    </div>
    <div class="game-board">
      <lettersRow :letters="puzzle[0]" />
      <lettersRow :letters="puzzle[1]" />
      <lettersRow :letters="puzzle[2]" />
      <lettersRow :letters="puzzle[3]" />
    </div>
    <div class="keyboards">
      <keyboard :enabled="true" :letters="consKeyboard" keyboardType="cons" />
      <keyboard
        :enabled="vowelEnabled"
        :letters="vowelKeyboard"
        keyboardType="vowel"
      />
    </div>
  </div>
</template>

<script>
import lettersRow from "./lettersRow.vue";
import keyboard from "./keyboard.vue";

export default {
  name: "gameArea",
  components: {
    lettersRow,
    keyboard,
  },
  computed: {
    consKeyboard() {
      return this.$store.getters.consKeyboard;
    },
    vowelKeyboard() {
      return this.$store.getters.vowelKeyboard;
    },
    puzzle() {
      return this.$store.getters.puzzle;
    },
    puzzleId() {
      if (this.$store.getters.gamePhase == this.phaseEnum.init) {
        return "?-?";
      }
      return this.$store.getters.puzzleId;
    },
    currentPuzzleClue() {
      if (this.$store.getters.gamePhase == this.phaseEnum.init) {
        return "?";
      }
      return this.$store.getters.currentPuzzleClue;
    },
    vowelEnabled() {
      return this.$store.getters.vowelEnabled;
    },
    phaseEnum() {
      return this.$store.getters.phaseEnum
    }
  },
};
</script>

<style scopped>
.game-area {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.game-board {
  width: 100%;
}

.board-message {
  font-size: 1.2rem;
  font-weight: bolder;
}

.keyboards {
  width: 100%;
}
</style>
