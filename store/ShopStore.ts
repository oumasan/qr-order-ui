import { createSlice, configureStore, } from '@reduxjs/toolkit'
import { ShopObj } from '@/types/index'

const shopSlice = createSlice({
  name: 'shop',
  initialState: {
    // TODO: 認証・認可未実装のため固定値
    value: new ShopObj(1, 'テストショップ')
  },
  reducers: {
    set: (state, action) => {
      state.value = action.payload
    },
    clear: (state) => {
      state.value = new ShopObj(0, '')
    }
  }
})

export const { set, clear } = shopSlice.actions

export const store = configureStore({
  reducer: shopSlice.reducer
})

export type ShopState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch