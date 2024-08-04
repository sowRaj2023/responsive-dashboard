import React, { Component } from 'react';
import './Widget.css';

class Widget extends Component {
  render() {
    return (
      <div className="widget">
        <div className="widget-header">
          <h3>{this.props.title}</h3>
        </div>
        <div className="widget-content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Widget;
