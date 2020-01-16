import React, { Component } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import '../../styles/Screens.css'

class Science extends Component {
    constructor(props) {
        super(props)
        this.state = {
            scienceArticles: []
        }
    }

    componentDidMount() {
        this.getScienceArticles()
    }

    getScienceArticles() {
        fetch('/articles')
            .then(response => response.json())
            .then(scienceArticle => {
                this.setState({
                    scienceArticles: scienceArticle
                })
            })
    }
    render() {
        const { scienceArticles } = this.state
        const articles = scienceArticles && [...scienceArticles].filter(scArticle => scArticle.category === 'Science')
        return (
            <div>
                <Header />
                {articles.map(article =>
                    <div className='articleCard'>
                        <h3>{article.title}</h3>
                        <img src={article.img_url} alt="article header img" />
                        <h4 className="mediumQuote">{article.main_quote}</h4>
                        <p className='mediumDescription'>{article.description}</p>
                    </div>
                )}
                <Footer />
            </div>
        )
    }
}

export default Science