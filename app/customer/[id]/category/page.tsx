"use client"

import { useSearchParams } from 'next/navigation'
import { useState, useEffect } from 'react';
import { getApi } from '@/api/api-call'
import { MenuType } from '@/types/index';
import CustomerMenu from '@/components/CustomerMenu'

const Customer = (
  { params }: { params: { id: string } },
) => {
  const searchParams = useSearchParams();
  const uniqueId = searchParams.get("id");
  const shopId = params.id
  const baseUrl = 'http://192.168.10.109:9090/'

  // Menu
  const [menu, setMenu] = useState<Array<MenuType> | []>([])
  const [trigger, setTrigger] = useState(false);

  // 初期情報取得
  useEffect(() => {
    const fetchData = async () => {
      const res = await getApi(`${baseUrl}shops/${shopId}/category`)
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