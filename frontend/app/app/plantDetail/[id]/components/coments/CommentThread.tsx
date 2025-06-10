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
    <div className="mt-10 max-w-4xl mx-auto border-l-2 border-gray-300 dark:border-gray-700 pl-4 ml-2 space-y-4">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
        <p className="text-base sm:text-lg text-gray-800 dark:text-gray-100 leading-relaxed">
          {comment.content}
        </p>
        <div className="flex items-center space-x-6 text-base mt-4">
          <button className="text-green-600 flex items-center gap-2 hover:underline">
            <FaThumbsUp className="text-xl" /> {comment.likes}
          </button>
          <button className="text-red-600 flex items-center gap-2 hover:underline">
            <FaThumbsDown className="text-xl" /> {comment.dislikes}
          </button>
          <button
            onClick={() => setShowReply(!showReply)}
            className="text-blue-600 font-medium hover:underline"
          >
            {showReply ? "Cancel·lar" : "Respon"}
          </button>
        </div>
        {showReply && (
          <div className="mt-4">
            <NewCommentInput
              onSubmit={(text) => {
                onReply(text, comment.id);
                setShowReply(false);
              }}
            />
          </div>
        )}
      </div>

      {comment.children?.map((child) => (
        <CommentThread key={child.id} comment={child} onReply={onReply} />
      ))}
    </div>
  );
};
