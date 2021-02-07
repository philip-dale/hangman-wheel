import Vue from 'vue'
import Vuex from 'vuex'
import gameBoard from "./modules/gameBoard"
import gameWheel from "./modules/gameWheel"
import gamePlayers from "./modules/gamePlayers"
import gameKeyboards from "./modules/gameKeyboards"
Vue.use(Vuex)

const defaultPointsForWin = 1000
const defaultVowelCost = 250
const defaultGamePhase = -1

export default new Vuex.Store({
  state: {
    phaseEnum:{"init": -1, "firstGo":0, "play":1, "selectCons":2, "selectVowel":3, "guess":4, "spinning":5, "reveal":6, "freeVowels":7},
    gamePhase: defaultGamePhase,
    showBankruptAlert: false,
    showLoseTurnAlert: false,
    showWheelValue: false,
    showWinAlert: false,
    showNotFoundAlert: false,
    pointsForWin: defaultPointsForWin,
    vowelCost: defaultVowelCost,
  },
  getters: {
    gamePhase(state) {
      return state.gamePhase
    },
    phaseText(state) {
      if (state.gamePhase == state.phaseEnum.init) {
        return "Welcome to Wheel Of Fortune"
      } else if (state.gamePhase == state.phaseEnum.play || state.gamePhase == state.phaseEnum.firstGo) {
        return "Spin The Wheel / Buy a Vowel (£" + state.vowelCost.toString() + ") / Guess"
      } else if (state.gamePhase == state.phaseEnum.selectCons) {
        return "Select a Consonant"
      } else if (state.gamePhase == state.phaseEnum.selectVowel) {
        return "Select a Vowel"
      } else if (state.gamePhase == state.phaseEnum.guess) {
        return "Make Your Guess"
      } else if (state.gamePhase == state.phaseEnum.spinning) {
        return "Spinning"
      } else if (state.gamePhase == state.phaseEnum.reveal) {
        return "Level Over"
      } else if (state.gamePhase == state.phaseEnum.freeVowels) {
        return "Select a Free Vowel"
      } 
    },
    pointsForWin(state){
      return state.pointsForWin
    },
    phaseEnum(state) {
      return state.phaseEnum
    },
    vowelCost(state) {
      return state.vowelCost
    }
  },
  mutations: {
    pointsForWin(state, value) {
      state.pointsForWin = value
    },
    vowelCost(state, value) {
      state.vowelCost = value
    }
  },
  actions: {
    setPhase(context, action) {
      if (action === 'spinDone') {
        context.state.showBankruptAlert = false
        context.state.showLoseTurnAlert = false
        context.state.showWinAlert = false
        context.state.showNotFoundAlert = false
        context.state.showWheelValue = true
        if(context.getters.consRemaining) {
          context.state.gamePhase = context.state.phaseEnum.selectCons
        } else {
          context.state.gamePhase = context.state.phaseEnum.freeVowels
          context.commit('setVowelEnabled', true)
        }
      } else if (action === 'charFound') {
        context.state.gamePhase = context.state.phaseEnum.play
        context.state.showWheelValue = false
        context.state.showNotFoundAlert = false
      } else if (action === 'charNotFound') {
        context.state.showWheelValue = false
        context.state.showNotFoundAlert = true
        context.dispatch('nextPlayer')
        context.state.gamePhase = context.state.phaseEnum.firstGo
      } else if (action === 'buyVowel') {
        context.state.gamePhase = context.state.phaseEnum.selectVowel
      } else if (action === 'guess') {
        context.state.gamePhase = context.state.phaseEnum.guess
      } else if (action === 'missTurn') {
        context.state.showLoseTurnAlert = true
        context.dispatch('nextPlayer');
        context.state.gamePhase = context.state.phaseEnum.firstGo
      } else if (action === 'skipTurn') {
        context.dispatch('nextPlayer');
        context.state.gamePhase = context.state.phaseEnum.firstGo
      } else if (action === 'bankrupt') {
        context.state.showBankruptAlert = true
        context.dispatch('currentPlayerClearRoundScore')
        context.dispatch('nextPlayer');
        context.state.gamePhase = context.state.phaseEnum.firstGo
      } else if (action === 'guessFail') {
        context.dispatch('nextPlayer');
        context.state.gamePhase = context.state.phaseEnum.firstGo
      } else if (action === 'guessCorrect') {
        context.state.showWinAlert = true
        context.dispatch('currentPlayerAddRoundScore', context.state.pointsForWin)
        context.dispatch('setPlayerScores')
        context.dispatch('revealPuzzle')
        context.state.gamePhase = context.state.phaseEnum.reveal
      } else if (action === 'skipGame') {
        context.dispatch('revealPuzzle')
        context.dispatch('clearRoundScores')
        context.state.gamePhase = context.state.phaseEnum.reveal
      } else if (action === 'nextLevel') {
        context.dispatch('nextPuzzle')
        context.dispatch('initKeyboards')
        context.state.showWinAlert = false
        context.state.gamePhase = context.state.phaseEnum.firstGo
      } else if (action === 'startGame') {
        context.dispatch('clearAllScores')
        context.dispatch('nextPuzzle')
        context.dispatch('initKeyboards')
        context.state.gamePhase = context.state.phaseEnum.firstGo
      } else if (action === 'spinning') {
        context.state.gamePhase = context.state.phaseEnum.spinning
        context.state.showBankruptAlert = false
        context.state.showLoseTurnAlert = false
        context.state.showWinAlert = false
        context.state.showNotFoundAlert = false
      }
      context.dispatch('saveSettings')
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
      context.dispatch('spendRoundPoints', context.state.vowelCost)
      context.dispatch('setPhase', 'buyVowel');
    },
    skipTurn(context) {
      context.dispatch('setPhase', 'skipTurn')
    },
    setDefaultSettings(context) {
      context.state.pointsForWin = defaultPointsForWin
      context.state.vowelCost = defaultVowelCost
      context.state.gamePhase = defaultGamePhase
      context.dispatch('setPlayerDefaultSettings')
      context.dispatch('setWheelDefaultSettings')
      context.dispatch('setKeyboardDefaultSettings')
      context.dispatch('setBoardDefaultSettings')
    },
    saveSettings(context) {
      Vue.$cookies.set('gameSettings',{"pointsForWin":context.state.pointsForWin, "vowelCost":context.state.vowelCost, "gamePhase":context.state.gamePhase}, 'Infinity', null, null, null, 'Strict');
      context.dispatch('savePlayerSettings')
      context.dispatch('saveWheelSettings')
      context.dispatch('saveKeyboardSettings')
      context.dispatch('saveBoardSettings')
    },
    loadSettings(context) {
      context.state.pointsForWin = defaultPointsForWin
      context.state.vowelCost = defaultVowelCost
      context.state.gamePhase = defaultGamePhase
      let values = Vue.$cookies.get("gameSettings");
      if(values != undefined) {
        if(values.pointsForWin != undefined) {
          context.state.pointsForWin = values.pointsForWin
        }
        if(values.vowelCost != undefined) {
          context.state.vowelCost = values.vowelCost
        }
        if(values.gamePhase != undefined) {
          context.state.gamePhase = values.gamePhase
        }
      }
      context.dispatch('loadPlayerSettings')
      context.dispatch('loadWheelSettings')
      context.dispatch('loadKeyboardSettings')
      context.dispatch('loadBoardSettings')
    },
    clearSave(context) {
      Vue.$cookies.remove("gameSettings");
      context.dispatch('clearPlayerSave')
      context.dispatch('clearWheelSave')
      context.dispatch('clearKeyboardSave')
      context.dispatch('clearBoardSave')
    },
    startNewGame(context) {
      context.state.gamePhase = defaultGamePhase,
      context.state.showBankruptAlert = false,
      context.state.showLoseTurnAlert = false,
      context.state.showWheelValue = false,
      context.state.showWinAlert = false,
      context.state.showNotFoundAlert = false,
      context.commit("setPuzzle", { 'text':"Wheel of Hangman!!", 'showAll':true });
      context.dispatch("clearAllScores")
      context.dispatch('initKeyboards')
      context.commit('currentPlayer', 0)
    }
  },
  modules: {
    gameBoard: gameBoard,
    gameWheel: gameWheel,
    gamePlayers: gamePlayers,
    gameKeyboards: gameKeyboards
  }
})
