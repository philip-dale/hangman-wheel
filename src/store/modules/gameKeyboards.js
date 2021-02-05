export default {
    namespaced: false,
    state: () => ({
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
    }),
    mutations: {},
    actions: {
        initKeyboards(context) {
            context.state.consKeyboard = []
            context.state.consKeyboardDefaut.forEach(key => {
                context.state.consKeyboard.push({ value: key.value, used: false })
            });
            context.state.vowelKeyboard = []
            context.state.vowelKeyboardDefaut.forEach(key => {
                context.state.vowelKeyboard.push({ value: key.value, used: false })
            });
        },
        keyPressed(context, { index, keyboardType }) {
            if (context.getters.gamePhase == 1 || context.getters.gamePhase == 2) {
                let char = ''
                if (keyboardType === "cons") {
                    context.state.consKeyboard[index].used = true
                    char = context.state.consKeyboard[index].value
                } else if (keyboardType === "vowel") {
                    context.state.vowelKeyboard[index].used = true
                    char = context.state.vowelKeyboard[index].value
                }
                let foundLeters = 0
                context.getters.puzzle.forEach((row, rIndex) => {
                    row.forEach((letter, lIndex) => {
                        if (letter.value.toLowerCase() == char.toLowerCase()) {
                            foundLeters += 1
                            context.commit('setLetterHidden', { rowIndex: rIndex, letterIndex: lIndex, value: false })
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
            context.commit('setVowelEnabled', false)
        },
    },
    getters: {
        consKeyboard(state) {
            return state.consKeyboard
        },
        vowelKeyboard(state) {
            return state.vowelKeyboard
        },
    },
}