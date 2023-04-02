import React from "react";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks";

const TuitStats = (
    tuit = {}) => {

    const dispatch = useDispatch();

    tuit = tuit.tuit;

    return (
        <div className="d-flex justify-content-between mt-2 ms-1 pe-5 mb-1 text-muted">
            <i className="bi bi-chat">
<span className="ps-2">
{tuit.replies}
</span>
            </i>
            <i className="bi bi-shuffle">
<span className="ps-2">
{tuit.retuits}
</span>
            </i>
            <div>
                <i className="bi bi-heart-fill me-2 text-danger"
                   onClick={() => dispatch(updateTuitThunk({
                                                               ...tuit,
                                                               likes: tuit.likes + 1
                                                           }))}>
<span className="ps-2">
{tuit.likes}
</span>
                </i>
            </div>
            <div>
                <i className="bi bi-hand-thumbs-down-fill me-2 text-danger"
                   onClick={() => dispatch(updateTuitThunk({
                                                               ...tuit,
                                                               dislikes: tuit.dislikes + 1
                                                           }))}>
<span className="ps-2">
{tuit.dislikes}
</span>
                </i>
            </div>
            <i className="bi bi-share"/>
        </div>
    );
}

export default TuitStats;
/*
const TuitStats = (
    {
        post = {
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "image": "tesla.png",
            "liked": true,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "dislikes": 2345,
            "handle": "@defaultHandle",
            "tuit": "Default tuit"
        }
    }
) => {
    const dispatch = useDispatch();
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
export default TuitStats;*/
