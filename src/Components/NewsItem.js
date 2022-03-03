import React from 'react'

const NewsItem = (props)=> {
  
       let {title,description,imageUrl,newsUrl,author,date,source} = props
        return (
            <div className="mx-4">
               <div className="card my-3"  >
               <span className="badge rounded-pill bg-dark" style={{display:'flex',justifyContent:'flex-end',position:'absolute',right:'0'}}>{source}</span>
  <img src={!imageUrl?"https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2021%2F1117%2Fr938530_1296x729_16%2D9.jpg":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toGMTString()}</small></p>
    <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-info">Read more</a>
  </div>
</div> 
            </div>
        )
  
}
export default NewsItem;


