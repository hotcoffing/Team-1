import "./BoardList.scss"
import BoardItem from "./BoardItem";
import { useNavigate } from 'react-router-dom';

function BoardList({ posts, setPosts }) {
    const navigate = useNavigate();

    const handleDelete = (id) => {
        // 삭제할 게시글을 제외한 새로운 배열 생성
        const DeletedPosts = posts.filter((post) => (
            post.id !== id
        ));

        // 변경된 새로운 배열로 업데이트
        setPosts(DeletedPosts);

        // 로컬 스토리지 업데이트
        localStorage.setItem('posts', JSON.stringify(DeletedPosts));
    }

    const handleEdit =(id, nextContent) => {
        const updatedPosts = posts.map((post) => 
            post.id === id ? {...post, content:nextContent} : post
        );

        setPosts(updatedPosts);

        // 로컬 스토리지 업데이트
        localStorage.setItem('posts', JSON.stringify(updatedPosts));
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