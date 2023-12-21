import { MenuType } from '@/types/index'
import { Fragment, useState } from 'react'
import Image from 'next/image'
import NoImage from '@/public/no_image.jpeg'
import { useForm } from 'react-hook-form';

type PropsData = {
  data: MenuType,
  onPostTrigger: Function,
  onDeleteTrigger: Function
}

const SubCategoryAccordion = (props: PropsData) => {

  // バリデーション
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [flag, switchFlag] = useState<Boolean>(false)
  
  const handleSwitch = () => switchFlag(!flag);
  const onSubmit = (data: any) => props.onPostTrigger(data)
  const handleDelete = (id: Number) => props.onDeleteTrigger(id)

  return (
    <>
      <h2 onClick={ handleSwitch }>
        <button type='button' className='flex items-center justify-between w-full p-5 font-medium text-left text-black-500 border border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 bg-sky-500 hover:bg-sky-300'>
          <span>{ props.data.broadCategory.name }</span>
          <svg data-accordion-icon className='w-3 h-3 rotate-180 shrink-0' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 10 6'>
            <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 5 5 1 1 5'/>
          </svg>
        </button>
      </h2>
      <div className={!flag ? 'hidden' : 'visible'}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='grid grid-cols-5 mt-5 ml-3 divide-y'>
            {
              props.data.subCategoryList.map(item => {
                return (
                  <Fragment key={item.id.toString()}>
                    <div className='pt-3 pb-3 col-span-2 align-middle flex'>
                      <div className='mt-auto mb-auto'>{ item.name }</div>
                    </div>
                    <div>
                      <Image 
                        src={ item.imageUrl ? item.imageUrl.toString() : NoImage } alt=''
                        width={100}
                        height={100}
                      />
                    </div>
                    <div className='pt-3 pb-3 flex'>
                      <div className='mt-auto mb-auto'>{ `${item.price}円` }</div>
                    </div>
                    <button type='button' onClick={() => handleDelete(item.id)} className='w-max h-max mt-auto mb-auto shadow-lg bg-red-500 hover:bg-red-300 shadow-red-500/50 text-white rounded px-2 py-1'>削除</button>
                  </Fragment>
                )
              })
            }
            <div className='pt-3 pb-3 col-span-2'>
              <input type='text' placeholder='名前(例：豚バラ)' className='block border-2 border-indigo-500/75 w-4/5 px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform rounded-lg text-neutral-600 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300'
                {...register('name', { required: true })}
              />
              <input type='hidden' value={props.data.broadCategory.id.valueOf()} 
                {...register('broadCategoryId')}
              />
              {errors.name && <div className='text-red-500'>入力が必須の項目です</div>}
            </div>
            <button type='button' className='w-max h-max mt-auto mb-auto shadow-lg bg-blue-500 hover:bg-blue-300 shadow-blue-500/50 text-white rounded px-2 py-1'>アップロード</button>
            <div className='pt-3 pb-3'>
              <input type='text' placeholder='値段' className='block border-2 border-indigo-500/75 w-4/5 px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform rounded-lg text-neutral-600 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300'
                {...register('price', { required: true, pattern: /^([1-9]\d*|0)$/ })}
              />
              {errors.price && <div className='text-red-500'>不正な入力値です</div>}
            </div>
            <button className='w-max h-max mt-auto mb-auto shadow-lg bg-blue-500 hover:bg-blue-300 shadow-blue-500/50 text-white rounded px-2 py-1'>追加</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SubCategoryAccordion