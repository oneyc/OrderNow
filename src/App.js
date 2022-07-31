import Card from "./component/Card.js";
import Header from "./component/Header.js";
import Searchbar from "./component/Searchbar.js";
import apiData from './data/apiData'

function App() {

  const CardMapping = apiData.data.map(data => {
    return (
      <Card data={data}/>
    )
  })

  return (
    <div className="App">
      <Header />
      <div style={{maxWidth: '1500px', margin: '0 auto'}}>
        <Searchbar/>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap'}}>      
          {CardMapping}
       </div>
      </div>




    </div>
  );
}

export default App;
