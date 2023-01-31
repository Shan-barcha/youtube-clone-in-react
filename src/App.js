import React from "react";
import SearchBar from "./components/SearchBar";
import Youtube from "./components/apis/Youtube";
import VideosList from "./components/VideosList";
import VideoDetail from "./components/VideoDetail";
import Navbar from "./Navbar";

class App extends React.Component {
    state = { videos :[], selectedVideo : null }

    componentDidMount(){
      this.onTermsubmit('javascript')
    }

   onTermsubmit = async (term)=>{
   const response = await Youtube.get('/search', {
    params : {
        q : term
    }
  })
  // console.log( this.state.videos)
    this.setState({videos: response.data.items,
      selectedVideo : response.data.items[0]
    });

    };
    onVideoSelect =(video)=>{
     this.setState({selectedVideo :video})
  }

  render(){
    return(
      <>
      <Navbar />
   
    <div className="App ui container ">
        <SearchBar onFormSubmit={this.onTermsubmit}/>
        <div className="ui grid">
      <div className=" ui row">
        <div className="eleven wide column">
        <VideoDetail video={this.state.selectedVideo} />
        </div>
        <div className="five wide column">
     <VideosList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
     </div>
     </div>
     </div>
    </div>
    </>
    )
}
}
export default App;

