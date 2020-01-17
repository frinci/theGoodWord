import React, { Component } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import axios from 'axios'


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

    handleUpdate(articleToUpdate) {
        const data = {
            title: this.state.title,
            author: this.state.author,
            author_title: this.state.author_title,
            description: this.state.description,
            main_quote: this.state.main_quote,
            category: this.state.category,
            content: this.state.content,
            img_url: this.state.img_url
        }

        console.log(data)
        axios.put(`/articles/${articleToUpdate.id}`, data)
            .then(updatedArticle => {})
            .catch(error => console.log(error))

        // event.preventDefault()
        // fetch(`/articles/${articleInputs.id}`, {
        //     body: JSON.stringify(articleInputs),
        //     method: 'PUT',
        // })

        //     .then(updatedArticles => {
        //         this.getArticles()
        //     })
        //     .catch(error => console.log(error))
    }

    handleChange = event => {
        console.log(event.target.name)
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        let article = this.props.location.state.article
        console.log('article', article)
        console.log('state', this.state)
        return (
            <div>
                <Header />

                <div className="article">
                    <img src={article.img_url} alt="article image" />
                    <h2>{article.title}</h2>
                    <h4>{article.author}</h4>
                    <h4>{article.author_title}</h4>
                    <h5>{article.main_quote}</h5>
                    <p>{article.content}</p>

                    <input type='submit' value={"Delete"} onClick={() => this.handleDelete(article)} />
                </div>

                <form className='updateArticle' onChange={this.handleChange}>
                    <h2>Update Article</h2>
                    <p>Title</p>
                    <input
                        placeholder='title'
                        name={'title'}
                        type={'text'}
                        value={this.state.title}
                        id={'title'}
                    />

                    <p>Author</p>
                    <input
                        placeholder='Ronda Writerman'
                        name={'author'}
                        type={'text'}
                        value={this.state.author}
                        id={'title'}
                    />

                    <p>Author Title</p>
                    <input
                        placeholder='The Good Word | Staff Writer'
                        name={'author_title'}
                        type={'text'}
                        value={this.state.author_title}
                    />

                    <p>Description</p>
                    <input
                        placeholder={'Article Meta Description'}
                        name={'description'}
                        type={'text'}
                        value={this.state.description}
                    />

                    <p>Feature Quote</p>
                    <input
                        placeholder={"'It was aliens, I swear!'"}
                        name={'main_quote'}
                        type={'text'}
                        value={this.state.main_quote}
                    />

                    <p>Category</p>
                    <input
                        placeholder={"New York, Politics, Science, Opinion"}
                        name={'category'}
                        type={'text'}
                        value={this.state.category}
                    />

                    <p>Article Content</p>
                    <input
                        placeholder={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'}
                        name={'content'}
                        type={'text'}
                        value={this.state.content}
                    />

                    <p>Image URL</p>
                    <input
                        placeholder={"http..."}
                        name={'img_url'}
                        type={'text'}
                        value={this.state.img_url}
                    />

                    <input type='submit' value={"Update Article"} onClick={(e) => this.handleUpdate(article)} />
                </form>
                <Footer />
            </div>
        )
    }
}

export default Article