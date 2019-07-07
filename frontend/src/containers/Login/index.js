import React, {Component} from 'react';
import {connect} from 'react-redux'
class Index extends Component {
    render() {
        return (
            <div>
                <div>Login page</div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    user:state.user
})
const actionCreator = {}
export default connect(mapStateToProps, actionCreator)(Index)
// export default Index;