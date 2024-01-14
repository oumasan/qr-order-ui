import { Cart } from '@/types/index'
import { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { CartState } from '@/store/CartStore'
import { set, clear } from "@/store/CartStore";
import { store } from '@/store/CartStore'

type PropsData = {
  data: Array<Cart>,
  orderFunc: Function
}

const Cart = (props: PropsData) => {

  const cart = useSelector((state: CartState) => state.value);
  const handleDelete = (id: number) => {
    const newCart = cart.filter(item => item.id.valueOf() !== id)
    store.dispatch(set(newCart))
  }
  const handleOrder = () => props.orderFunc(cart)

  return (
    <div>
      <div className='m-5'>
        {
          props.data?.map(item => {
            return (
              <Fragment key={ item.id.valueOf() }>
                <div className='grid grid-cols-6 border-t-2 border-sky-500 gap-0 p-2'>
                  <div className='text-base mt-auto mb-auto col-span-3'>{ item.name }</div>
                  <div className='text-base mt-auto mb-auto col-span-1'>{ item.count.toString() }</div>
                  <div className='text-base mt-auto mb-auto col-span-1'>{ item.price.toLocaleString() } 円</div>
                  <button type='button' onClick={() => handleDelete(item.id.valueOf())} className='w-max h-max mt-auto mb-auto col-span-1 shadow-lg bg-red-500 hover:bg-red-300 shadow-red-500/50 text-white rounded px-2 py-1'>削除</button>
                </div>
              </Fragment>
            )
          })
        }
        {
          props.data?.length !== 0
          ? 
          <div className='w-full h-max flex'>
            <button className='w-6/12 h-16 bg-indigo-500 m-auto border-2 rounded-full' onClick={handleOrder}>注文確定</button>
          </div> 
          : ''
        }
      </div>
    </div>
  )
}

export default Cart