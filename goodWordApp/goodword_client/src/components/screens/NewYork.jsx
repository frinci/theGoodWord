import React, { Component } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import '../../styles/Screens.css'
import { Redirect } from 'react-router-dom'

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

        const {newYorkArticles} = this.state
        const articles = newYorkArticles && [...newYorkArticles].filter(nyArticle => nyArticle.category === 'NewYork')
        return (
            <div>
                {redirect}
                <Header />
                <div className="article">
                    {articles.map(article =>
                                <div className='articleCard' onClick={() => this.handleArticleClick(article.id)}>
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