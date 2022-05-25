import "./App.css";
import Header from "./screens/components/Header";
import HomeScreen from "./screens/HomeScreen";
import Footer from "./screens/components/Footer";

function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <HomeScreen />
      </main>

      <Footer />
    </div>
  );
}

export default App;
