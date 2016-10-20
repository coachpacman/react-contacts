import React from 'react'
import { Router, Route, hashHistory } from 'react-router'

// Layout
import App from 'layouts/app'

// Components
import Contacts from 'ui/contacts'

export default React.createClass({
  render: function () {
    return (
      <Router history={hashHistory}>
        <Route component={App}>
          <Route path="/" component={Contacts} />
        </Route>
      </Router>
    )
  }
})