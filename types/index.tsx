/**
 * 型定義
 */

export interface Shop {
  id: Number,
  name: String,
}

export class ShopObj implements Shop  {
  id: Number = 0;
  name: String = '';

  constructor(id: Number, name: String) {
    this.id = id;
    this.name = name;
  }
}

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

// カート
export interface Cart {
  id: Number,
  name: String,
  count: Number,
  price: Number
}

// メニュー
export interface MenuType {
  broadCategory: BroadCategoryType,
  subCategoryList: Array<SubCategoryType>
}

// 会計
export interface AccoutantType {
  id: Number,
  subCategoryId: Number,
  shopId: Number,
  accoutantId: Number,
  name: String,
  price: Number,
  count: Number,
}