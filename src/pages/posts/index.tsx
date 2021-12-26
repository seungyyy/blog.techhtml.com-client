import { NextPage } from "next";
import { MDViewr } from "../../components/MDViewer";

const PostPage: NextPage = () => {
  return (
    <div>
      <MDViewr title={'안녕하세요?'} contents='# hello'/>
    </div>
  )
}

export default PostPage;