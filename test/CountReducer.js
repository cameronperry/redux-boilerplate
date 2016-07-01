import test from 'tape'

const {Map} = require('immutable');
import CountReducer from '../src/reducers/Count/CountReducer'
import * as CountActions from '../src/reducers/Count/CountActions'

test('CountReducer reducer setState', (t) => {
    const stateBefore = {count: 0};
    const stateAfter = {count: 100};
    t.deepEqual(
        CountReducer(Map(stateBefore), CountActions.setState(stateAfter)).toObject(),
        stateAfter,
        'setState should set the current value'
    );
    t.end();
});

test('CountReducer reducer increment', (t) => {
    const stateBefore = {count: 0};
    const stateAfter = {count: 1};
    t.deepEqual(
        CountReducer(Map(stateBefore), CountActions.setState(stateAfter)).toObject(),
        stateAfter,
        'increment should add one to the count property'
    );
    t.end();
});

test('CountReducer reducer decrement', (t) => {
    const stateBefore = {count: 0};
    const stateAfter = {count: -1};
    t.deepEqual(
        CountReducer(Map(stateBefore), CountActions.decrement()).toObject(),
        stateAfter,
        'decrement should subtract one to the count property'
    );
    t.end();
});

test('CountReducer reducer multiply', (t) => {
    const stateBefore = {count: 5};
    const stateAfter = {count: 10};
    t.deepEqual(
        CountReducer(Map(stateBefore), CountActions.multiply()).toObject(),
        stateAfter,
        'multiply should multiply the count property by 2'
    );
    t.end();
});

test('CountReducer reducer divide', (t) => {
    const stateBefore = {count: 10};
    const stateAfter = {count: 5};
    t.deepEqual(
        CountReducer(Map(stateBefore), CountActions.divide()).toObject(),
        stateAfter,
        'divide should divide the count property by 2'
    );
    t.end();
});