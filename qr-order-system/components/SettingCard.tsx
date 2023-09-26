"use client";

import { useRouter, usePathname } from 'next/navigation'

const SettingCard = () => {

  const router = useRouter();
  const pathName = usePathname();
  const openMenuPage = () => router.push(`${pathName}/menu`);

  return (
    <div className="ml-5 rounded-lg shadow-2xl w-20 h-20 bg-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"
      onClick={openMenuPage}
    > 
      <p className="text-center text-white">Menu</p>
    </div>
  )
};
export default SettingCard;