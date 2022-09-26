import './App.scss';
import { DatePicker} from 'antd';
import { Card } from 'antd';

function App() {
  const test = (date, dateString) =>{
    console.log(date, dateString);
  }

  return (
    <div className="App">
      <header className="App-header">
      
       <h1>Se inicio el servidor a la perfección</h1>
       <DatePicker onChange={test}/>

       
       <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
      </header>
    </div>
  );
}

export default App;
