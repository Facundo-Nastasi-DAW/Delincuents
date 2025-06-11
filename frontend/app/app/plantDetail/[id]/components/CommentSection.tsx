"use client";

import React, { useState } from "react";
import { Comment } from "./coments/Coment";
import { CommentInput } from "./coments/ComentInput";
import { allComments, CommentData } from "./coments/comments";

interface CommentSectionProps {
  plantId: string;
}

export const CommentSection: React.FC<CommentSectionProps> = ({ plantId }) => {
  const [comments, setComments] = useState<CommentData[]>(
    allComments.filter((c) => c.plantId === plantId)
  );

  const handleAddComment = (content: string, parentId: string | null = null) => {
    const newComment: CommentData = {
      id: Date.now().toString(),
      plantId,
      parentId,
      author: "Usuari",
      content,
      likes: 0,
      dislikes: 0,
    };
    setComments((prev) => [...prev, newComment]);
  };

  const handleLike = (id: string) => {
    setComments((prev) =>
      prev.map((c) => (c.id === id ? { ...c, likes: c.likes + 1 } : c))
    );
  };

  const handleDislike = (id: string) => {
    setComments((prev) =>
      prev.map((c) => (c.id === id ? { ...c, dislikes: c.dislikes + 1 } : c))
    );
  };

  const renderComments = (parentId: string | null = null) => {
    return comments
      .filter((c) => c.parentId === parentId)
      .map((c) => (
        <div key={c.id} className="ml-0 md:ml-4 mt-2">
          <Comment
            comment={{ ...c, id: Number(c.id), text: c.content }}
            onReply={(text: string, parentId: number) => handleAddComment(text, parentId.toString())}
            onLike={(id: number) => handleLike(id.toString())}
            onDislike={(id: number) => handleDislike(id.toString())}
            replies={[]} // si se usa
          />
          <div className="ml-4">{renderComments(c.id)}</div>
        </div>
      ));
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <h3 className="text-xl font-semibold mb-4">Comentaris</h3>
      {comments.length === 0 ? (
        <div className="text-center">
          <p className="text-gray-500 italic">Sigues el primer a comentar</p>
          <div className="mt-4">
            <CommentInput onSubmit={handleAddComment} />
          </div>
        </div>
      ) : (
        <>
          <div className="space-y-4">{renderComments()}</div>
          <div className="mt-6">
            <CommentInput onSubmit={handleAddComment} />
          </div>
        </>
      )}
    </div>
  );
};
