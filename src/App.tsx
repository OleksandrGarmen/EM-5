import './App.css'
import newsData from './fixture/news';
import News from './components/News'
import BlogData from './fixture/blog';
import Blog from './components/Blog'
function App() {


  return (
    <>
   <News {...newsData[0]} />
    <News {...newsData[1]} />
    <News {...newsData[2]} />
    <News {...newsData[3]} />
    <News {...newsData[4]} />
    <News {...newsData[5]} />
    <News {...newsData[6]} />
    <News {...newsData[7]} />
    

    <Blog {...BlogData[0]} />
    </>
  )
}

export default App
