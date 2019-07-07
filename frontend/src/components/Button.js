import React, {Component} from 'react';

class Button extends Component {


    render() {
        // console.log(this.props)
        let {text, fun} = this.props;
        return (
            <div>
                <button className="btn btn-primary" onClick={fun}>{text}</button>
            </div>
        );
    }
}

export default Button;