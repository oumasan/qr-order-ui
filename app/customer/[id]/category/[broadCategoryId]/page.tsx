"use client"

import { useSearchParams } from 'next/navigation'
import { useState, useEffect, createContext } from 'react';
import { getApi } from '@/api/api-call'
import { MenuType } from '@/types/index';
import CustomerSubCategory from '@/components/CustomerSubCategory'

const Customer = (
  { params }: { params: { id: string, broadCategoryId: string } },
) => {
  const searchParams = useSearchParams();
  const uniqueId = searchParams.get("id");
  const broadCategoryId = params.broadCategoryId
  const shopId = params.id

  // Menu
  const [subCategory, setSubCategory] = useState<Array<MenuType> | []>([])
  const [trigger, setTrigger] = useState(false);

  // 小分類取得
  useEffect(() => {
    const fetchData = async () => {
      const res = await getApi(`${process.env.apiBaseUrl}shops/${shopId}/category`)
      const data: Array<MenuType> = await res.json()
      const menu = data.filter(item => item.broadCategory.id.toString() === broadCategoryId)
      setSubCategory(menu)
    }
    fetchData()
  }, [trigger])
  
  return (
    <div className="h-screen mr-auto ml-auto mt-4">
      <CustomerSubCategory data={subCategory} />
    </div>
  )
};

export default Customer;