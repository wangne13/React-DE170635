import { Component } from 'react'
class HelloAsClass extends Component {
    render() {
        return <>Hello {this.props.who} - {this.props.phone} </>
    }
}
export default HelloAsClass