"use client"
import { QRCodeCanvas } from "qrcode.react";
import { useContext } from 'react';
import { LoginContext } from '@/store';
import { v4 as uuidv4 } from 'uuid';

const Shop = () => {
  const loginData = useContext(LoginContext)
  const shopId = loginData.id.toString()
  return (
    <div className="h-screen w-3/5 mr-auto ml-auto mt-4">
      <p className="text-xl font-bold mb-4">設定</p>
      <div className='flex'>
        <QRCodeCanvas
          value={`http://localhost:8888/customer/${shopId}?id=${uuidv4()}`}
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