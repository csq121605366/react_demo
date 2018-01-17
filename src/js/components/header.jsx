var React = require('react');


const styleComponentHeader = {
    header: {
        backgroundColor: 'red',
        color: '#fff',
        paddingTop: '25px',
        paddingBottom: '15px'
    }
}

export default class Header extends React.Component {
    render() {
        return (
            <div style={styleComponentHeader.header} className="f-sm">
                我是header
            </div>
        );
    }
}