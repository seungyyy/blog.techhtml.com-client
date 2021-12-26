import { marked } from "marked";

interface MDViewerProps {
  title: string;
  author: string;
  contents: string;
}

export const MDViewr = ({ title, contents, author }: MDViewerProps) => {
  return (
    <article>
      <h1>{title}</h1>
      <p> 작성자: {author}</p>
      <div dangerouslySetInnerHTML={
        { __html: marked(contents)}
      } />
    </article>
  )
}