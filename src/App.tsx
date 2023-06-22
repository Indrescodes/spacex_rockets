import { SearchTableContainer } from './App';
import './App.ts';
import SearchTable from './components/organisms/SearchTable';

function App() {
  return (
    <>
      <SearchTableContainer>
        <SearchTable rockets={[]} />
      </SearchTableContainer>
    </>
  );
}

export default App;
