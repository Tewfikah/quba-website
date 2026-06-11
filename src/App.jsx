import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";

function App() {
  return (
    <div>
      <Navbar />
      <main className="pt-20">
        <Hero />
      </main>
    </div>
  );
}

export default App;