import Header from "./components/Header";
import Main from "./components/Main";
function App() {
  return (
    <div className="bg-slate-900 h-full flex flex-col md:flex-row">
      <Header />
      <Main />
    </div>
  );
}

export default App;
