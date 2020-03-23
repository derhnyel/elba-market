import React, { Component } from 'react'
import { connect } from 'react-redux'

class Home extends Component {
    render(){
        console.log(this.props.data);
        return (
            <div>
                <h1>Home Page</h1>
            </div>
        )
    }
}

//fetch what you want from the store
const mapStateToProps = (state) => {
    return {
        data: state 
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         logOut: () => { dispatch(logOut(null)) },
//         loadQuestions: (payload) => { dispatch(loadQuestions(payload)) },
//     }
// }

export default connect(mapStateToProps, null)(Home)