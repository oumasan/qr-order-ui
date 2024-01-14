"use client"

import { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { CartState } from '@/store/CartStore'
import Cart from '@/components/Cart'
import { postApi } from '@/api/api-call'
import { SuccessToast, ChildRefMethods } from '@/components/SuccessToast'
import { clear } from "@/store/CartStore";
import { store } from '@/store/CartStore'


const Customer = (
  { params }: { params: { id: string } },
) => {
  const uniqueId = useSelector((state: CartState) => state.id);
  const shopId = params.id
  const baseUrl = process.env.apiBaseUrl

  const childRef = useRef<ChildRefMethods>(null)
  const [message, setMessage] = useState<String>('カートに商品がありません。') 

  // 注文確定
  const handlePostCart = async (cart: any) => {
    const requestBody = {
      shopId: shopId,
      accountantId: uniqueId,
      cart: cart
    }
    await postApi(`${baseUrl}customer/cart`, requestBody)
    // トーストメッセージオープン
    childRef.current?.open()
    setMessage('')
    setTimeout(() => {
      childRef.current?.close()
      setMessage('カートに商品がありません。')
    }, 2000);
    store.dispatch(clear())
  }

  const cart = useSelector((state: CartState) => state.value)
  return (
    <div className="h-screen mr-auto ml-auto mt-4">
    <h2 className='text-center text-4xl font-extrabold mb-4'>カート</h2>
      {
        cart.length === 0
        ? <h2 className='text-center'>{message}</h2>
        :
        <Cart data={cart} 
          orderFunc={handlePostCart}
        />
      }
      <SuccessToast message={'注文を確定しました'} ref={childRef} />
    </div>
  )
};

export default Customer;