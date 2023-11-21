"use client"
import { useState, useEffect } from 'react';
import BroadCategoryGrid from '@/components/BroadCategoryGrid';
import SubCategoryGrid from '@/components/SubCategoryGrid';
import { BroadCategoryType, MenuType } from '@/types/index';

// 大分類
type BroadCategoryData = {
  result: Array<BroadCategoryType>,
}
//　小分類
type SubCategoryData = {
  result: Array<MenuType>,
}

type Data = {
  // your data type here
}

const getData = ( url : URL): Data | null => {
  const [data, setData] = useState<Data | null>(null)

  useEffect(() => {
    fetch(url, { mode: "no-cors" })
      .then((response) => setData(response))
  }, [url])

  if (!data) return null

  // Assuming data is an array for this example
  return data
}

const Menu = () => {

  const [menu, setMenu] = useState<Array<MenuType> | []>([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('http://localhost:9090/shops/2/category')
      const data: Array<MenuType> = await res.json()
      setMenu(data)
    }
    fetchData()
  }, [])

  return (
    <div className="h-screen w-3/5 mr-auto ml-auto mt-4">
      {
        menu.length === 0 
        ? <h2>メニューは登録されていません。</h2>
        : 
        <BroadCategoryGrid 
          data={ menu }
        />
      }
      {
        menu.length === 0 
        ? <h2>小分類は登録されていません。</h2>
        : 
        <SubCategoryGrid 
          data={ menu }
        />
      }
    </div>
  )
};

export default Menu;