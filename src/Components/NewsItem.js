import React from "react";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const NewsItem = (props)=> {
   
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
      <div className="my-3">
        <div className="card">
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              right: "0",
            }}
          >
            <span class="badge rounded-pill bg-danger">{source}</span>
          </div>
          <img
            src={
              !imageUrl
                ? "https://clipart-library.com/img/2048402.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">{title} </h5>
            <p className="card-text">{description} </p>
            <p class="card-text">
              <small class="text-muted"></small>
            </p>
            <a
              rel="norefferer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
            <p class="card-text">
              <small class="text-muted">
                By {!author ? "Anonymous" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
          </div>
        </div>
      </div>
    );
 
}

export default NewsItem;
