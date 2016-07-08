import test from 'tape'
import React from 'react';
import {shallow} from 'enzyme';
import sinon from 'sinon';
import {Count} from '../src/components/Count/Count';

test('Count component test', (t) => {
  const onIncrementClick = sinon.spy();
  const onDecrementClick = sinon.spy();
  const onMultiplyClick = sinon.spy();
  const onDivideClick = sinon.spy();
  const wrapper = shallow(
    <Count
      increment={onIncrementClick}
      decrement={onDecrementClick}
      multiply={onMultiplyClick}
      divide={onDivideClick}
      count={100}
    />
  );

  t.equal(
    wrapper.find('.Count-Value').text(),
    '100',
    'Expects the count to be displayed in the Count-Value element'
  );

  t.equal(
    wrapper.find('.Count-Action').length,
    4,
    'Count component should have four Count-Action elements'
  );

  wrapper.find('.Count-Actions').childAt(0).simulate('click');
  t.equal(
    onIncrementClick.calledOnce,
    true,
    'Increment click calls onIncrementClick once'
  );

  wrapper.find('.Count-Actions').childAt(1).simulate('click');
  t.equal(
    onDecrementClick.calledOnce,
    true,
    'Decrement click calls onDecrementClick once'
  );

  wrapper.find('.Count-Actions').childAt(2).simulate('click');
  t.equal(
    onMultiplyClick.calledOnce,
    true,
    'Multiply click calls onMultiplyClick once'
  );

  wrapper.find('.Count-Actions').childAt(3).simulate('click');
  t.equal(
    onDivideClick.calledOnce,
    true,
    'Divide click calls onDivideClick once'
  );
  t.end();
});
