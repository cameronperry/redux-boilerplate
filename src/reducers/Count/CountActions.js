export function setState(state) {
    return {
        type: 'SET_STATE',
        state
    };
}

export function increment() {
    return {
        type: 'INCREMENT'
    };
}

export function decrement() {
    return {
        type: 'DECREMENT'
    };
}

export function multiply() {
    return {
        type: 'MULTIPLY'
    };
}

export function divide() {
    return {
        type: 'DIVIDE'
    };
}