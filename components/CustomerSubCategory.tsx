import { MenuType, Cart } from '@/types/index'
import { Fragment, useState, useRef, RefObject, createRef } from 'react'
import { CustomerSubCategoryOne, ChildRefMethods } from '@/components/CustomerSubCategoryOne'
import { set } from "@/store/CartStore";
import { store } from '@/store/CartStore'
import { useSelector } from 'react-redux'
import { CartState } from '@/store/CartStore'

type PropsData = {
  data: Array<MenuType>,
}

const CustomerSubCategory = (props: PropsData) => {
  const broadCategory = props.data[0]?.broadCategory
  const subCategoryList = props.data[0]?.subCategoryList

  const childRefs = useRef<RefObject<ChildRefMethods>[]>([])
  subCategoryList?.forEach((_, index) => {
    childRefs.current[index] = createRef<ChildRefMethods>()
  })

  // 一時カート
  const [tempCart, setTempCart] = useState<Array<Cart>>([])
  
  // 一時カート追加
  const handleSetTempCart = (data: Cart) => {
    const index = tempCart?.findIndex(item => item.id === data.id)!
    if (index !== -1) {
      tempCart?.splice(index, 1)
    } 
    if (data.count !== 0) {
      tempCart?.push(data)
      setTempCart(tempCart)
    } 
  }

  // カート
  const cart = useSelector((state: CartState) => state.value)
  const handleSetCart = () => {
    const newCart = Array<Cart>(
      ...cart, ...tempCart
    )
    store.dispatch(set(newCart))
    childRefs.current.forEach(_ => _.current?.clear())
  }
  
  return (
    <div>
      <h2 className='text-center text-4xl font-extrabold mb-4'>{broadCategory?.name}</h2>
      <div className='m-5'>
        {
          subCategoryList?.map((item, index) => {
            return (
              <Fragment key={ item.id.valueOf() }>
                <CustomerSubCategoryOne data={item} 
                  counterFunc={handleSetTempCart}
                  ref={childRefs.current[index]}
                />
              </Fragment>
            )
          })
        }
      </div>
      <div className='w-full h-max flex'>
        <button className='w-6/12 h-16 bg-indigo-500 m-auto border-2 rounded-full' onClick={handleSetCart}>カートに追加</button>
      </div>
    </div>
  )
}

export default CustomerSubCategory