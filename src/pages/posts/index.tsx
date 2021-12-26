import { NextPage } from "next";
import  useSWR  from "swr";
import { MDViewr } from "../../components/MDViewer";
import { Post } from "../../types/Post";
import { fetcher } from "../../utils/fetcher";

const PostPage: NextPage = () => {
  const { data, error } = useSWR('http://localhost:1337/api/posts/', fetcher);

  if (error) return (<div>Error</div>)
  if (!data) return (<div>Loading..</div>)

  return (
    <div>
      {data.data.map((postdata: Post) => {
        <MDViewr 
        key={`post-${postdata.id}`}
        author={postdata.attributes.author}
        title={postdata.attributes.title} 
        contents={postdata.attributes.contents}/>

      })}
    </div>
  )
}

export default PostPage;