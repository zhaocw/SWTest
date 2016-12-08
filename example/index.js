import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';
import styles from './index.scss';
import png from './2.jpg';
export default class Home extends Component {
  componentDidMount() {
    fetch('https://api.github.com/', { credentials: 'include' }).then((response) => response.json()).then((data) => {
      alert(11);
      console.log(data);
    }, () => {
      alert(12);
    }).catch(() => {
      alert(15);
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
