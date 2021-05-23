import { Link } from "next/link";
import React, { Fragment } from "react";

const index = () => {
  return (
    <Fragment>
      <h1>News</h1>
      <ul>
        <li>
          <Link href="/news/new-php-framework-released">
            New PHP framework released
          </Link>
        </li>
        <li>
          <Link href="/news/election-gets-fabricated">
            Elections are fabricated
          </Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default index;
