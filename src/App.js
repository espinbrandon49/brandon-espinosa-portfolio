// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Main from './components/Main'
import Contact from './components/Contact'

const styles = {
  width: {
    maxWidth: "1200px",
    margin: "0 auto"
  },
}

function App() {
  return (
    <div className="App" style={styles.width}>
      <Header />
      <Main />
      <Contact />
    </div>
  );
}

export default App;

//stu-24 to switch pages
