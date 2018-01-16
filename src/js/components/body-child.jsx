import React from 'react';

export default class BodyChild extends React.Component{
    render(){
        return(
            <div>
                子页面输入:<input type="text" defaultValue='123' onChange={this.props.handleChildChange} />
                <p>爷爷的属性:{this.props.userid}-{this.props.username}</p>
            </div>
        )
    }
}