import { Link } from "next/link";
import React, { Fragment } from "react";

const news = () => {
  return (
    <Fragment>
      <h1>News</h1>
      <ul>
        <li>
          <Link href="/news/new-php-framework-released">
            New PHP framework released!!!
          </Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default news;
