import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { BrowserRouter } from  'react-router-dom'

import './styles/styles.css'


const BaseLayout = () => (
    <div className="container-fluid">
        <section>
            <div align="center">
                <img alt={"pic"} src={require('../../pubilc/images/todo1.jpg')}></img>
            </div>
            <div align="center">
                <br></br>
                <h2>Help you organize your time</h2>
            </div>
        </section>
        <hr className="td-m-v-0"></hr>
        <br/>
        <br/>
        <section>
            <div align="center">
                <a href="/tasks"><h2>Let's create a new task!</h2></a>
            </div>
        </section>
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
