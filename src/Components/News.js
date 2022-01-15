import React from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import propTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";
import App from '../App';
import "./News.css";


export class News extends React.Component {
    static defaultProps = {
        // country: "in",
        pageSize: 5,
        category: 'science'
    }
    static propTypes = {
        // country: propTypes.string,
        pageSize: propTypes.number,
        category: propTypes.string
    }

    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    apiKey= '5b34a67976114b3192a34ab0c60dfb13';


    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0
        }

        document.title = `${this.capitalizeFirstLetter(this.props.category)} - News Monkey`
    }


    async updateNews(props) {
        console.log(props)
        
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
    }

    fetchMoreData = async() => {
        this.setState({page: this.state.page +1})
        let url = `https://newsapi.org/v2/top-headlines?country=in&catergory=${this.props.category}&apiKey=${this.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
            loading: false
        })
      };

    async componentDidMount() {
        // let url = `https://newsapi.org/v2/everything?domains=wsj.com&catergory=${this.props.category}&apiKey=202fcca38be941fc97fb9fdc6a167cde&page=1&pageSize=${this.props.pageSize}`;
        // let url = `https://newsapi.org/v2/top-headlines?country=in&catergory=${this.props.category}&apiKey=202fcca38be941fc97fb9fdc6a167cde&page=1&pageSize=${this.props.pageSize}`;

        // let data = await fetch(url);
        // let parsedData = await data.json();
        // console.log(parsedData);
        // this.setState({articles: parsedData.articles, 
        //                totalResults: parsedData.totalResults,
        //                loading: false})

        this.updateNews();

    }

    handlePreviousClick = async () => {
        // let url = `https://newsapi.org/v2/everything?domains=wsj.com&catergory=${this.props.category}&apiKey=202fcca38be941fc97fb9fdc6a167cde&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
        // let url = `https://newsapi.org/v2/top-headlines?country=in&catergory=${this.props.category}&apiKey=202fcca38be941fc97fb9fdc6a167cde&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
        // console.log("Data is fetching");
        // this.setState({loading: true});
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // console.log("Data is fetching");

        // this.setState({
        //     articles: parsedData.articles,
        //     page: this.state.page - 1,
        //     loading: false})
        this.setState({ page: this.state.page - 1 })
        this.updateNews();

    }

    handleNextClick = async () => {
        // if (!(this.state.page+1 > Math.ceil(this.state.totalResults/20))){
        //     this.setState({loading: true});
        // let url = `https://newsapi.org/v2/everything?domains=wsj.com&catergory=${this.props.category}&apiKey=202fcca38be941fc97fb9fdc6a167cde&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        // let url = `https://newsapi.org/v2/top-headlines?country=in&catergory=${this.props.category}&apiKey=202fcca38be941fc97fb9fdc6a167cde&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;

        // let data = await fetch(url);
        // let parsedData = await data.json();
        // this.setState({
        //     articles: parsedData.articles,
        //     page: this.state.page + 1,
        //     loading: false})
        this.setState({ page: this.state.page + 1 })
        this.updateNews();

    }

    render() {
        return (

            <>
                    {/* <h1 className="text-center">{this.capitalizeFirstLetter(this.props.category)} Section</h1> */}
                    {/* <hr /> */}
                    {/* {this.state.loading && <Spinner />} */}
                    <InfiniteScroll
                        dataLength={this.state.articles.length}
                        
                        next={this.fetchMoreData}
                        hasMore={this.state.articles.length !== this.state.totalResults}
                        loader={<Spinner/>}
                    >
                        <div className="container-fluid newsCard">
                        {/* <div className="row"> */}
                            {/* {!this.state.loading &&  */}
                            {this.state.articles.map((element) => { 
                                return <div className=" my-3" key={element.url}>
                                    <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} urlImage={element.urlToImage} newsUrl={element.url} author={element.author ? element.author : "Unknown"} date={element.publishedAt} />
                                </div>

                            })}
                        {/* </div> */}
                        </div>
                    </InfiniteScroll>
                {/* <div className="container d-flex justify-content-between my-5">
                <button disabled={this.state.page <= 1} type="button" class="btn btn-dark" onClick={this.handlePreviousClick}> &larr; Previous</button>
                <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" class="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
            </div> */}
            </>
        )
    }
}

export default News

// col-md-3 col-sm-6
