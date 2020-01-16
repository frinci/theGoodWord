import React, { Component } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import '../../styles/Screens.css'
import { Redirect } from 'react-router-dom'

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

    handleArticleClick = async (id) => {
        await fetch(`/articles/${id}`)
            .then((res) => {
                return res.json()
            })
            .then((json) => {
                this.setState({
                    articleData: json,
                    redirect: true
                })
            })
    }


    render() {
        let redirect = this.state.redirect && <Redirect to={{
            pathname: '/Article',
            state: { article: this.state.articleData && this.state.articleData}
        }}
        />

        const { scienceArticles } = this.state
        const articles = scienceArticles && [...scienceArticles].filter(scArticle => scArticle.category === 'Science')

        return (
            <div>
                {redirect}

                <Header />
                {articles.map(article =>
                    <div onClick={() => this.handleArticleClick(article.id)} className='articleCard'>
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