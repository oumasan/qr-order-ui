"use client";

import { useRouter } from 'next/navigation'

type PropsData = {
  title: string,
  route: string
}

const SettingCard = (props: PropsData) => {

  const router = useRouter();
  const openMenuPage = () => router.push(props.route);

  return (
    <div className="ml-5 rounded-lg shadow-2xl w-20 h-20 bg-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"
      onClick={openMenuPage}
    > 
      <p className="text-center text-white">{props.title}</p>
    </div>
  )
};
export default SettingCard;