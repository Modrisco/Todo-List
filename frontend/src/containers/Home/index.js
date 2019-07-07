import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from  'react-router-dom'
import MyButton from "../../components/Button"

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    _renderButtons() {
        return (
            <React.Fragment>
            </React.Fragment>
        )
    }
    render() {
        return (
            <div>
                {this._renderButtons()}
                <Link to='/login'>
                    <button className="btn btn-success">login page</button>
                </Link>
            </div>
    )
        ;
    }
}

let mapStateToProps = (state) => ({
    user: state.user
})
export default connect(
    mapStateToProps
)(Home);