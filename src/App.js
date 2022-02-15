import Header from './components/header/Header'
import Cards from './components/cards/Cards'
import Content from './components//content/Content'
import Heading from './components/heading/Heading';
import Blog from './components/blog/Blog'
import Feature from './components/feature/Feature'
import Button from './components/buttons/Button'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
    <Header/>
    <Cards/>
    <Content/>
    <Heading/>
    <Blog/>
    <Feature/>
    <Button/>
    </div>
  );
}

export default App;
