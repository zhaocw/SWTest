import React from 'react';
import { IndexLink, Link } from 'react-router';

export default class Home extends React.Component {
  render() {
    let loopDom = [];
    for (let i = 0; i < this.state.loopLength; i++) {
      loopDom.push(<div key={i}>{i}</div>);
    }
    alert(12);
    return (
      <div className="page-home">
        HomeTest
      </div>
    );
  }
}
