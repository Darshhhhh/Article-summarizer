import { useEffect, useState } from "react";
import { copy, linkIcon, loader, tick } from "../assets";
import { useLazyGetSummaryQuery } from "../services/article";
const Demo = () => {
  const [Article, setArticle] = useState({
    url: "",
    summary: "",
  });
  const [allArticles, setAllArticles] = useState([]);
  const [copied, setCopied] = useState("");
  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();
  useEffect(() => {
    const articleFromLocal = JSON.parse(localStorage.getItem("articles"));
    if (articleFromLocal) {
      setAllArticles(articleFromLocal);
    }
  }, []);
  const handleSubmmit = async (e) => {
    e.preventDefault();
    const { data } = await getSummary({ articleUrl: Article.url });
    if (data?.summary) {
      const newArticle = { ...Article, summary: data.summary };
      const updatedArticles = [newArticle, ...allArticles];
      setArticle(newArticle);
      setAllArticles(updatedArticles);
      localStorage.setItem("articles", JSON.stringify(updatedArticles));
    }
  };

  const ClickToCopy = (copyText) => {
    setCopied(copyText);
    navigator.clipboard.writeText(copyText);
    setTimeout(() => setCopied(false), 3000);
  };
  return (
    <section className="mt-16 w-full max-w-xl">
      <div className="flex flex-col w-full gap-2">
        <form
          className="relative flex justify-center items-center"
          onSubmit={handleSubmmit}
        >
          <img
            src={linkIcon}
            alt="link_Icon"
            className="absolute left-0 my-2 ml-3 w-5"
          />
          <input
            type="url"
            placeholder="Enter URL..."
            value={Article.url}
            onChange={(e) => setArticle({ ...Article, url: e.target.value })}
            required
            className="url_input peer"
          />
          <button
            type="submit"
            className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M8.5 3.528v4.644c0 .729-.29 1.428-.805 1.944l-1.217 1.216a8.75 8.75 0 013.55.621l.502.201a7.25 7.25 0 004.178.365l-2.403-2.403a2.75 2.75 0 01-.805-1.944V3.528a40.205 40.205 0 00-3 0zm4.5.084l.19.015a.75.75 0 10.12-1.495 41.364 41.364 0 00-6.62 0 .75.75 0 00.12 1.495L7 3.612v4.56c0 .331-.132.649-.366.883L2.6 13.09c-1.496 1.496-.817 4.15 1.403 4.475C5.961 17.852 7.963 18 10 18s4.039-.148 5.997-.436c2.22-.325 2.9-2.979 1.403-4.475l-4.034-4.034A1.25 1.25 0 0113 8.172v-4.56z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </form>
        <div className="flex flex-col gap-1 max-h-60 overflow-y-auto">
          {allArticles.map((items, index) => (
            <div
              key={`link-${index}`}
              onClick={() => setArticle(items)}
              className="link_card"
            >
              <div className="copy_btn" onClick={() => ClickToCopy(items?.url)}>
                <img
                  src={copied === items.url ? tick : copy}
                  alt="copy_icon"
                  className="w-[40%] h-[40%] object-contain"
                />
              </div>
              <p className="flex-1 text-blue-700 font-medium text-sm truncate">
                {items.url}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="my-10 max-w-full flex justify-center items-center">
        {isFetching ? (
          <img src={loader} alt="loader" className="w-20 h-20 object-contain" />
        ) : error ? (
          <p className="font-bold text-black text-center">
            Opps!! AI is Sleeping Try Again💤...
            <br />
            <span className="font-normal text-gray-700">
              {error?.data?.error}
            </span>
          </p>
        ) : (
          Article?.summary && (
            <div className="flex flex-col gap-3">
              <h2 className="font-bold text-gray-600 text-xl">
                Article <span className="blue_gradient">Summary</span>
              </h2>
              <div className="summary_box">
                <p className="font-medium text-sm text-gray-700">
                  {Article?.summary}
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Demo;
