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
    <div className="flex items-center gap-6 text-base sm:text-lg text-gray-700 dark:text-white">
      <button
        onClick={onLike}
        className="flex items-center gap-2 hover:text-green-600 transition-colors"
      >
        <FaThumbsUp className="text-xl" /> {likes}
      </button>
      <button
        onClick={onDislike}
        className="flex items-center gap-2 hover:text-red-600 transition-colors"
      >
        <FaThumbsDown className="text-xl" /> {dislikes}
      </button>
    </div>
  );
};
