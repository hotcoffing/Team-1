import "./BoardForm.scss"

function BoardForm({ handleAddPost, title, setTitle, content, setContent }) {
    
    return (
        <form onSubmit={handleAddPost} className="boardForm">
            <h3>게시글 작성 영역 (BoardForm)</h3>

            {/* onChange 이벤트로 입력값 상태 업데이트시 함수 실행 가능 */}
            <input
                type="text"
                placeholder="제목을 입력하세요"
                // value에 title 매칭
                value={title}
                // onChange 이벤트로 입력값 상태 업데이트시 value값인 title 변경
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="내용을 입력하세요"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
            />
            <button type="submit">추가</button>
        </form>
    );
}

export default BoardForm;