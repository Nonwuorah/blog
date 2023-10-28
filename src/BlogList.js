import { Link } from "react-router-dom";
import pokeball from "./pokeball.png";

const BlogList = ({ blogs }) => {
  // const BlogList = (props) => {
  // const blogs = props.blogs;
  // const title = props.title;
  // const handleDelete = props.handleDelete;

  return (
    <div className="blog-list" style={{ height: "100%" }}>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <img src={pokeball} alt="A Pokeball" />
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>{blog.date}</p>
            <p>Written by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
