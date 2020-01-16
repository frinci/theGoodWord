import React, { Component } from 'react';
import Header from '../Header'
import Trending from '../../assets/Trending.png'
import Footer from '../Footer'
import axios from 'axios'
import '../../styles/Home.css'
import { Redirect } from 'react-router-dom'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            articles: [],
            recipes: [],
            redirect: false,
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

            // recipeInputs: {
            //     title: '',
            //     author: '',
            //     author_title: '',
            //     description: '',
            //     ingredients: '',
            //     category: '',
            //     content: '',
            //     img_url: ''
            // }
        }
    }

    componentDidMount() {
        this.getArticles()
        // this.getRecipes()
    }

    getArticles() {
        fetch('/articles')
            .then(response => response.json())
            .then(singleArticle => {
                this.setState({
                    articles: singleArticle
                })
            })

        // this.setState({
        //     articleInputs: {
        //         title: '',
        //         author: '',
        //         author_title: '',
        //         description: '',
        //         main_quote: '',
        //         category: '',
        //         content: '',
        //         img_url: ''
        //     }
        // })

    }

    // getRecipes() {
    //     fetch('http://localhost:/3000/recipes')
    //         .then(response => response.json())
    //         .then(json => console.log(json))
    //         .catch(error => console.error(error))
    // }

    async handleArticleAdd(event, articleInputs) {
        event.preventDefault();
        await axios.post('/articles', articleInputs)
        this.setState({
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

            // recipeInputs: {
            //     title: '',
            //     author: '',
            //     author_title: '',
            //     description: '',
            //     ingredients: '',
            //     category: '',
            //     content: '',
            //     img_url: ''
            // }
        })
        this.getArticles();
    }

    // async handleRecipeAdd(event, recipeInputs) {
    //     event.preventDefault();
    //     await axios.post('/recipes', recipeInputs)
    //     this.setState({
    //         recipeInputs: {
    //             title: '',
    //             author: '',
    //             author_title: '',
    //             description: '',
    //             ingredients: '',
    //             category: '',
    //             content: '',
    //         }
    //     })
    //     this.getRecipes();
    // }

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
        const { articles } = this.state
        const left = articles && [...articles].splice(0, articles.length / 2)
        const right = articles && [...articles].splice(articles.length / 2, articles.length - 1)
        
        return (
            <div>
                {redirect}
                <head>
                </head>
                <div>
                    <Header></Header>
                    <div className='body'>
                        <img src={Trending} alt="Trending Title" />
                        <div className="leftColumn">
                            {left.map(article =>
                                <div onClick={() => this.handleArticleClick(article.id)} className='mediumCard'>
                                    <h3>{article.title}</h3>
                                    <img src={article.img_url} alt="article header img" />
                                    <h4 className="mediumQuote">{article.main_quote}</h4>
                                    <p className='mediumDescription'>{article.description}</p>
                                </div>

                            )}
                        </div>
                        <hr />
                        <div className='rightColumn'>
                            {right.map(article =>
                                <div onClick={() => this.handleArticleClick(article.id)} classname="largeCard">
                                    <h2>{article.title}</h2>
                                    <img src={article.img_url} alt="article header img" />
                                    <h4 className="mediumQuote">{article.main_quote}</h4>
                                    <p className='mediumDescription'>{article.description}</p>
                                </div>
                            )}
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        )
    }
}

export default Home