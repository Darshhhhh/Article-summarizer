import { logo } from "../assets";
const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 p-3">
        <img src={logo} alt="logo" className="w-28 object-contain" />
        {/* add github repo link to button*/}
        <button onClick={() => window.open("../")} className="black_btn">
          GitHub
        </button>
      </nav>
      <h1 className="head_text">
        Summerize Article With
        <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        " Our AI-powered article summarizer tool is perfect for professionals,
        academics, and researchers because it can swiftly and simply summarise
        lengthy articles with a few clicks. "
      </h2>
    </header>
  );
};

export default Hero;
