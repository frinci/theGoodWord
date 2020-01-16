import React, { Component } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import '../../styles/Screens.css'

class Politics extends Component {
    constructor(props) {
        super(props)
        this.state = {
            poliArticles: []
        }
    }

    componentWillMount() {
        this.getPoliArticles()
    }

    getPoliArticles() {
        fetch('/articles')
            .then(response => response.json())
            .then(poliArticle => {
                this.setState({
                    poliArticles: poliArticle
                })
            })
    }

    render() {
        const { poliArticles } = this.state
        const articles = poliArticles && [...poliArticles].filter(pArticle => pArticle.category === "Politics")
        return (
            <div>
                <Header />
                <div className='article'>
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

export default Politics