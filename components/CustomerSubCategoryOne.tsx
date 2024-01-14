import Image from 'next/image'
import NoImage from '@/public/no_image.jpeg'
import { SubCategoryType } from '@/types/index'
import { useState, forwardRef, useImperativeHandle } from 'react'

type PropsData = {
  data: SubCategoryType,
  counterFunc: Function
}

export type ChildRefMethods = {
  clear: () => void
}

export const CustomerSubCategoryOne = forwardRef<ChildRefMethods, PropsData>(({ ...props }, ref) => {

  let [count, setCount] = useState<number>(0)

  const handleChange = (e: any) => setCount(e.target.value)
  const handleIncrement = () => {
    setCount(++count)
    props.counterFunc({
      id: props.data.id,
      name: props.data.name,
      count: count,
      price: props.data.price.valueOf() * count
    })
  }  
  const handleDecrement = () =>{
    if (count !== 0) {
      setCount(--count)
      props.counterFunc({
        id: props.data.id,
        name: props.data.name,
        count: count
      })
    }
  }

  const clear = () => setCount(0)

  useImperativeHandle(
    ref,
    () => {
      return {
        clear,
      }
    },
    []
  )

  return (
    <div className='grid grid-cols-6 border-t-2 border-black gap-0 p-2'>
      <div className='text-base mt-auto mb-auto col-span-2'>{ props.data.name }<br/>{ `${props.data.price}円` }</div>
      <div>
        <Image 
          src={ props.data.imageUrl ? props.data.imageUrl.toString() : NoImage } alt=''
          width={90}
          height={90}
        />
      </div>
      <span className="i-lucide-minus-square text-red-400 w-6 h-6 m-auto" onClick={handleDecrement}></span>
      <input inputMode='numeric' className='h-7 w-10 m-auto p-1' value={count} onChange={handleChange}/>
      <span className="i-lucide-plus-square text-blue-400 w-6 h-6 m-auto" onClick={handleIncrement}></span>
    </div>
  )
})