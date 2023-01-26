import './App.css';
import MyClass from './MyClass';
import MyFunction from './MyFunction';
import MyHook from './MyHook';

function App() {
  let name="React";
  return (
    <div className="App">
      <h1>{name} esimerkki</h1>
      <MyFunction fname="Teppo" lname="Testi"/>
      <MyHook fname="Aino"/>
      <MyClass fname="Matti"/>
    </div>
  );
}

export default App;
