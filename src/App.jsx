import "./App.css";
import Demo from "./components/Demo";
import Hero from "./components/Hero";
const App = () => {
  const FooterDate = new Date();
  console.log(FooterDate.getFullYear());
  return (
    <main className="scroll-smooth">
      <div className="main ">
        <div className="gradient"></div>
      </div>
      <div className="app">
        <Hero />
        <Demo />
      </div>
      <footer className="mx-auto w-full max-w-container px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm leading-6 text-slate-500">
          © {FooterDate.getFullYear()} Darshhhhh. All rights reserved.
        </p>
      </footer>
    </main>
  );
};
export default App;
