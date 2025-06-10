"use client";

import React, { JSX, useState } from "react";
import { Comment } from "./coments/Coment";
import { CommentInput } from "./coments/ComentInput";

export type CommentData = {
  id: number;
  parentId: number | null;
  author: string;
  content: string;
  likes: number;
  dislikes: number;
};


const initialComments: CommentData[] = [
  {
    id: 1,
    parentId: null,
    author: "Laura",
    content: "Esta planta necesita mucha luz?",
    likes: 2,
    dislikes: 0,
  },
  {
    id: 2,
    parentId: 1,
    author: "Carlos",
    content: "Yo la tengo en semisombra y va bien",
    likes: 3,
    dislikes: 0,
  },
  {
    id: 3,
    parentId: null,
    author: "Ana",
    content: "Cuántas veces la regáis?",
    likes: 1,
    dislikes: 1,
  },
];

export const CommentSection: React.FC = () => {
  const [comments, setComments] = useState<CommentData[]>(initialComments);

  const handleAddComment = (content: string, parentId: number | null = null) => {
    const newComment: CommentData = {
      id: Date.now(),
      parentId,
      author: "Usuari",
      content,
      likes: 0,
      dislikes: 0,
    };
    setComments((prev) => [...prev, newComment]);
  };

  const handleLike = (id: number) => {
    setComments((prev) =>
      prev.map((comment) =>
        comment.id === id ? { ...comment, likes: comment.likes + 1 } : comment
      )
    );
  };

  const handleDislike = (id: number) => {
    setComments((prev) =>
      prev.map((comment) =>
        comment.id === id ? { ...comment, dislikes: comment.dislikes + 1 } : comment
      )
    );
  };

  const renderComments = (parentId: number | null = null): JSX.Element[] => {
    return comments
      .filter((c) => c.parentId === parentId)
      .map((comment) => (
        <div key={comment.id} className="ml-0 md:ml-4">
          <Comment
                  comment={{ ...comment, text: comment.content }}
                  onReply={handleAddComment}
                  onLike={handleLike}
                  onDislike={handleDislike} replies={[]}          />
          <div className="ml-4">
            {renderComments(comment.id)}
          </div>
        </div>
      ));
  };

  return (
    <div className="w-4/5 flex flex-col p-4">
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
          <div className="space-y-4">
            {renderComments()}
          </div>
          <div className="mt-6">
            <CommentInput onSubmit={handleAddComment} />
          </div>
        </>
      )}
    </div>
  );
};
