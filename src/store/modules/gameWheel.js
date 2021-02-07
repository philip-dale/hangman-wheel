import Vue from 'vue'

const defaultWheelSetup = [
    { val: -2, text: 'BANKRUPT', colour: '#FF6633' },
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
]
const defaultCurrentWheelIndex = 0

export default {
    namespaced: false,
    state: () => ({
        wheelSetup: defaultWheelSetup,
        currentWheelIndex: defaultCurrentWheelIndex,
        wheelSpinning: false,
    }),
    mutations: {
        setWheelIndex(state, n) {
            state.currentWheelIndex = n
        },
    },
    actions: {
        wheelSpinStart(context) {
            context.dispatch('setPhase', 'spinning');
            context.state.wheelSpinning = true
        },
        stepWheel(context) {
            if (context.state.currentWheelIndex == context.state.wheelSetup.length - 1) {
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
        setWheelDefaultSettings(context) {
            context.state.wheelSetup = defaultWheelSetup
            context.state.currentWheelIndex = defaultCurrentWheelIndex
        },
        saveWheelSettings(context) {
            Vue.$cookies.set('WheelSettings', { "wheelSetup": context.state.wheelSetup, "currentWheelIndex": context.state.currentWheelIndex, }, 'Infinity', null, null, null, 'Strict');
        },
        loadWheelSettings(context) {
            context.dispatch('setWheelDefaultSettings')
            let values = Vue.$cookies.get("WheelSettings");
            if (values != undefined) {
                if (values.wheelSetup != undefined) {
                    context.state.wheelSetup = values.wheelSetup
                }
                if (values.currentWheelIndex != undefined) {
                    context.state.currentWheelIndex = values.currentWheelIndex
                }
            }
        },
        clearWheelSave() {
            Vue.$cookies.remove("WheelSettings");
        }
    },
    getters: {
        wheelText(state) {
            return state.wheelSetup[state.currentWheelIndex].text
        },
        wheelValue(state) {
            return state.wheelSetup[state.currentWheelIndex].val
        },
        wheelSetup(state) {
            return state.wheelSetup
        },
        currentWheelIndex(state) {
            return state.currentWheelIndex
        },
        wheelSpinning(state) {
            return state.wheelSpinning
        },
    },
}