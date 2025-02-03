import logo from './logo.svg';
import './App.css';
import Header from './Header'
// import Contact from './Contact'
import Footer from './Footer'
import Projects from './Projects'
import About from './About'
function App() {
  return (
    <div className="App">
<Header/>
{/* <Contact/> */}
<Projects/>
<About />
<Footer/>
    </div>
  );
}

export default App;
