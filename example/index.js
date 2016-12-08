import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';
import styles from './index.scss';

export default class Home extends Component {
  render() {
    return (
      <div className={'page-index'}>
        <h1>SW</h1>
        <ul>
					<li><Link to="/home">HomeTest</Link></li>
        </ul>
      </div>
    );
  }
}
