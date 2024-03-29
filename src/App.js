import React, { useState } from 'react'
import NavBar  from './Components/NavBar'
import News  from './Components/News'
import LoadingBar from 'react-top-loading-bar'
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"

const App =()=> {
  const pageSize=5 
  const  apiKey=process.env.REACT_APP_NEWS_API

  const [progress, setProgress] = useState(0)

    return (
      <div>
       <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
        
      />
       
       <Router>
       <NavBar/>
        <Routes>
        <Route exact path="/" element={<News setProgress={setProgress}    apiKey={apiKey}   key="general"  pageSize={pageSize} country="in" category="general"/>} />
        <Route exact path="/business" element={<News setProgress={setProgress}    apiKey={apiKey}   key="business" pageSize={pageSize} country="in" category="business"/>} />
        <Route exact path="/entertainment" element={<News setProgress={setProgress}    apiKey={apiKey}   key="entertainment" pageSize={pageSize} country="in" category="entertainment"/>} />
        <Route exact path="/general" element={<News setProgress={setProgress}    apiKey={apiKey}   key="general" pageSize={pageSize} country="in" category="general"/>} />
        <Route exact path="/health" element={<News setProgress={setProgress}    apiKey={apiKey}   key="health" pageSize={pageSize} country="in" category="health"/>} />
        <Route exact path="/science" element={<News setProgress={setProgress}    apiKey={apiKey}    key="science" pageSize={pageSize} country="in" category="science"/>} />
        <Route exact path="/sports" element={<News setProgress={setProgress}    apiKey={apiKey}   pageSize={pageSize} key="sports" country="in" category="sports"/>} />
        <Route exact path="/technology" element={<News setProgress={setProgress}    apiKey={apiKey}   key="technology" pageSize={pageSize} country="in" category="technology"/>} />
      </Routes>
       </Router>
      </div>
    )
   
}
export default App

