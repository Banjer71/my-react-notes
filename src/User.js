import React, {Component} from 'react'

class User extends Component {
    constructor(props) {
        super(props);
        this.state = { isLastNameVisible: true};
    }

    toggleLastName() {
        this.setState({isLastNameVisible: !this.state.isLastNameVisible});
    }

    render() {
        return (
            <div className='myname'>
                <p className='testo' style={{margin: '10px'}}>
                <span className='space'>{this.props.firstName}</span>
                {!this.state.isLastNameVisible && this.props.lastName} {
                    <button onClick= {() => this.toggleLastName()}>
                        Toggle Last Name
                    </button>
                }
                </p>
            </div>
        )
    }
}



export default User