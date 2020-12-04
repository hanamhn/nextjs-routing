import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";

function PostDetail() {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h2>Post Detail</h2>
    </div>
  );
}

export default PostDetail;
