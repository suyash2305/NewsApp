import React, { Component } from 'react'

import './News.css'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'


export class News extends Component {

    static defaultProps={
      country:'in',
      category:'general',

    }
    static propTypes={
        country:PropTypes.string,
        category:PropTypes.string,
    }

articles=[
        {
            "source": {
                "id": "espn",
                "name": "ESPN"
            },
            "author": null,
            "title": "Mikko Rantanen's hat trick rallies Dallas Stars in Game 7 - ESPN",
            "description": "Mikko Rantanen scored three goals in the third period, and the Dallas Stars utilized a furious rally to advance to the second round of the Stanley Cup playoffs, defeating the Colorado Avalanche 4-2 in Game 7 on Saturday night at American Airlines Center.",
            "url": "https://www.espn.com/nhl/story/_/id/44988465/mikko-rantanen-hat-trick-rallies-dallas-stars-game-7",
            "urlToImage": "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2025%2F0504%2Fr1487708_1296x729_16%2D9.jpg",
            "publishedAt": "2025-05-04T03:17:00Z",
            "content": "DALLAS -- Mikko Rantanen scored three goals in the third period, and the Dallas Stars utilized a furious rally to advance to second round of the Stanley Cup playoffs, defeating the Colorado Avalanche… [+2316 chars]"
        },
        {
            "source": {
                "id": "fox-sports",
                "name": "Fox Sports"
            },
            "author": null,
            "title": "Nuggets advance to play Thunder with Game 7 laugher over stunned Clippers",
            "description": "The Denver Nuggets’ second-half lead was way too big for them to fritter away this time as they routed the Los Angeles Clippers 120-101 on Saturday night.",
            "url": "https://www.foxsports.com/stories/nba/nikola-jokic-russell-westbrook-denver-nuggets-game-7-los-angeles-clippers-wall",
            "urlToImage": "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2025/05/1408/814/russell-westbrook-vs-clippers.jpg?ve=1&tl=1",
            "publishedAt": "2025-05-04T02:34:06Z",
            "content": "Nikola Jokic got plenty of help from his teammates and the Denver Nuggets werent about to let up when they built a big lead and raced past the Los Angeles Clippers in a 120-101 Game 7 laugher Saturda… [+4014 chars]"
        },
        {
            "source": {
                "id": "espn",
                "name": "ESPN"
            },
            "author": null,
            "title": "Nuggets crush Clippers in Game 7, set up series vs. Thunder - ESPN",
            "description": "The Nuggets, with a Game 7 loss at home last season to the Timberwolves fresh in their memories, blew out the Clippers in the second half to clinch the series.",
            "url": "https://www.espn.com/nba/story/_/id/44987860/nuggets-crush-clippers-game-7-set-series-vs-thunder",
            "urlToImage": "https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2025%2F0504%2Fr1487686_1023x575_16%2D9.jpg",
            "publishedAt": "2025-05-04T02:20:00Z",
            "content": "DENVER -- Nikola Jokic got plenty of help from his teammates and the Denver Nuggets weren't about to let up when they built a big lead and raced past the LA Clippers in a 120-101 Game 7 laugher Satur… [+3096 chars]"
        },
        {
            "source": {
                "id": "fox-sports",
                "name": "Fox Sports"
            },
            "author": null,
            "title": "Twins' Kody Clemens homers in 1st Fenway game in front of father, Roger Clemens",
            "description": "Kody Clemens, the son of former Red Sox pitcher Roger Clemens, homered into the right-field seats in the sixth inning during his first game at Fenway Park.",
            "url": "https://www.foxsports.com/stories/mlb/twins-kody-clemens-father-roger-homers-fenway-red-sox",
            "urlToImage": "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2025/05/1408/814/kody-clemens.jpg?ve=1&tl=1",
            "publishedAt": "2025-05-04T01:02:30Z",
            "content": "Kody Clemens hit a two-run homer in his first game at Fenway Park with his famous father in attendance and the Minnesota Twins beat the Boston Red Sox 4-3 on Saturday.\r\nWith former Red Sox ace Roger … [+2254 chars]"
        },
        {
            "source": {
                "id": "fox-sports",
                "name": "Fox Sports"
            },
            "author": null,
            "title": "20-year-old man who fell to the warning track at Pirates-Cubs game is awake",
            "description": "The fan who fell from the Clemente Wall at PNC Park during Wednesday night's Cubs-Pirates game is awake and alert.",
            "url": "https://www.foxsports.com/stories/mlb/fan-falls-21-foot-clemente-wall-pnc-park-pittsburgh-cubs-pirates-game",
            "urlToImage": "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2025/04/1408/814/mccutchen-kneeling.jpg?ve=1&tl=1",
            "publishedAt": "2025-05-03T23:47:22Z",
            "content": "The man who fell from the top of a 21-foot-high wall onto the warning track at PNC Park during a game between the Pittsburgh Pirates and the Chicago Cubs on Wednesday night is awake and alert.\r\nThe o… [+4319 chars]"
        }
      ]


      constructor(){
        super();

        console.log("hello i am a constructer");
        this.state= {
          articles:this.articles,
          loading:false,
        }
      }

 async componentDidMount(){
  let url=`https://newsapi.org/v2/everything?q=${this.props.category}&apiKey=1be1a3dda32648b387d9aafeff9efaaa`;
  this.setState({loading:true})
  let data=await fetch(url);
  let final_data= await data.json();
  this.setState({ articles : final_data.articles,
                  loading:false})

}


// handel_previous= async ()=>{
// this.setState({
//   page:this.state.page-1,

// })
// }

// handel_Next = async ()=>{
//   let url="https://newsapi.org/v2/everything?q=tesla&from=2025-05-01&sortBy=publishedAt&&category${this.props.category}&apiKey=1be1a3dda32648b387d9aafeff9efaaa";
// let data= await fetch(url);
// let final_data=await data.json();
// console.log(final_data);
// this.setState({articles:final_data.articles})
// this.setState({
//   page:this.state.page+1,

// })
// }



  render() {
    return (
     <div>
      <h1 className="text-center" >Top Headlines</h1>
      {this.state.loading && <Spinner/>}
       {this.state.articles.map((element)=>{
            return   <div id="first_con" key={element.url}>
            <NewsItem title={element.title?element.title.slice(0,58):" "} discription={element.description?element.description.slice(0,100):" "} img={element.urlToImage} url={element.url}/>
           </div>
       })}
  
{/* <br></br>
  <div className="d-flex justify-content-center"
  ><button type="button" class="btn btn-primary" >Previous</button>
 <button type="button" class="btn btn-dark" onClick={handel_Next}>next</button></div> */}

     </div>
    )
  }
}

export default News