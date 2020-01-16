import React, { Component } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import axios from 'axios'

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            articleInputs: {
                title: '',
                author: '',
                author_title: '',
                description: '',
                main_quote: '',
                category: '',
                content: '',
                img_url: ''

            },

            recipeInputs: {
                title: '',
                author: '',
                author_title: '',
                description: '',
                ingredients: '',
                category: '',
                content: '',
                img_url: ''
            }
        }

    }

    componentWillMount() {
        if (this.props.article) {
            this.setState({
                title: this.props.article.title || '',
                author: this.props.article.author || '',
                author_title: this.props.article.title || '',
                description: this.props.article.description || '',
                main_quote: this.props.article.main_quote || '',
                category: this.props.article.category || '',
                content: this.props.article.content || '',
                img_url: this.props.article.img_url || ''
            })
        }
    }

    handleChange = event => {
        console.log(event.target.name)
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = event => {
        let body = {
                title: this.state.title,
                author: this.state.author,
                author_title: this.state.author_title,
                description: this.state.description,
                main_quote: this.state.main_quote,
                category: this.state.category,
                content: this.state.content,
                img_url: this.state.img_url
            }
        let postData = axios.post('http://localhost:3000/articles', body)

        event.preventDefault()
    }

    render() {

        return (
            <div>
                <Header />
                <form className='newArticle' onSubmit={this.handleSubmit} onChange={this.handleChange}>
                    <h2>Create an Article</h2>
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

                    <input type='submit' value={this.props.article ? "Update Article" : "Save Article"} />
                </form>

                <form className='newRecipe'>

                </form>
                <Footer />
            </div>
        )
    }
}

export default Form