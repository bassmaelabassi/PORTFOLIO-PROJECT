import logo from './logo.svg';
import './App.css';
import Header from './Header'
// import Contact from './Contact'
import Footer from './Footer'
import Projects from './Projects'
import about from './about'
function App() {
  return (
    <div className="App">
<Header/>
{/* <Contact/> */}
<Projects/>
<about/>
<Footer/>
    </div>
  );
}

export default App;
