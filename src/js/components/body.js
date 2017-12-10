var React = require('react');
var ReactDOM = require('react-dom');

export default class Body extends React.Component {

    render() {
        let username = '45';
        let html = 'woshi&nbsp;&nbsp;&nbsp;csq';
        return (
            <div>
                <p>{username == '' ? '用户还没有登陆' : '用户名:' + username}</p>
                <p dangerouslySetInnerHTML={{ __html: html }}></p>
            </div>
        );
    }
}