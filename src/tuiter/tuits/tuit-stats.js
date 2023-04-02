import React from "react";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks";

const TuitStats = ( tuit = {}) => {
    const dispatch = useDispatch();
    tuit = tuit.tuit;
    return (
        <div className="d-flex justify-content-between pt-2">
            <a href="#" className="wd-text-decoration-none text-secondary">
                <i className="bi bi-chat"/><span
                className="ps-2">{post.replies}</span>
            </a>
            <a href="#" className="wd-text-decoration-none text-secondary">
                <i className="bi bi-repeat"/><span
                className="ps-2">{post.retuits}</span>
            </a>
            <span
                className="wd-text-decoration-none text-secondary"
                onClick={()=> dispatch(
                    updateTuitThunk(
                        {
                            ...post,
                            likes: post.likes + 1
                        }
                    )
                )}
            >
                <i className={`${post.likes > 0 ? "bi bi-heart-fill text-danger" : "bi bi-heart"}`}/><span
                className="ps-2">{post.likes}</span>
            </span>
            <span
                className="wd-text-decoration-none text-secondary"
                onClick={()=> dispatch(
                    updateTuitThunk(
                        {
                            ...post,
                            dislikes: post.dislikes + 1
                        }
                    )
                )}
            >
                <i className={`${post.dislikes > 0 ? "bi bi-hand-thumbs-down-fill text-primary"
                                   : "bi bi-hand-thumbs-down"}`}/><span
                className="ps-2">{post.dislikes}</span>
            </span>
            <a href="#" className="wd-text-decoration-none text-secondary">
                <i className="bi bi-share"/><span className="ps-2"/>
            </a>
        </div>
    );
};
export default TuitStats;