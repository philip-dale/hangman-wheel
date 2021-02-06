<template>
  <div>
    <div class="control-message">{{ phaseText }}</div>
    <b-button
      class="ctrlBtn"
      v-if="gamePhase == phaseEnum.play || gamePhase == phaseEnum.firstGo"
      variant="primary"
      @click="spin()"
      >Spin</b-button
    >
    <b-button class="ctrlBtn" v-else variant="primary" :disabled="true"
      >Spin</b-button
    >
    <b-button
      class="ctrlBtn"
      v-if="((gamePhase == phaseEnum.play || gamePhase == phaseEnum.firstGo) && playerRoundScore >= vowelCost) && consRemaining"
      variant="primary"
      @click="$bvModal.show('buy-vowel-modal')"
      >Buy Vowel</b-button
    >
    <b-button class="ctrlBtn" v-else variant="primary" :disabled="true"
      >Buy Vowel</b-button
    >
    <b-button
      class="ctrlBtn"
      v-if="gamePhase == phaseEnum.play || gamePhase == phaseEnum.firstGo"
      variant="primary"
      @click="$bvModal.show('guess-answer-modal')"
      >Guess Answer</b-button
    >
    <b-button class="ctrlBtn" v-else variant="primary" :disabled="true"
      >Guess Answer</b-button
    >
    <b-button
      class="ctrlBtn"
      v-if="gamePhase == phaseEnum.play"
      variant="primary"
      @click="skipTurn()"
      >Skip Turn</b-button
    >
    <b-button class="ctrlBtn" v-else variant="primary" :disabled="true"
      >Skip Turn</b-button
    >
    <b-button
      class="ctrlBtn"
      v-if="gamePhase == phaseEnum.init"
      variant="primary"
      @click="startGame()"
      >Start Game</b-button
    >
    <b-button
      class="ctrlBtn"
      v-else-if="gamePhase != phaseEnum.reveal"
      variant="primary"
      @click="$bvModal.show('skip-round-modal')"
      >Skip Level</b-button
    >
    <b-button class="ctrlBtn" v-else variant="primary" @click="nextLevel()"
      >Next Level</b-button
    >

    <b-modal id="guess-answer-modal" hide-footer>
      <template #modal-title> What is your Guess? </template>
      <div class="d-block text-center">
        <b-form-input
          class="guessInput"
          v-model="currentGuess"
          placeholder="Enter Guess"
          type="text"
        ></b-form-input>
      </div>
      <b-button class="mt-3" block @click="guessAnswer()">Guess</b-button>
      <b-button class="mt-3" block @click="$bvModal.hide('guess-answer-modal')"
        >Cancel</b-button
      >
    </b-modal>

    <b-modal id="buy-vowel-modal" hide-footer>
      <template #modal-title> Spend £{{vowelCost}} 0n a Vowel? </template>
      <b-button class="mt-3" block @click="buyVowel()">Buy Vowel</b-button>
      <b-button class="mt-3" block @click="$bvModal.hide('buy-vowel-modal')"
        >Cancel</b-button
      >
    </b-modal>

    <b-modal id="skip-round-modal" hide-footer>
      <template #modal-title> Skip Round </template>
      <div class="d-block text-center">
        Skip Round, All Scores will be lost!
      </div>
      <b-button class="mt-3" block @click="skipGame()">Skip Round</b-button>
      <b-button class="mt-3" block @click="$bvModal.hide('skip-round-modal')"
        >Cancel</b-button
      >
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "controlArea",
  data() {
    return {
      currentGuess: "",
    };
  },
  computed: {
    phaseText() {
      return this.$store.getters.phaseText;
    },
    gamePhase() {
      return this.$store.getters.gamePhase;
    },
    playerRoundScore() {
      return this.$store.getters.playerRoundScore;
    },
    hiddenPuzzleText() {
      return this.$store.getters.hiddenPuzzleText;
    },
    phaseEnum() {
      return this.$store.getters.phaseEnum
    },
    vowelCost() {
      return this.$store.getters.vowelCost
    },
    consRemaining() {
      return this.$store.getters.consRemaining
    }
  },
  watch: {
    hiddenPuzzleText: function (value) {
      this.currentGuess = value;
    },
  },
  methods: {
    skipGame() {
      this.$bvModal.hide("skip-round-modal");
      this.$store.dispatch("setPhase", "skipGame");
    },
    nextLevel() {
      this.$store.dispatch("setPhase", "nextLevel");
    },
    startGame() {
      this.$store.dispatch("setPhase", "startGame");
    },
    buyVowel() {
      this.$bvModal.hide("buy-vowel-modal");
      this.$store.dispatch("buyVowel");
    },
    guessAnswer() {
      this.$bvModal.hide("guess-answer-modal");
      let guess = this.currentGuess;
      this.$store.dispatch("guessAnswer", guess);
    },
    skipTurn() {
      this.$store.dispatch("skipTurn");
    },
    spin() {
      this.$store.dispatch("wheelSpinStart");
    },
  },
};
</script>

<style scopped>
.control-area {
  width: 100%;
}

.ctrlBtn {
  width: 100%;
  margin: 5px;
  font-size: 1.2rem;
}

.control-message {
  font-size: 1.2rem;
  font-weight: bolder;
}
</style>
