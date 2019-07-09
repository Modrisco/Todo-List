import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter } from  'react-router-dom'

import CustomersList from '../../CustomersList'
import './styles/styles.css'


const BaseLayout = () => (
    <div className="container-fluid">
        <section>
            <div align="center">
                <h2>Help me</h2>
            </div>
        </section>
        <hr className="td-m-v-0"></hr>
        <section>
            <div align="center">
                <h2>Help you</h2>
            </div>
        </section>
        ​
        <div className="content">
            <CustomersList/>
        </div>
        ​
    </div>
)

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <BaseLayout/>
        );
    }
}

let mapStateToProps = (state) => ({
    user: state.user
})
export default connect(
    mapStateToProps
)(Home);
