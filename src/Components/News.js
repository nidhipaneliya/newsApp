import React, {useState,useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News= (props)=> {
  // document.title = `${this.CapitalizeFirstLetter(
  //   props.category
  // )}-NewsMonkey`;
  const CapitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.substr(1).toLowerCase();
  };
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
 
  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey
=66290d9e09124609b036935d82905c5f&page=${page}&pagesize=${props.pagesize}`;
    //  this.setState({loading:true})
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    console.log(parsedData);
    setArticles(parsedData.articles);
    setTotalResults( parsedData.totalResults);
    setLoading(false)
    
    props.setProgress(100);
  };
  useEffect(() => {
    updateNews();
    // eslint-disable-next-line
    
    
  }, [])
 
  const fetchMoreData = async () => {
    setPage(page+1)

    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pagesize}`;
    setLoading(true);


    let data = await fetch(url);
    let parsedData = await data.json();
    setPage(page+1)

    setArticles(articles.concat(parsedData.articles));
    setTotalResults( parsedData.totalResults);
    setLoading(false)
   
  };
  // const handlePrevClick = async () => {
  //   setPage(page-1)
  //   updateNews();
  // };
  // const handleNextClick = async () => {
  //   setPage(page+1)
  //   updateNews();
  // };

  
    return (
      <>
        
          <h1 className="text-center" style={{ margin: "35px 0px",marginTop:"90px"}}>
            NewsMonkey-Top {CapitalizeFirstLetter(props.category)}{" "}
            Headline{" "}
          </h1>
          {loading&&<Spinner/>}
          <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length !== totalResults}
            loader={<Spinner />}
          >
          <div className="container">


            <div className="row">
              {articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title : ""}
                      description={
                        element.description ? element.description : ""
                      }
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={!element.author ? "Unknown" : element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
            </div>
          </InfiniteScroll>
        
        {/* <div className="container d-flex justify-content-between mb-1">
        <button disabled ={this.state.page<=1}type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&#8592;	Previous</button>
        <button disabled={this.state.page + 1>Math.ceil(this.state.totalResults/props.pagesize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next  &#8594;	</button>

        </div> */}
      </>
    );
  
}
export default News;
News.defaultProps = {
  country: "in",
  pagesize: 5,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pagesize: PropTypes.number,
  category: PropTypes.string,
};