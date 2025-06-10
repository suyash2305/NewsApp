import React, { Component } from 'react'
import './NewsItem.css';

export class NewsItem extends Component {


  render() {
    let {title,discription,img,url}=this.props;

    return (
      <div>
        
      <div id="outer_n"> 
        <div id="n_item">
          <img id="img" src={!img?"https://www.presse-citron.net/app/uploads/2025/01/MY_New_Spain.jpg" : img}></img>
          <h5>{title}...</h5>
          <p >{discription}...</p>
          <a className='btn btn-primary' href={url} target='blanck'>read more</a>
        </div>

      </div>
      </div>
      
      
    )
  }
}

export default NewsItem