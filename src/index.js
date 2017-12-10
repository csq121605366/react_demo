
var React = require('react');
var ReactDOM = require('react-dom');

import Timer from './js/components/timer.js';
import Body from './js/components/body.js';
import Header from './js/components/header.js';
import Footer from './js/components/footer.js';

class Index extends React.Component {
  render() {

    return (
      <div>
        <Header></Header>
        <Body></Body>
        <Timer />
        <Footer></Footer>
      </div>
    )
  }
}


ReactDOM.render(<Index />, app);

if (module.hot) {
  module.hot.accept();
}
