import './App.css';
import AddForm from './Components/AddForm';
import Balance from './Components/Balance';
import Header from './Components/Header';
import TransactionList from './Components/TransactionList';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Header />
        <Balance />
        <TransactionList />
        <AddForm />
      </div>
    </GlobalProvider>
  );
}

export default App;
