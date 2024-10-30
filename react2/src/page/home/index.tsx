import { Link } from "react-router-dom";
import Header from "../../component/Header";
export default function Home() {
  return (
    <div>
      <header>
        <div>
          <Link to="/posts/new">글쓰기</Link>
          <Link to="/posts">게시글</Link>
          <Link to="/profile">프로필</Link>
        </div>
      </header>

      <div className="post__Navigation">
        <div className="post_navigation--active">전체</div>
        <div>나의글</div>
      </div>

      <div className="post__list">
        {[...Array(10)].map((e, index) => (
          <div key={index} className="post__box">
            <Link to={`/posts/${index}`}>
              <div className="post__profile-box"></div>
              <div className="post__profile"></div>
              <div className="post__author-name">폴리텍</div>
              <div className="post__date">2024.00.00. 월요일</div>
            </Link>
            <div className="post_title">게시글 {index}</div>
            <div className="post__text">
              Lorem Ipsum is simply dummy text of the printing and
            </div>
            <div className="post__utils-box">
              <div className="post__delete">삭제</div>
              <div className="post__edit">수정</div>
            </div>
          </div>
        ))}
      </div>
      
      <footer>
        <Link to="/posts/new">글쓰기</Link>
        <Link to="/posts/new">게시글</Link>
        <Link to="/posts/new">프로필</Link>

      </footer>
    </div>
  );
}
