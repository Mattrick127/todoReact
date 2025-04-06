import Filter from '../components/Filter.jsx';
import TodosList from '../components/TodosList.jsx';

function Home() {

    return (
    <>
        <div className="container">
            <Filter />
        
            <TodosList />
        </div>

        <FooterFilters />
    </>
    )
  }
  
  export default Home
