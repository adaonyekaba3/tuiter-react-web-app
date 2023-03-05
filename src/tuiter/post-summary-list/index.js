import React from "react";
import postsArray from './posts.json';
import PostSummaryItem
    from "./post-summary-item";
import who from "../../../src/tuiter/who-to-follow-list/who";

const PostSummaryList = () => {
    return(
        <ul className="list-group">
            {
                postsArray.map(post =>
                                   <PostSummaryItem
                                       key={who._id} post={post}/> )
            }
        </ul>
    );
};
export default PostSummaryList;