import test from 'tape'

import * as CountActions from '../src/reducers/Count/CountActions';

test('Count action setState', (t) => {
    t.deepEqual(
        CountActions.setState(),
        {type: 'SET_STATE', state: undefined},
        'setState should have SET_STATE as type and property state should be undefined'
    );
    t.end();
});

test('Count action increment', (t) => {
    t.deepEqual(
        CountActions.increment(),
        {type: 'INCREMENT'},
        'increment should have INCREMENT as type'
    );
    t.end();
});

test('Count action decrement', (t) => {
    t.deepEqual(
        CountActions.decrement(),
        {type: 'DECREMENT'},
        'decrement should have DECREMENT as type'
    );
    t.end();
});

test('Count action multiply', (t) => {
    t.deepEqual(
        CountActions.multiply(),
        {type: 'MULTIPLY'},
        'multiply should have MULTIPLY as type'
    );
    t.end();
});

test('Count action divide', (t) => {
    t.deepEqual(
        CountActions.divide(),
        {type: 'DIVIDE'},
        'divide should have DIVIDE as type'
    );
    t.end();
});