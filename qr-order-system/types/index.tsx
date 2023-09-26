/**
 * 型定義
 */

// 大分類
export interface BroadCategoryType {
  id: Number,
  name: String,
}

// 小分類
export interface SubCategoryType {
  id: Number,
  name: String,
  price: Number,
  imageUrl: String,
}

// メニュー
export interface MenuType {
  broadCategory: BroadCategoryType,
  subCategoryList: Array<SubCategoryType>
}
