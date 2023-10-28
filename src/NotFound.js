import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="not-found">
      <h1>
        <span>404</span> <br/> Not Found
      </h1>
      <p>Hey Reader👋 The page you are looking for does not exist.</p>
      <Link to="/">Back to the homepage...</Link>
    </div>
  );
}

export default NotFound;
