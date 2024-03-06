import NewsBox from "../components/NewsBox/NewsBox";

const News = () => {
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

      <main className="py-40 flex justify-center">
        <div className="w-80"></div>
        <div className="w-96">
          <NewsBox
            date="12-oct-2020"
            heading="My first Blog"
            image="e1.jpeg"
            owner="Even"
          />
        </div>
        <div className="w-80"></div>
      </main>
    </>
  );
};

export default News;
