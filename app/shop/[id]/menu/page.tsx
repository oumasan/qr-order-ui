"use client"
import { useState, useEffect, useContext } from 'react';
import BroadCategoryGrid from '@/components/BroadCategoryGrid';
import SubCategoryGrid from '@/components/SubCategoryGrid';
import { MenuType } from '@/types/index';
import { LoginContext } from '@/store';
import { getApi, postApi, deleteApi } from '@/api/api-call'

const Menu = () => {
  
  const loginData = useContext(LoginContext)
  const shopId = loginData.id.toString()
  const baseUrl = 'http://localhost:9090/'
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

  // 大分類登録
  const handlePostBroadCategory = async (form: string) => {
    await postApi(`${baseUrl}shops/${shopId}/broad-category`, {
      broadCategoryName: form
    })
    setTrigger(!trigger);
  }

  // 大分類削除
  const handleDeleteBroadCategory = async (id: Number) => {
    await deleteApi(`${baseUrl}broad-category/${id}`)
    setTrigger(!trigger);
  }

  // 小分類登録
  const handlePostSubCategory = async (form: any) => {
    await postApi(`${baseUrl}shops/${shopId}/sub-category`, form)
    setTrigger(!trigger);
  }

  // 小分類削除
  const handleDeleteSubCategory = async (id: Number) => {
    await deleteApi(`${baseUrl}sub-category/${id}`)
    setTrigger(!trigger);
  }

  return (
    <div className="h-screen w-3/5 mr-auto ml-auto mt-4">
      <BroadCategoryGrid 
        data={ menu }
        handlePostBroadCategory={handlePostBroadCategory}
        handleDeleteBroadCategory={handleDeleteBroadCategory}
      />
      <SubCategoryGrid 
        data={ menu }
        onPostTrigger={ handlePostSubCategory }
        onDeleteTrigger={ handleDeleteSubCategory }
      />
    </div>
  )
};

export default Menu;