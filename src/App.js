import React, { useState } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
const  App = ()=> {
 const apiKey='787f376a0d8c40889d2b940db75084c9'
  const [progress, setProgress] = useState(0)
    return (
      <div>
        <Router>
        <Navbar/> 
        <Switch>
          <Route exact path="/"><News  apiKey={apiKey} setProgress={setProgress} key="general" pageSize={5} country="in" category="general"/></Route> 
          <Route exact path="/business"><News  apiKey={apiKey} setProgress={setProgress} key="business" pageSize={5} country="in" category="business"/></Route> 
          <Route exact path="/entertainment"><News  apiKey={apiKey}setProgress={setProgress} key="entertainment" pageSize={5} country="in" category="entertainment"/></Route> 
          <Route exact path="/general"><News apiKey={apiKey} setProgress={setProgress} key="general" pageSize={5} country="in" category="general"/></Route> 
          <Route exact path="/health"><News setProgress={setProgress} key="health" pageSize={5} country="in" category="health"/></Route> 
          <Route exact path="/science"><News apiKey={apiKey} setProgress={setProgress} key="science" pageSize={5} country="in" category="science"/></Route> 
          <Route exact path="/sports"><News apiKey={apiKey} setProgress={setProgress} key="sports" pageSize={5} country="in" category="sports"/></Route> 
          <Route exact path="/technology"><News apiKey={apiKey} setProgress={setProgress} key="technology" pageSize={5} country="in" category="technology"/></Route> 
        </Switch>
        </Router>
        <LoadingBar
        color='#f11946'
        progress={progress}
      />
      </div>
    )
  }
  export default App
  // https://newsapp-8174d.web.app
