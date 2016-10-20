import React from 'react';
import { Link } from 'react-router';

import 'assets/styles/style.css'

export default React.createClass({
  render: function() {
    return (
      <div className="app">
        <nav>
          <h3>I'm in layout</h3>
        </nav>
        <main>
          {this.props.children}
        </main>
      </div>
    )
  }
});