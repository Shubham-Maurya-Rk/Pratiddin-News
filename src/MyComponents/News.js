import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
    static defaultProps = {
        country: "in",
        pageSize: 6,
        category: "health"
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            page: 1,
            totalResults: "",
            loading: true
        }
        document.title = `${this.props.category[0].toUpperCase() + this.props.category.slice(1)} - Pratidinn News`;
    }
    async updateNews() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0852472cb4c64f058e3e5dc17a803808&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false,page:this.state.page+1});
    }
    async componentDidMount() {
        this.updateNews();
    }
    fetchMoreData =async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0852472cb4c64f058e3e5dc17a803808&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: this.state.articles.concat(parsedData.articles), totalResults: parsedData.totalResults,page:this.state.page+1});
      };

    render() {
        return (<>
            <div className="container">
                <h1 className='text-center mt-4'>{this.props.category[0].toUpperCase() + this.props.category.slice(1)} - Top Headlines!</h1>
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.articles.totalResults}
                    loader={<Spinner/>}
                >
                    <div className="row">
                        {this.state.articles.map((e) => {
                            return (<div className="col-md-4" key={e.url}>
                                <NewsItem title={e.title} content={e.description} imageUrl={e.urlToImage} url={e.url} author={e.author} date={e.publishedAt} source={e.source.name} />
                            </div>) 
                        })}
                    </div>
                </InfiniteScroll>

            </div>
        </>)
    }
}
