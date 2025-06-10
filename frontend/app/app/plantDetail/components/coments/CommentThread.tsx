import React, { useState } from "react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { NewCommentInput } from "./NewCommentInput";

interface Comment {
  id: string;
  parentId?: string;
  content: string;
  likes: number;
  dislikes: number;
  children?: Comment[];
}

interface Props {
  comment: Comment;
  onReply: (text: string, parentId: string) => void;
}

export const CommentThread: React.FC<Props> = ({ comment, onReply }) => {
  const [showReply, setShowReply] = useState(false);

  return (
    <div className="border-l pl-4 ml-2 space-y-2">
      <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-md">
        <p className="text-gray-800 dark:text-gray-100">{comment.content}</p>
        <div className="flex items-center space-x-4 text-sm mt-2">
          <button className="text-green-600 flex items-center gap-1">
            <FaThumbsUp /> {comment.likes}
          </button>
          <button className="text-red-600 flex items-center gap-1">
            <FaThumbsDown /> {comment.dislikes}
          </button>
          <button onClick={() => setShowReply(!showReply)} className="text-blue-600 underline">
            Respon
          </button>
        </div>
        {showReply && (
          <div className="mt-2">
            <NewCommentInput onSubmit={(text) => onReply(text, comment.id)} />
          </div>
        )}
      </div>

      {/* Renderizar hijos recursivamente */}
      {comment.children?.map((child) => (
        <CommentThread key={child.id} comment={child} onReply={onReply} />
      ))}
    </div>
  );
};
