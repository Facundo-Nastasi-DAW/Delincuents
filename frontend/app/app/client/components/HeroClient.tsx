import Image from "next/image";
import React from "react";

interface HeroBannerProps {
  userName: string;
  avatarUrl?: string;
}

export const HeroClient: React.FC<HeroBannerProps> = ({
  userName,
  avatarUrl = "/avatar.png",
}) => {
  return (
    <div className="flex flex-col items-center text-center py-10 px-6 sm:px-12">
      <Image
        src={avatarUrl}
        alt="User avatar"
        width={96}
        height={96}
        className="rounded-full"
      />
      <h2 className="text-4xl font-extrabold text-[#899878] mt-5">
        Hi {userName}
      </h2>
      <p className="max-w-2xl mt-4 text-base sm:text-lg text-gray-700 leading-relaxed">
        random plant info random plant info random plant info random plant info random plant info random plant info
      </p>
    </div>
  );
};
