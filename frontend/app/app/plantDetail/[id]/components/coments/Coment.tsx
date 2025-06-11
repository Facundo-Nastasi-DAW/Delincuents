import React, { useState } from "react";
import { LikeDislike } from "./LikeDislikeButtons";
import { CommentInput } from "./ComentInput";

interface Props {
  comment: {
    id: number;
    text: string;
    likes: number;
    dislikes: number;
  };
  replies: {
    id: number;
    text: string;
    likes: number;
    dislikes: number;
    parentId: number | null;
  }[];
  onReply: (text: string, parentId: number) => void;
  onLike: (id: number) => void;
  onDislike: (id: number) => void;
}

export const Comment: React.FC<Props> = ({
  comment,
  replies,
  onReply,
  onLike,
  onDislike,
}) => {
  const [showReply, setShowReply] = useState(false);

  return (
    <div className="mb-6 pl-2">
      <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-sm">
        <p className="text-lg text-gray-800 dark:text-white leading-relaxed">
          {comment.text}
        </p>
        <div className="flex items-center gap-6 mt-4">
          <LikeDislike
            likes={comment.likes}
            dislikes={comment.dislikes}
            onLike={() => onLike(comment.id)}
            onDislike={() => onDislike(comment.id)}
          />
          <button
            className="text-base text-blue-600 hover:underline"
            onClick={() => setShowReply(!showReply)}
          >
            {showReply ? "Cancel·lar" : "Respondre"}
          </button>
        </div>
        {showReply && (
          <div className="mt-4">
            <CommentInput
              onSubmit={(text) => {
                onReply(text, comment.id);
                setShowReply(false);
              }}
            />
          </div>
        )}
      </div>

      <div className="ml-6 mt-4">
        {replies.map((reply) => (
          <Comment
            key={reply.id}
            comment={reply}
            replies={[]}
            onReply={onReply}
            onLike={onLike}
            onDislike={onDislike}
          />
        ))}
      </div>
    </div>
  );
};
