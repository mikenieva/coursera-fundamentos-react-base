import React from "react";
import Heading from "./Heading";
import ListArticles from "./ListArticles";

export default function Articles(props) {
  return (
    <div>
      <Heading />
      <ListArticles allArticles={props.allArticles} />
    </div>
  );
}
