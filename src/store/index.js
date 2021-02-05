import Vue from 'vue'
import Vuex from 'vuex'
import gameBoard from "./modules/gameBoard"
import gameWheel from "./modules/gameWheel"
import gamePlayers from "./modules/gamePlayers"
import gameKeyboards from "./modules/gameKeyboards"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    gamePhase: -1, // 0 = spin/buy vowels/guess, 1 = select cons, 2 = select vowel, 3 = guess, 4 = spinning, 5 = reveal
    showBankruptAlert: false,
    showLoseTurnAlert: false,
    showWheelValue: false,
    showWinAlert: false,
    showNotFoundAlert: false
  },
  getters: {
    gamePhase(state) {
      return state.gamePhase
    },
    phaseText(state) {
      if (state.gamePhase == -1) {
        return "Welcome to Wheel Of Fortune"
      } else if (state.gamePhase == 0) {
        return "Spin The Wheel / Buy a Vowel (£250) / Guess"
      } else if (state.gamePhase == 1) {
        return "Select a Consonant"
      } else if (state.gamePhase == 2) {
        return "Select a Vowel"
      } else if (state.gamePhase == 3) {
        return "Make Your Guess"
      } else if (state.gamePhase == 4) {
        return "Spinning"
      } else if (state.gamePhase == 5) {
        return "Level Over"
      }
    }
  },
  mutations: {},
  actions: {
    setPhase(context, action) {
      if (action === 'spinDone') {
        context.state.showBankruptAlert = false
        context.state.showLoseTurnAlert = false
        context.state.showWinAlert = false
        context.state.showNotFoundAlert = false
        context.state.showWheelValue = true
        context.state.gamePhase = 1
      } else if (action === 'charFound') {
        context.state.gamePhase = 0
        context.state.showWheelValue = false
        context.state.showNotFoundAlert = false
      } else if (action === 'charNotFound') {
        context.state.showWheelValue = false
        context.state.showNotFoundAlert = true
        context.dispatch('nextPlayer')
        context.state.gamePhase = 0
      } else if (action === 'buyVowel') {
        context.state.gamePhase = 2
      } else if (action === 'guess') {
        context.state.gamePhase = 3
      } else if (action === 'missTurn') {
        context.state.showLoseTurnAlert = true
        context.dispatch('nextPlayer');
        context.state.gamePhase = 0
      } else if (action === 'skipTurn') {
        context.dispatch('nextPlayer');
        context.state.gamePhase = 0
      } else if (action === 'bankrupt') {
        context.state.showBankruptAlert = true
        context.dispatch('currentPlayerClearRoundScore')
        context.dispatch('nextPlayer');
        context.state.gamePhase = 0
      } else if (action === 'guessFail') {
        context.dispatch('nextPlayer');
        context.state.gamePhase = 0
      } else if (action === 'guessCorrect') {
        context.state.showWinAlert = true
        context.dispatch('setPlayerScores')
        context.dispatch('revealPuzzle')
        context.state.gamePhase = 5
      } else if (action === 'skipGame') {
        context.dispatch('revealPuzzle')
        context.dispatch('clearRoundScores')
        context.state.gamePhase = 5
      } else if (action === 'nextLevel') {
        context.dispatch('nextPuzzle')
        context.dispatch('initKeyboards')
        context.state.showWinAlert = false
        context.state.gamePhase = 0
      } else if (action === 'startGame') {
        context.dispatch('clearAllScores')
        context.dispatch('nextPuzzle')
        context.dispatch('initKeyboards')
        context.state.gamePhase = 0
      } else if (action === 'spinning') {
        context.state.gamePhase = 4
        context.state.showBankruptAlert = false
        context.state.showLoseTurnAlert = false
        context.state.showWinAlert = false
        context.state.showNotFoundAlert = false
      }
    },
    guessAnswer(context, guess) {
      if (context.getters.currentPuzzleText.toLowerCase() === guess.toLowerCase()) {
        context.dispatch('setPhase', 'guessCorrect');
      } else {
        context.dispatch('setPhase', 'guessFail');
      }
    },
    buyVowel(context) {
      context.state.gameBoard.vowelEnabled = true
      context.dispatch('spendRoundPoints', 250)
      context.dispatch('setPhase', 'buyVowel');
    },
    skipTurn(context) {
      context.dispatch('setPhase', 'skipTurn')
    }
  },
  modules: {
    gameBoard: gameBoard,
    gameWheel: gameWheel,
    gamePlayers: gamePlayers,
    gameKeyboards: gameKeyboards
  }
})
