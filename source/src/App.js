import Header from './components/header/Header';
import { ModalContextProvider } from './resources/scripts/ModalContext';
import './App.scss';

function App() {

  return (

    <div className='wrapper'>
      <ModalContextProvider> 
        <Header/>
      </ModalContextProvider>
    </div>

  )
}

export default App;