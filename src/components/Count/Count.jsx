import './Count.css';
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import * as CountActions from '../../reducers/Count/CountActions';

export const Count = React.createClass({
  mixins: [PureRenderMixin],
  render: function () {
    return (
      <div className='Count'>
        <div className='Count-Actions'>
          <button className='Count-Action' onClick={this.props.increment}>Increment</button>
          <button className='Count-Action' onClick={this.props.decrement}>Decrement</button>
          <button className='Count-Action' onClick={this.props.multiply}>Multiply</button>
          <button className='Count-Action' onClick={this.props.divide}>Divide</button>
        </div>
        <div className='Count-Value'>
          {this.props.count}
        </div>
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    count: state.Count.get('count')
  };
}

export const CountContainer = connect(
  mapStateToProps,
  CountActions
)(Count);
