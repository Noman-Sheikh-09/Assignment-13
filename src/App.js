import Header from './components/header/Header'
import Cards from './components/cards/Cards'
import Content from './components//content/Content'
import Button from './components/buttons/Button'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <Header />
      <Cards />
      <Content />
      <Button />
    </div>
  );
}

export default App;
