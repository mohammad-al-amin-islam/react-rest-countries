import './App.css';
import Countries from './components/Countries/Countries';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Countries></Countries>
      <Footer></Footer>
    </div>
  );
}









/* function LoadCountries() {
  const [countries, setCountries] = useState([])
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data));
  }, [])
  return (
    <div>
      <h1>Visiting Every Country In The World</h1>
      <h3>Total Countries: {countries.length}</h3>
      {
        countries.map(country => <Country name={country.name.common} population={country.population}></Country>)
      }
    </div>
  )
}
function Country(props) {
  return (
    <div>
      <h2>Name :{props.name}</h2>
      <h5>Population : {props.population}</h5>
    </div>
  )
}
 */
export default App;
