import posts from "./posts.js";
import PostSummaryItem from "./PostSummaryItem.js";

const PostSummaryList = () => {
   return(`
        <div class="mt-2 bg-light list-group">    
        ${posts.map(PostSummaryItem).join('')}
        </div>
    `);
};

export default PostSummaryList;