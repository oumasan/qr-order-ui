import { MenuType } from '@/types/index'
import { Fragment, useState } from 'react'
import Image from 'next/image'
import NoImage from '@/public/no_image.jpeg'

type PropsData = {
  data: MenuType
}

const SubCategoryAccordion = (props: PropsData) => {
  const [flag, switchFlag] = useState<Boolean>(false);
  const handleSwitch = () => {
    switchFlag(!flag);
  }; 

  return (
    <>
      <h2 onClick={ handleSwitch }>
      <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800">
        <span>{ props.data.broadCategory.name }</span>
        <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
        </svg>
      </button>
    </h2>
    <div className={!flag ? 'hidden' : 'visible'}>
      <div className='grid grid-cols-3 mt-5 ml-3 divide-y'>
        {
          props.data.subCategoryList.map(item => {
            return (
              <Fragment key={ item.id.toString() }>
                <div className='pt-3 pb-3'>
                  { item.name }
                </div>
                <div>
                  <Image 
                    src={ item.imageUrl ? item.imageUrl.toString() : NoImage } alt=''
                    width={100}
                    height={100}
                  />
                </div>
                <div className='pt-3 pb-3'>
                  { `${item.price}円` }
                </div>
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
    </>
  );
}

export default SubCategoryAccordion