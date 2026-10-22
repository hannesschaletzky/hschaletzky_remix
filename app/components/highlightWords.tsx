import { Fragment } from "react";

// wraps every word of the title that is listed in the comma separated highlights in <mark>
export default function highlightWords(title: string, list: string) {
  const highlights = list.split(",").map((word) => word.trim());
  return title.split(" ").map((word, i) => (
    <Fragment key={i}>
      {i > 0 && " "}
      {highlights.includes(word) ? <mark>{word}</mark> : word}
    </Fragment>
  ));
}
