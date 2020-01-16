import React, { Component } from 'react'
import Header from '../Header'
import Footer from '../Footer'


class Article extends Component {
    constructor(props) {
        super(props)
        this.state = {
            articles: [],

            articleInputs: {
                title: '',
                author: '',
                author_title: '',
                description: '',
                main_quote: '',
                category: '',
                content: '',
                img_url: ''
            }
        }
    }

    handleDelete(deletedArticle) {
        fetch(`/articles/${deletedArticle.id}`, {
            method: 'DELETE',
        })
            .then(json => {
                this.setState(state => {
                    const articles = state.articles.filter((article, index) => article.id !== deletedArticle)
                    return {
                        articles,
                    }
                })
            })
            .catch(error => console.log(error))
    }

    handleUpdate(event, articleInputs) {
        event.preventDefault()
        fetch(`/articles/${articleInputs.id}`, {
            body: JSON.stringify(articleInputs),
            method: 'PUT',
        })

            .then(updatedArticles => {
                this.getArticles()
            })
            .catch(error => console.log(error))
    }

    render() {
        let article = this.props.location.state.article

        return (
            <div>
                <Header />
                <img src={article.img_url} alt="article image" />
                <h2>{article.title}</h2>
                <h4>{article.author}</h4>
                <h4>{article.author_title}</h4>
                <h5>{article.main_quote}</h5>
                <p>{article.content}</p>

                <input type='submit' value={"Update Article"} onClick={this.handleUpdate}/>

                <input type='submit' value={"Delete"} onClick={this.handleDelete(article)}/>
                <Footer />
            </div>
        )
    }
}

export default Article