import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import BoardForm from '../components/BoardForm';
import BoardList from '../components/BoardList';
import "./Board.scss"

function Board() {
  // 💡 실습 1. 여기에 가짜 데이터 상태(useState)를 만들게 됩니다.
  const [posts, setPosts] = useState([
      { id: 1, isEdit: false, title: '첫 번째 게시글', content: '안녕하세요! 이것은 첫 번째 게시글입니다.' },
      { id: 2, isEdit: false, title: '두 번째 게시글', content: '리액트 공부 중입니다!' },
  ]);
  
  const navigate = useNavigate();
  const [isEdit, setIsEdit] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleAddPost = (e) => {
      // 폼 제출 시 페이지 새로고침 방지
      e.preventDefault();
      
      // 입력값 검증
      if (!title || !content) {
        alert('제목과 내용을 입력해주세요!');
        return;
      }

      // 새로운 게시글 객체 생성
      const newPost = {
        // 임시 시간 고유 ID 생성
        id: Date.now(), 
        title: title,
        content: content
      };

      // ... 연산자로 불변성 유지하면서 기존 게시글에 새 게시글 추가
      setPosts([...posts, newPost]);

      // 입력 필드 초기화
      setTitle('');
      setContent('');

      // 추가 후 게시판으로 리디렉션? (잘 모르겠음)
      navigate('/board');
  };
    
  return (
    <div>
      <h2>📝 자유 게시판</h2>
      
      {/* 💡 실습 2. 입력 폼 컴포넌트(BoardForm)가 들어갈 자리 */}
      {/* useState의 경우 변경 객체 및 변경 함수는 세트로 입력 필요 / handleAddPost는 폼에 게시글 추가 기능을 담당 */} 
      <BoardForm
        handleAddPost={handleAddPost}
        title={title}
        setTitle={setTitle}
        content={content}
        setContent={setContent}
      />


      {/* 💡 실습 3. 게시글 목록 컴포넌트(BoardList & BoardItem)가 들어갈 자리 */}
      <BoardList posts={posts} setPosts={setPosts} />
    </div>
  );
}

export default Board;