import BlogList from "./BlogList";
import useFetch from "./useFetch";
//   const title = 'Welcome To My Blog';
//   const likes = 50;
//   const link = "https://react.dev/blog/2023/03/16/introducing-react-dev";

const Home = () => {
   const {error, isPending, data: blogs } = useFetch("http://localhost:5000/blogs");


  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
    </div>
  );
}

export default Home;