"use client"
import { QRCodeCanvas } from "qrcode.react";
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux'
import { ShopState } from '@/store/ShopStore'

const Shop = () => {
  const shop = useSelector((state: ShopState) => state.value)
  const shopId = shop.id.toString()
  const baseUrl = process.env.uiBaseUrl
  return (
    <div className="h-screen w-3/5 mr-auto ml-auto mt-4">
      <p className="text-xl font-bold mb-4">設定</p>
      <div className='flex'>
        <QRCodeCanvas
          value={`${baseUrl}customer/${shopId}/category?id=${uuidv4()}`}
          size={128}
          bgColor={"#ffffff"}
          fgColor={"#000000"}
          level={"L"}
          includeMargin={false}
          imageSettings={{
            src: "https://static.zpao.com/favicon.png",
            x: undefined,
            y: undefined,
            height: 24,
            width: 24,
            excavate: true,
          }}
        />
      </div>
    </div>
  )
};

export default Shop;