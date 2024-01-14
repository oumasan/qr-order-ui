"use client"

import { useSearchParams } from 'next/navigation'
import { useState, useEffect } from 'react';
import { getApi } from '@/api/api-call'
import { MenuType } from '@/types/index';
import CustomerMenu from '@/components/CustomerMenu'
import { setId } from "@/store/CartStore";
import { store } from '@/store/CartStore'

const Customer = (
  { params }: { params: { id: string } },
) => {

  // ユニークID保持
  const searchParams = useSearchParams()
  useEffect(() => {  
    const uniqueId = searchParams.get("id")
    if (uniqueId) {
      store.dispatch(setId(uniqueId))
    }
  });
  
  const shopId = params.id

  // Menu
  const [menu, setMenu] = useState<Array<MenuType> | []>([])
  const [trigger, setTrigger] = useState(false);

  // 初期情報取得
  useEffect(() => {
    const fetchData = async () => {
      const res = await getApi(`${process.env.apiBaseUrl}shops/${shopId}/category`)
      const data: Array<MenuType> = await res.json()
      setMenu(data)
    }
    fetchData()
  }, [trigger])

  
  return (
    <div className="h-screen mr-auto ml-auto mt-4">
      <CustomerMenu data={menu} />
    </div>
  )
};

export default Customer;