import { AccoutantType } from '@/types'
import { Fragment } from 'react'

type PropsData = {
  data: Array<AccoutantType>
}

const Accountant = (props: PropsData) => {

  console.log(props.data)

  // 会計合計
  let total = 0
  if (props.data.length) {
    total = props.data.reduce((sum, element) => {
      return sum + element.price.valueOf()
    }, 0); 
  }
  
  return (
    <div>
      <h2 className='text-center text-4xl font-extrabold mb-4'>会計</h2>
      {
        props.data?.map(item => {
          return (
            <Fragment key={ item.id.valueOf() }>
              <div className='grid grid-cols-5 border-t-2 border-sky-500 gap-0 p-2'>
                <div className='text-base mt-auto mb-auto col-span-3'>{ item.name }</div>
                <div className='text-base mt-auto mb-auto col-span-1'>{ item.count.toString() }</div>
                <div className='text-base mt-auto mb-auto col-span-1'>{ item.price.toLocaleString() } 円</div>
              </div>
            </Fragment>
          )
        })
      }
      <div className='grid grid-cols-5 border-t-2 border-sky-500 gap-0 p-2'>
        <div className='text-base mt-auto mb-auto col-span-4 font-bold'>合計</div>
        <div className='text-base mt-auto mb-auto col-span-1 font-bold'>{ total.toLocaleString() } 円</div>
      </div>
    </div>
  )
}

export default Accountant