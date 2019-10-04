import React, {Component} from 'react'

class User extends Component {
    constructor(props) {
        super(props);
        this.state = { isLastNameVisible: true};
    }

    componentDidMount() {
        
            const json = localStorage.getItem('isLastNameVisible');
            const status = JSON.parse(json) 
            if (!status) {
                this.setState(() => ({isLastNameVisible: status}))
            }
        
        
    };

    componentDidUpdate(prevState) {
        if (prevState.isLastNameVisible !== this.state.isLastNameVisible)
        localStorage.setItem('isLastNameVisible', this.state.isLastNameVisible)
    };

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