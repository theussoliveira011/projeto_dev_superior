import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./components/header";
import SalesCard from "./components/salesCard";

function App() {
  return (
    < >
      <ToastContainer />
      <Header />
      <main>
        <section id="sessao-principal">
          <div className="sessao-vendas">
            <SalesCard />
          </div>
        </section>
      </main>
    </>
  )
};

export default App;
