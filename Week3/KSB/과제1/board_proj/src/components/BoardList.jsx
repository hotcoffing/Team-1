import "./BoardList.scss"
import BoardItem from "./BoardItem";
import { useNavigate } from 'react-router-dom';

function BoardList({ posts, setPosts }) {
    const navigate = useNavigate();

    const handleDelete = (id) => {
        // 삭제할 게시글을 제외한 새로운 배열 생성
        const updatedPosts = posts.filter((post) => (
            post.id !== id
        ));

        // 변경된 새로운 배열로 업데이트
        setPosts(updatedPosts);

        // 삭제 후 게시판으로 리디렉션? (잘 모르겠음)
        navigate('/board');
    }

    const handleEdit =(id, nextContent) => {
        setPosts(
            posts.map((post) => 
                post.id === id ? {...post, content:nextContent} : post
            )
        );
    }

    return (
        <div className="BorderList" style={{ padding: '10px', border: '1px solid #ccc' }}>
            <h3>게시글 목록 영역 (BoardList)</h3>
            <ul>
                {/* map으로 객체 뿌리기 */}
                {posts.map((post) => (
                    <BoardItem 
                        key={post.id} 
                        title={post.title} 
                        content={post.content}
                        onDelete={() => handleDelete(post.id)}
                        onEdit={(nextContent) => handleEdit(post.id, nextContent)}
                    />
                ))}
            </ul>
        </div>
    )
}

export default BoardList;