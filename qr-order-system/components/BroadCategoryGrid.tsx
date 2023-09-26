import { BroadCategoryType } from '@/types/index'
import { Fragment } from 'react'

type PropsData = {
  data: Array<BroadCategoryType>,
}

const BroadCategoryGrid = (props: PropsData) => {
  return (
    <div>
      <p className="text-xl font-bold mt-10 mb-4">大分類</p>
      <div className='grid grid-cols-2 mt-5 ml-3 divide-y'>
        { 
          props.data.map(item => {
            return (
              <Fragment key={ item.id.toString() }>
                <div className='pt-3 pb-3'>
                  { item.name }
                </div>
                <button className="w-max h-max shadow-lg bg-red-500 shadow-red-500/50 text-white rounded px-2 py-1">削除</button>
              </Fragment>
            )
          })
        }
        <div className='pt-3 pb-3'>
          <input type="text" placeholder='' className='block w-4/5 px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300'/>
        </div>
        <button className="w-max h-max mt-auto mb-auto shadow-lg bg-blue-500 shadow-blue-500/50 text-white rounded px-2 py-1">追加</button>
      </div>
    </div>
  )
}

export default BroadCategoryGrid;

