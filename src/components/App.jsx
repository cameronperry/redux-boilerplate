import './App.css';
import React from 'react';

export default React.createClass({
  render: function () {
    return (
      <div className='Root'>
        <header className='Header'>React Redux Boilerplate</header>
        <div className='Body'>{this.props.children}</div>
        <footer className='Footer'>Developed by Cameron Perry  &bull; <a href='https://github.com/cameronperry/redux-boilerplate'>View Code on GitHub</a></footer>
      </div>
    );
  }
});
