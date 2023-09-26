"use client"
import { useState } from 'react';
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

const Menu = () => {

  //const [broadCategory, setBroadCategoryData] = useState<BroadCategoryData | null>(null)
  //const [subCategory, setSubCategoryData] = useState<SubCategoryData | null>(null)

  const broadCategory: BroadCategoryData = {
    result: [
      { id: 1, name: "焼き鳥" },
      { id: 2, name: "一品もの" },
      { id: 3, name: "デザート" },
    ]
  }
  const subCategory: SubCategoryData = {
    result: [
      { 
        broadCategory: {
          id: 1,
          name: '焼き鳥'
        }, 
        subCategoryList: [
          { id: 1, name: "豚バラ", price: 150, imageUrl: '' },
          { id: 2, name: "鳥皮", price: 150, imageUrl: '' },
          { id: 3, name: "砂ずり", price: 150, imageUrl: '' },
          { id: 4, name: "ハツ", price: 150, imageUrl: '' },
        ]
      },
      { 
        broadCategory: {
          id: 2,
          name: '一品もの'
        }, 
        subCategoryList: [
          { id: 1, name: "山芋鉄板", price: 670, imageUrl: '' },
          { id: 2, name: "若鶏の唐揚げ", price: 450, imageUrl: '' },
          { id: 3, name: "だし巻き卵", price: 400, imageUrl: '' },
          { id: 4, name: "ゲソの唐揚げ", price: 350, imageUrl: '' },
        ]
      },
    ]
  }

  return (
    <div className="h-screen w-3/5 mr-auto ml-auto mt-4">
      {
        broadCategory?.result.length === 0 
        ? <h2>メニューは登録されていません。</h2>
        : 
        <BroadCategoryGrid 
          data={ broadCategory.result }
        />
      }
      {
        subCategory?.result.length === 0 
        ? <h2>小分類は登録されていません。</h2>
        : 
        <SubCategoryGrid 
          data={ subCategory.result }
        />
      }
    </div>
  )
};

export default Menu;