import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class NewsFeed extends Component {
 
constructor(){

  super();
  this.state = {
    page: 1,
   articles:[]
  
  }
}

async componentDidMount() {

  
  let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=14315596c13d42a0b2631db59bc66abf&pageSize=9`;
  let data = await fetch(url);
  let parsedData = await data.json()
  this.setState({articles: parsedData.articles,
    totalArticles: parsedData.totalResults
  })

}

handleprevPage = async ()=> {

  if(this.state.page + 1>Math.ceil(this.state.totalResults/9)){}
  else
 { let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=14315596c13d42a0b2631db59bc66abf&page=${this.state.page - 1}&pageSize=9`;
  let data = await fetch(url);
  let parsedData = await data.json()
  this.setState({
    page: this.state.page - 1,
    articles: parsedData.articles
  })}
}

handlenextPage = async ()=> {

  let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=14315596c13d42a0b2631db59bc66abf&page=${this.state.page + 1}&pageSize=9`;
  let data = await fetch(url);
  let parsedData = await data.json()
  this.setState({
    page: this.state.page + 1,
    articles: parsedData.articles
  })
}


  render() {

    return (
      <>
      <div className='container'>
        <div className='row'>

        {this.state.articles.map((element)=> {

        return  <div className='col md-3' key={element.url}>
<NewsItem  title={element.title?element.title.slice(0, 70): ""} description={element.description?element.description.slice(0, 150): ""} imageUrl={element.urlToImage} 
newsUrl={element.url} />
          </div>  

        })}
          
        </div>
        <div className='container'>
        <div className="d-flex justify-content-around">
        <button disabled={this.state.page<=1}  type="button" className="btn btn-primary my-2" onClick={this.handleprevPage}> Previous </button>
        <button disabled={this.state.page + 1>Math.ceil(this.state.totalResults/9)} type="button" className="btn btn-primary my-2" onClick={this.handlenextPage}> Next </button>
        </div>
        </div>
        </div>
      </>
    )
  }
}
