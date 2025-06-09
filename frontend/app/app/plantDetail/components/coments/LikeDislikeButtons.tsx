import React from "react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

interface Props {
  likes: number;
  dislikes: number;
  onLike: () => void;
  onDislike: () => void;
}

export const LikeDislike: React.FC<Props> = ({
  likes,
  dislikes,
  onLike,
  onDislike,
}) => {
  return (
    <div className="flex items-center gap-4 text-sm text-gray-700 dark:text-white">
      <button onClick={onLike} className="flex items-center gap-1 hover:text-green-600">
        <FaThumbsUp /> {likes}
      </button>
      <button onClick={onDislike} className="flex items-center gap-1 hover:text-red-600">
        <FaThumbsDown /> {dislikes}
      </button>
    </div>
  );
};
