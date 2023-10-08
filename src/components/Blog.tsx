import BlogCard from "./BlogCard";
import "./blog.scss";
import { blogData } from "../constants/constant";

const Blog = () => {
   return (
      <section id="blog" className="blog">
         <h1>
            Tour <span>Blogs</span>
         </h1>
         <div className="bloglist">
            {blogData.map((blog) => {
               return <BlogCard key={blog.id} {...blog} />;
            })}
         </div>
      </section>
   );
};
export default Blog;
