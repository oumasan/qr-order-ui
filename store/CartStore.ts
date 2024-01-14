import { createSlice, configureStore, } from '@reduxjs/toolkit'
import { Cart } from '@/types/index'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    value: new Array<Cart>(),
    id: ''
  },
  reducers: {
    set: (state, action) => {
      state.value = action.payload
    },
    clear: (state) => {
      state.value = new Array<Cart>()
    },
    setId: (state, action) => {
      state.id = action.payload
    },
  }
})

export const { set, clear, setId } = cartSlice.actions

export const store = configureStore({
  reducer: cartSlice.reducer
})

export type CartState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch