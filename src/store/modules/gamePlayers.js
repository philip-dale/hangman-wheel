export default {
    namespaced: false,
    state: () => ({
        maxPlayers: 10,
        colours: ['#ff0000', '#40ff00', '#0040ff', '#ff00ff', '#ffbf00', '#449c90', '#8000ff', '#00ff80', '#4420db', '#bb639c'],
        players: [
            { name: 'Player 0', roundScore: 0, score: 0, colour: "#ff0000" },
            { name: 'Player 1', roundScore: 0, score: 0, colour: "#40ff00" },
            { name: 'Player 2', roundScore: 0, score: 0, colour: "#0040ff" },
        ],
        currentPlayer: 0,
        keepAllScores: false
    }),
    mutations: {
        keepAllScores(state, value) {
            state.keepAllScores = value
        },
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
        }
    },
    actions: {
        nextPlayer(context) {
            context.state.currentPlayer++
            if (context.state.currentPlayer >= context.state.players.length) {
                context.state.currentPlayer = 0
            }
        },
        clearAllScores(context) {
            context.state.players.forEach(player => {
                player.roundScore = 0
                player.score = 0
            });
        },
        clearRoundScores(context) {
            context.state.players.forEach(player => {
                player.roundScore = 0
            });
        },
        currentPlayerAddRoundScore(context, score) {
            context.state.players[context.state.currentPlayer].roundScore += score
        },
        currentPlayerClearRoundScore(context) {
            context.state.players[context.state.currentPlayer].roundScore = 0
        },
        setPlayerScores(context) {
            if (!context.state.keepAllScores) {
                context.state.players[context.state.currentPlayer].score += context.state.players[context.state.currentPlayer].roundScore
            } else {
                context.state.players.forEach(player => {
                    player.score += player.roundScore
                });
            }
            context.dispatch('clearRoundScores')
        },
        spendRoundPoints(context, cost) {
            context.state.players[context.state.currentPlayer].roundScore -= cost
        }
    },
    getters: {
        noPlayers(state) {
            return state.players.length
        },
        players(state) {
            return state.players
        },
        currentPlayer(state) {
            return state.currentPlayer
        },
        maxPlayers(state) {
            return state.maxPlayers
        },
        playerRoundScore(state) {
            return state.players[state.currentPlayer].roundScore
        },
        keepAllScores(state) {
            return state.keepAllScores
        }
    },
}