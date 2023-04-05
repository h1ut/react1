import './App.css';
import Header from './components/Header/Header';  
import FirstBlock from './components/firstBlock/FirstBlock';
import SecondBlock from './components/secondBlock/SecondBlock';
import ThirdBlock from './components/ThirdBlock/ThirdBlock';
function App() {
  return (
    <>
    <Header/>
    <main>
      <FirstBlock/>
      <SecondBlock/>
      <ThirdBlock/>
    </main>
    <footer></footer> 
    </>
  );
}

export default App;
