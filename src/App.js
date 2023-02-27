import axios from "axios";
import { useEffect, useState } from "react";
import './App.css';
const URL = 'https://dog.ceo/api/breed';

function App() {

  const [message, setMessage] = useState('Loading');
  const [values, setValues] = useState([]);
  const [options, setOptions] = useState('affenpinscher');

  useEffect(() => {
    const address = URL + "/" + options + "/images/random";
    axios.get(address)
      .then((response) => {
        setMessage(response.data.message);
      }).catch(error => {
        console.log(error);
      });

  }, [options])

  useEffect(() => {
    axios.get("https://dog.ceo/api/breeds/list")
      .then((response) => {
        setValues(response.data.message);
      }).catch(error => {
        console.log(error);
      });
  }, [values]) 

  return (
    <div>
      <div><h1>Random dog picture by breed</h1></div>
      <div>
        <select onChange={e => setOptions(e.target.value)} >
          {
            values.map((options, i) => <option key={i}>{options}</option>)
          }
        </select>
      </div><br />
      <img src={message} alt="" />
    </div>
  );
}

export default App;