import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';
import styles from './index.scss';
import png from './2.jpg';
export default class Home extends Component {
  componentDidMount() {
    fetch('https://api.github.com/', { credentials: true }).then((response) => response.json()).then((data) => {
      console.log(data);
    });
  }
  render() {
    return (
      <div className={'page-index'}>
        <h1>SW</h1>
        <img src={png} width={100} height={100} />
        <ul>
					<li><Link to="/home">HomeTest</Link></li>
        </ul>
      </div>
    );
  }
}
