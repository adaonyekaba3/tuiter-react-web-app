import React from "react";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const PostSummaryItem = ({
                             post = {
                                 "id": 1,
                                 "topic": "Web Development",
                                 "userName": "ReactJS",
                                 "time": "2h",
                                 "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
                                 "image": "reactjs.jpg"
                             }
                         }) => {
    return (
        <div className="list-group-item">
            <div className="row ms-0 me-0">
                <div className="col-sm-9 col-md-10 ps-1 pt-1 pb-1 pe-0">
                    <p className="m-0 text-secondary">{post.topic}</p>
                    <p className="m-0">
                        <b>{post.userName} </b>
                        <FontAwesomeIcon icon={faCheckCircle}  className="text-primary me-2"/>
                        <span className="text-secondary"> - {post.time}</span>
                    </p>
                    <p className="m-0">
                        <b>{post.title}</b>
                    </p>
                </div>
                <div className="d-flex align-items-center col-sm-3 col-md-2 p-2">
                    <img src={`../images/${post.image}`}
                         className="rounded w-100" alt=""/>
                </div>
            </div>
        </div>
    );
}

export default PostSummaryItem;
/*
import React from "react";
const PostSummaryItem = (
    {
        post = {
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "image": "tesla.jpg"
        }
    }
) => {
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-10">
                    <div>{post.userName} . {post.time}</div>
                    <div className="fw-bolder">{post.topic}</div>
                    <div>{post.title}</div>
                </div>
                <div className="col-2">
                    <img width={70} className="float-end rounded-3"  alt={""} src={`/images/${post.image}`}/>
                </div>
            </div>
        </li>
    );
};
export default PostSummaryItem;*/
