import PostItem from "./index.js";
import Posts from "./Post.js";

const PostList = () => {
    return(`
        ${Posts.map((post) => PostItem(post)).join("")}
    `);
};

export default PostList;