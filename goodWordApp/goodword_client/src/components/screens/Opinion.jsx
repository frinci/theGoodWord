import React, { Component } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import '../../styles/Screens.css'

class Opinion extends Component {
    render() {
        return (
            <div>
                <Header />
                    <h1>Due to a lack of opinions, the staff in this department has been fired.</h1>
                <Footer />
            </div>
        )
    }
}

export default Opinion