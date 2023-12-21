"use client"
import SettingCard from '@/components/SettingCard'
import { usePathname } from 'next/navigation'

const Shop = () => {
  const pathName = usePathname();
  return (
    <div className="h-screen w-3/5 mr-auto ml-auto mt-4">
      <p className="text-xl font-bold mb-4">設定</p>
      <div className='flex'>
        <SettingCard title='Menu' route={`${pathName}/menu`}/>
        <SettingCard title='QR-CODE' route={`${pathName}/qr`}/>
      </div>
    </div>
  )
};

export default Shop;