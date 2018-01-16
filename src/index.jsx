
var React = require('react');
var ReactDOM = require('react-dom');

import Timer from './js/components/timer.jsx';
import Body from './js/components/body.jsx';
import Header from './js/components/header.jsx';
import Footer from './js/components/footer.jsx';

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userid: 100
    }
  }
  render() {
    return (
      <div>
        <Header></Header>
        <Body userid={this.state.userid} username={'csq'}></Body>
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
