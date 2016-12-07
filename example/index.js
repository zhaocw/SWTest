import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';
import styles from './index.scss';

export default class Home extends Component {
  render() {
    return (
      <div className={'page-index'}>
        <h1>SW测试</h1>
        <ul>
					<li><Link to="/home">Home</Link></li>
        </ul>
      </div>
    );
  }
}