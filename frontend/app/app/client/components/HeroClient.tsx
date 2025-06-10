// components/HeroBanner.tsx
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
    <div className="flex flex-col items-center text-center py-8 px-4">
      <Image
        src={avatarUrl}
        alt="User avatar"
        width={80}
        height={80}
        className="rounded-full"
      />
      <h2 className="text-3xl font-bold text-[#899878] mt-4">Hi {userName}</h2>
      <p className="max-w-2xl mt-2 text-sm text-gray-700">
        random plant info random plant info random plant info random plant info random plant info random plant info
      </p>
    </div>
  );
};
