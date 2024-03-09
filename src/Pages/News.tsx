import NewsBox from "../components/NewsBox/NewsBox";
import useNews from "../hooks/useNews";
import DateParser from "../utils/DataParser";

const News = () => {
  const { err, getNews, newsData } = useNews();

  console.log(newsData?.data[0]);
  return (
    <>
      <header
        style={{
          background: 'url("/newsBg.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
        className="flex h-[80vh] w-screen flex-col  items-center justify-center p-5 pt-32  md:p-24"
      >
        <h1 className="text-9xl uppercase font-heading">News</h1>
      </header>

      <main className="py-20 flex flex-col items-center gap-20 bg-slate-200 justify-center">
        <h3 className="text-5xl text-black  font-heading">Latest News</h3>
        <div className="flex gap-10 w-[80vw] flex-wrap justify-center items-center ">
          {newsData?.data.map((news) => {
            return (
              <NewsBox
                id={news._id}
                date={DateParser(`${news.createdAt}`)}
                heading={news.title}
                image={news.image}
                owner={news.createdBy}
                description={news.shortDescription || ""}
              />
            );
          })}
          <NewsBox
            date="12-oct-2020"
            heading="this is my first Blog: My life as a developer"
            image="e1.jpeg"
            owner="Even"
            description="This is the land of the rising sun and your desecration shell not be allow here me i am the god even and i now slay the imposters with sekey and expeled lie defilements"
          />
          <NewsBox
            date="12-oct-2020"
            heading="this is my first Blog: My life as a developer"
            image="e1.jpeg"
            owner="Even"
            description="This is the land of the rising sun and your desecration shell not be allow here me i am the god even and i now slay the imposters with sekey and expeled lie defilements"
          />
          <NewsBox
            date="12-oct-2020"
            heading="this is my first Blog: My life as a developer"
            image="e1.jpeg"
            owner="Even"
            description="This is the land of the rising sun and your desecration shell not be allow here me i am the god even and i now slay the imposters with sekey and expeled lie defilements"
          />

          <NewsBox
            date="12-oct-2020"
            heading="this is my first Blog: My life as a developer"
            image="e1.jpeg"
            owner="Even"
            description="This is the land of the rising sun and your desecration shell not be allow here me i am the god even and i now slay the imposters with sekey and expeled lie defilements"
          />

          <NewsBox
            date="12-oct-2020"
            heading="this is my first Blog: My life as a developer"
            image="e1.jpeg"
            owner="Even"
            description="This is the land of the rising sun and your desecration shell not be allow here me i am the god even and i now slay the imposters with sekey and expeled lie defilements"
          />

          <NewsBox
            date="12-oct-2020"
            heading="this is my first Blog: My life as a developer"
            image="e1.jpeg"
            owner="Even"
            description="This is the land of the rising sun and your desecration shell not be allow here me i am the god even and i now slay the imposters with sekey and expeled lie defilements"
          />

          <NewsBox
            date="12-oct-2020"
            heading="this is my first Blog: My life as a developer"
            image="e1.jpeg"
            owner="Even"
            description="This is the land of the rising sun and your desecration shell not be allow here me i am the god even and i now slay the imposters with sekey and expeled lie defilements"
          />

          <NewsBox
            date="12-oct-2020"
            heading="this is my first Blog: My life as a developer"
            image="e1.jpeg"
            owner="Even"
            description="This is the land of the rising sun and your desecration shell not be allow here me i am the god even and i now slay the imposters with sekey and expeled lie defilements"
          />

          <NewsBox
            date="12-oct-2020"
            heading="this is my first Blog: My life as a developer"
            image="e1.jpeg"
            owner="Even"
            description="This is the land of the rising sun and your desecration shell not be allow here me i am the god even and i now slay the imposters with sekey and expeled lie defilements"
          />
          <NewsBox
            date="12-oct-2020"
            heading="this is my first Blog: My life as a developer"
            image="e1.jpeg"
            owner="Even"
            description="This is the land of the rising sun and your desecration shell not be allow here me i am the god even and i now slay the imposters with sekey and expeled lie defilements"
          />
          <NewsBox
            date="12-oct-2020"
            heading="this is my first Blog: My life as a developer"
            image="e1.jpeg"
            owner="Even"
            description="This is the land of the rising sun and your desecration shell not be allow here me i am the god even and i now slay the imposters with sekey and expeled lie defilements"
          />
          <NewsBox
            date="12-oct-2020"
            heading="this is my first Blog: My life as a developer"
            image="e1.jpeg"
            owner="Even"
            description="This is the land of the rising sun and your desecration shell not be allow here me i am the god even and i now slay the imposters with sekey and expeled lie defilements"
          />
        </div>

        <nav aria-label="Page navigation example">
          <ul className="inline-flex -space-x-px text-sm">
            <li>
              <button className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                Previous
              </button>
            </li>
            <li>
              <button className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                1
              </button>
            </li>
            <li>
              <button className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                2
              </button>
            </li>
            <li>
              <button
                aria-current="page"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white2"
              >
                3
              </button>
            </li>
            <li>
              <button className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                4
              </button>
            </li>
            <li>
              <button className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                5
              </button>
            </li>
            <li>
              <button className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                Next
              </button>
            </li>
          </ul>
        </nav>
      </main>
    </>
  );
};

export default News;
