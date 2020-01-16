import React, { Component } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import '../../styles/Screens.css'

class NewYork extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newYorkArticles: []
        }
    }

    componentDidMount() {
        this.getPoliticsArticles()
    }

    getPoliticsArticles() {
        fetch('/articles')
            .then(response => response.json())
            .then(newYorkArticle => {
                this.setState({
                    newYorkArticles: newYorkArticle
                })
            })
    }


    render() {
        const {newYorkArticles} = this.state
        const articles = newYorkArticles && [...newYorkArticles].filter(nyArticle => nyArticle.category === 'NewYork')
        return (
            <div>
                <Header />
                <div className="article">
                    {articles.map(article =>
                                <div className='articleCard'>
                                    <h3>{article.title}</h3>
                                    <img src={article.img_url} alt="article header img" />
                                    <h4 className="mediumQuote">{article.main_quote}</h4>
                                    <p className='mediumDescription'>{article.description}</p>
                                </div>
                            )}
                </div>

                <Footer />
            </div>
        )
    }
}

export default NewYork