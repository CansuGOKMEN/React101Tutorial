import React, { Component } from 'react'

class Form extends Component {
    btnClick(){
        console.log(this.props.information)
        alert('Hi');
    }

    render() {
        return (
            <div>
                <button onClick={this.btnClick.bind(this)}>Sent</button>
            </div>
        )
    }
}

export default Form;