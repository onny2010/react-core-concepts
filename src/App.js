import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Popeye', 'Tom Cruise', 'Kopila', 'Newaj Uddin', 'Tamim'];

  const cinemas = [
    { name: 'Padma nodir majhi', nayok: 'koober', nayika: 'Kopila' },
    { name: 'Mission Impossible', nayok: 'Tom Cruise', nayika: 'Jennifer Lopez' },
    { name: 'Barfi', nayok: 'Ranveer Kapoor', nayika: 'Leana De Cruiz' },
    { name: 'Gangs of Wasseypur', nayok: 'Newaj Uddin Siddiqui', nayika: 'Huma Qureshi' }
  ]

  return (
    <div className="App">
      <ul>
        {
          nayoks.map(nayok => <li>{nayok}</li>)
        }
      </ul>
      {/* <Cinema name="Gotham" nayok="Bat Man" nayika="Cat Woman"></Cinema> */}
      {
        cinemas.map(cinema => <Cinema name={cinema.name} nayok={cinema.nayok} nayika={cinema.nayika}></Cinema>)
      }
    </div>
  );
}

/*
// E.G: 1st
      <a href="https://google.com/">google.com</a>
      <p id="title">Title</p>
      <Person name="Popeye" job="Singer"></Person>
      <Person name="Tom Cruise" job="Acting"></Person>
      <Person name="Kopila" job="nayika"></Person>
*/

/*
// E.G: 2nd
      <Friend phone="017000000" address="New York"></Friend>
      <Friend phone="018922220" address="Sydney"></Friend>
      <Friend phone="016874788" address="Dinajpur"></Friend>
      <Friend phone="019999999" address="Dhaka"></Friend>
*/

/*
// E.G: 3rd
      <Person name={nayoks[0]} job="Singer"></Person>
      <Person name={nayoks[1]} job="Acting"></Person>
      <Person name={nayoks[2]} job="nayika"></Person>
*/

function Person(props) {
  console.log(props);
  const person = {
    backgroundColor: 'skyblue',
    border: '3px solid lightsalmon',
    margin: '20px',
    borderRadius: '20px'
  }
  return (
    // <div className="person">
    <div style={person}>
      <h1>Name: {props.name}</h1>
      <h4>Proffession: {props.job}</h4>
    </div>
  );
}

function Friend(props) {
  return (
    <div className="person">
      <h3>Phone:{props.phone} </h3>
      <h5>Address:{props.address} </h5>
    </div>
  );
}

function Cinema(props) {
  return (
    <div className="person">
      <h2>Cinema: {props.name}</h2>
      <h3>Nayok: {props.nayok}</h3>
      <h3>Nayika: {props.nayika}</h3>
    </div>
  );
}

export default App;
