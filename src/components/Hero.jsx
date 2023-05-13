import logo from "../assets/ai-logo.png";
import aiImg from "../assets/ai-img-2.png";
const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 p-3">
        <img src={logo} alt="logo" className="w-[50px] object-contain" />
        {/* add github repo link to button*/}
        <button
          onClick={() =>
            window.open("https://github.com/Darshhhhh/Article-summarizer")
          }
          className="black_btn"
        >
          GitHub
        </button>
      </nav>
      <h1 className="head_text">
        Summerize Your Article With
        <br className="max-md:hidden" />
      </h1>
      <div className="flex justify-center items-baseline gap-4">
        <h1 className="head_text orange_gradient">OpenAI</h1>
        <img src={aiImg} alt="ai-logo" className="w-[50px] object-contain" />
      </div>
      <h2 className="desc">
        " Our AI-powered article summarizer tool is perfect for professionals,
        academics, and researchers because it can swiftly and simply summarise
        lengthy articles with a few clicks. "
      </h2>
    </header>
  );
};

export default Hero;
