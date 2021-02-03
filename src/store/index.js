import Vue from 'vue'
import Vuex from 'vuex'
import gameBoard from "./gameBoard"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    maxPlayers: 10,
    colours: ['#ff0000', '#40ff00', '#0040ff', '#ff00ff', '#ffbf00', '#449c90', '#8000ff', '#00ff80', '#4420db', '#bb639c'],
    players: [
      { name: 'Player 0', roundScore: 0, score: 0, colour: "#ff0000" },
      { name: 'Player 1', roundScore: 0, score: 0, colour: "#40ff00" },
      { name: 'Player 2', roundScore: 0, score: 0, colour: "#0040ff" },
    ],
    currentPlayer: 0,
    wheelSetup: [
      { val: 100, text: '£100', colour: '#FF6633'},
      { val: 900, text: '£900', colour: '#E6B333' },
      { val: 500, text: '£500', colour: '#80B300' },
      { val: 350, text: '£350', colour: '#FF99E6' },
      { val: 600, text: '£600', colour: '#66994D' },
      { val: 500, text: '£500', colour: '#66664D' },
      { val: 400, text: '£400', colour: '#E666B3' },
      { val: 550, text: '£550', colour: '#4D8066' },
      { val: 2500, text: '£2500', colour: '#FF3380' },
      { val: 1000, text: '£1000', colour: '#E64D66' },
      { val: 700, text: '£700', colour: '#FFB399' },
      { val: 900, text: '£900', colour: '#3366E6' },
      { val: 500, text: '£500', colour: '#809900' },
      { val: 3500, text: '£3500', colour: '#CCFF1A' },
      { val: -2, text: 'BANKRUPT', colour: '#B366CC' },
      { val: 300, text: '£300', colour: '#991AFF' },
      { val: 500, text: '£500', colour: '#33991A' },
      { val: 450, text: '£450', colour: '#809980' },
      { val: 500, text: '£500', colour: '#CCCC00' },
      { val: 800, text: '£800', colour: '#4DB380' },
      { val: -1, text: 'LOSE A TURN', colour: '#FF33FF' },
      { val: 1000, text: '£1000', colour: '#999966' },
      { val: 1500, text: '£1500', colour: '#E6B3B3' },
      { val: 650, text: '£650', colour: '#FF1A66' },
    ],
    currentWheelIndex: 0,
    wheelSpinning: false,
    gamePhase: -1, // 0 = spin/buy vowels/guess, 1 = select cons, 2 = select vowel, 3 = guess, 4 = spinning, 5 = reveal
    consKeyboardDefaut: [
      { value: 'B', used: false },
      { value: 'C', used: false },
      { value: 'D', used: false },
      { value: 'F', used: false },
      { value: 'G', used: false },
      { value: 'H', used: false },
      { value: 'J', used: false },
      { value: 'K', used: false },
      { value: 'L', used: false },
      { value: 'M', used: false },
      { value: 'N', used: false },
      { value: 'P', used: false },
      { value: 'Q', used: false },
      { value: 'R', used: false },
      { value: 'S', used: false },
      { value: 'T', used: false },
      { value: 'V', used: false },
      { value: 'W', used: false },
      { value: 'X', used: false },
      { value: 'Y', used: false },
      { value: 'Z', used: false },
    ],
    consKeyboard: [],
    vowelKeyboardDefaut: [
      { value: 'A', used: false },
      { value: 'E', used: false },
      { value: 'I', used: false },
      { value: 'O', used: false },
      { value: 'U', used: false },
    ],
    vowelKeyboard: [],
    showBankruptAlert:false,
    showLoseTurnAlert:false,
    showWheelValue:false,
    showWinAlert:false,
    showNotFoundAlert:false
  },
  getters: {
    noPlayers(state) {
      return state.players.length
    },
    wheelText(state) {
      return state.wheelSetup[state.currentWheelIndex].text
    },
    wheelValue(state) {
      return state.wheelSetup[state.currentWheelIndex].val
    },
    phaseText(state) {
      if(state.gamePhase == -1) {
        return "Welcome to Wheel Of Fortune"
      } else if(state.gamePhase == 0) {
        return "Spin The Wheel / Buy a Vowel (£250) / Guess"
      } else if(state.gamePhase == 1) {
        return "Select a Consonant"
      } else if(state.gamePhase == 2) {
        return "Select a Vowel"
      } else if(state.gamePhase == 3) {
        return "Make Your Guess"
      } else if(state.gamePhase == 4) {
        return "Spinning"
      } else if(state.gamePhase == 5) {
        return "Level Over"
      }
    },
    playerRoundScore(state) { 
      return state.players[state.currentPlayer].roundScore
    }
  },
  mutations: {
    updatePlayers(state, n) {
      while (n != state.players.length) {
        if (n > state.players.length) {
          state.players.push({
            name: 'Player '.concat(state.players.length.toString()),
            score: 0, colour: state.colours[state.players.length],
            roundScore: 0,
          })
        } else if (n < state.players.length) {
          state.players.pop()
        }
      }
    },
    initKeyboards(state) {
      state.consKeyboard = []
      state.consKeyboardDefaut.forEach(key => {
        state.consKeyboard.push({ value: key.value, used: false })
      });
      state.vowelKeyboard = []
      state.vowelKeyboardDefaut.forEach(key => {
        state.vowelKeyboard.push({ value: key.value, used: false })
      });
      
    },
    nextPlayer(state) {
      state.currentPlayer++
      if (state.currentPlayer >= state.players.length) {
        state.currentPlayer = 0
      }
    },
    setWheelIndex(state, n) {
      state.currentWheelIndex = n
    },
    clearRoundScores(state) {
      state.players.forEach(player => {
        player.roundScore = 0
      });
    },
    clearAllScores(state) {
      state.players.forEach(player => {
        player.roundScore = 0
        player.score = 0
      });
    }
  },
  actions: {
    keyPressed(context, { index, keyboardType }) {
      
      if (context.state.gamePhase == 1 || context.state.gamePhase == 2) {
        let char = ''
        if (keyboardType === "cons") {
          context.state.consKeyboard[index].used = true
          char = context.state.consKeyboard[index].value
        } else if (keyboardType === "vowel") {
          context.state.vowelKeyboard[index].used = true
          char = context.state.vowelKeyboard[index].value
        }
        let foundLeters = 0
        context.state.gameBoard.puzzle.forEach((row, rIndex) => {
          row.forEach((letter, lIndex) => {
            if (letter.value.toLowerCase() == char.toLowerCase()) {
              foundLeters += 1
              context.state.gameBoard.puzzle[rIndex][lIndex].hidden = false
            }
          });
        });
        if (foundLeters > 0) {
          if (keyboardType === "cons") {
            let score = foundLeters * context.getters.wheelValue
            context.dispatch('currentPlayerAddRoundScore', score)
          }
          context.dispatch('setPhase', "charFound")
        } else {
          context.dispatch('setPhase', "charNotFound")
        }
      }
      context.state.gameBoard.vowelEnabled = false
    },
    wheelSpinStart(context) {
      context.dispatch('setPhase', 'spinning');
      context.state.wheelSpinning = true
      
    },
    stepWheel(context){
      if(context.state.currentWheelIndex == context.state.wheelSetup.length-1) {
        context.state.currentWheelIndex = 0
      } else {
        context.state.currentWheelIndex++
      }
    },
    wheelSpinEnd(context) {
      context.state.wheelSpinning = false
      if (context.state.wheelSetup[context.state.currentWheelIndex].val >= 0) {
        context.dispatch('setPhase', 'spinDone')
      } else if (context.state.wheelSetup[context.state.currentWheelIndex].val == -1) {
        context.dispatch('setPhase', 'missTurn');
      } else if (context.state.wheelSetup[context.state.currentWheelIndex].val == -2) {
        context.dispatch('setPhase', 'bankrupt');
      }
    },
    setPhase(context, action) {
      if (action === 'spinDone') {
        context.state.showBankruptAlert=false
        context.state.showLoseTurnAlert=false
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
        context.commit('nextPlayer')
        context.state.gamePhase = 0
      } else if (action === 'buyVowel') {
        context.state.gamePhase = 2
      } else if (action === 'guess') {
        context.state.gamePhase = 3
      } else if (action === 'missTurn') {
        context.state.showLoseTurnAlert = true
        context.commit('nextPlayer');
        context.state.gamePhase = 0
      } else if (action === 'skipTurn') {
        context.commit('nextPlayer');
        context.state.gamePhase = 0
      } else if (action === 'bankrupt') {
        context.state.showBankruptAlert = true
        context.dispatch('currentPlayerClearRoundScore')
        context.commit('nextPlayer');
        context.state.gamePhase = 0
      } else if (action === 'guessFail') {
        context.commit('nextPlayer');
        context.state.gamePhase = 0
      } else if (action === 'guessCorrect') {
        context.state.showWinAlert = true
        context.state.players[context.state.currentPlayer].score += context.state.players[context.state.currentPlayer].roundScore
        context.commit('clearRoundScores')
        context.dispatch('revealPuzzle')
        context.state.gamePhase = 5
      } else if (action === 'skipGame') {
        context.dispatch('revealPuzzle')
        context.commit('clearRoundScores')
        context.state.gamePhase = 5
      } else if (action === 'nextLevel') {
        context.dispatch('nextPuzzle')
        context.commit('initKeyboards')
        context.state.gamePhase = 0
      } else if (action === 'startGame') {
        context.commit('clearAllScores')
        context.dispatch('nextPuzzle')
        context.commit('initKeyboards')
        context.state.gamePhase = 0
      } else if (action ==='spinning') {
        context.state.gamePhase = 4
        context.state.showBankruptAlert=false
        context.state.showLoseTurnAlert=false
        context.state.showWinAlert = false
        context.state.showNotFoundAlert = false
      }
    },
    currentPlayerAddRoundScore(context, score) {
      context.state.players[context.state.currentPlayer].roundScore += score
    },
    currentPlayerClearRoundScore(context) {
      context.state.players[context.state.currentPlayer].roundScore = 0
    },
    guessAnswer(context, guess) {
      if(context.getters.currentPuzzleText.toLowerCase() === guess.toLowerCase()) {
        console.log("WIN")
        context.dispatch('setPhase', 'guessCorrect');
      } else {
        context.dispatch('setPhase', 'guessFail');
      }
    },
    buyVowel(context){
      context.state.gameBoard.vowelEnabled = true
      context.state.players[context.state.currentPlayer].roundScore -= 250
      context.dispatch('setPhase', 'buyVowel');
    },
    skipTurn(context){
      context.dispatch('setPhase', 'skipTurn')
    }
  },
  modules: {
    gameBoard: gameBoard,
  }
})
