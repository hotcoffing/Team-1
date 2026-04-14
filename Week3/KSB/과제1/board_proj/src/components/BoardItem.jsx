import "./BoardItem.scss"
import { useState } from "react";

function BoardItem({ title, content, onDelete, onEdit }) {
    const [isEdit, setIsEdit] = useState(false);
    const [EditContent, setEditContent] = useState(content);
    
    return (
        <li className="boardItem">
            <div className="textArea">
                <h4 className="itemTitle">{title}</h4>
                {isEdit ? (
                        <textarea 
                            value={EditContent}
                            onChange={(e) => setEditContent(e.target.value)}
                        />
                    ) : 
                    (<p className="itemContent">{content}</p>)
                }
            </div>
            
            {isEdit ? (
                <button type="button" onClick={() => {
                    setIsEdit(false);
                    onEdit(EditContent);
                }}>수정완료</button>
            ) : (
                <button className="editBtn" onClick={() => {
                    setIsEdit(true)
                }}>수정</button>
            )}
            <button className="deleteBtn" onClick={onDelete}>삭제</button>
        </li>
    )
}

export default BoardItem;