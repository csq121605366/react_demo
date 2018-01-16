import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import BodyChild from './body-child.jsx';

const defaultValue = {
    username: '这是一个默认的用户名'
}
export default class Body extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: 'box',
            age: 2
        }
    }
    componentDidUpdate() {
        // console.log('更新了');
    }

    changeUserInfo(age) {
        this.setState({ age });
        // var btn = document.getElementById('submitButton');
        // ReactDOM.findDOMNode(btn).style.color = 'red';
        this.refs.submitButton.style.color = 'red';
    }
    handleChildValueChange(e) {
        this.setState({ age: e.target.value });
    }

    render() {
        setTimeout(() => {
            this.setState({ username: 'b' });
        }, 4000);
        return (
            <div>
                <p>userid:{this.props.userid}-{this.state.username}-{this.state.age}-{this.props.username}</p>
                <input ref="submitButton" type="button" value="点击1" onClick={this.changeUserInfo.bind(this, 99)} />
                <BodyChild {...this.props} handleChildChange={this.handleChildValueChange.bind(this)}></BodyChild>
            </div>
        );
    }
}


// console.log(PropTypes);
Body.propTypes = {
    userid: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.number,
        PropTypes.array,
        PropTypes.bool,
        PropTypes.func,
        PropTypes.object,
        PropTypes.symbol
    ])
};
 
Body.defaultProps = defaultValue;
