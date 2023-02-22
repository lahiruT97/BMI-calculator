import Header from './components/Header';
import InputBox from './components/InputBox'

function App() {
  return (
    <div className="App">
      <Header/>
      <InputBox text1="Weight in kg" text2="Height in m"/>
    </div>
  );
}

export default App;
