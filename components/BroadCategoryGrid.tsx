import { MenuType } from '@/types/index'
import { Fragment } from 'react'
import { useForm } from 'react-hook-form';

type PropsData = {
  data: Array<MenuType> | null,
  handlePostBroadCategory: Function,
  handleDeleteBroadCategory: Function
}

const BroadCategoryGrid = (props: PropsData) => {

  // バリデーション
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // 大分類登録
  const onSubmit = async (data: any) => {
    await props.handlePostBroadCategory(data.category)
  };

  // 大分類削除
  const handleDelete = (id: Number) => {
    props.handleDeleteBroadCategory(id)
  }

  return (
    <div>
      <p className="text-xl font-bold mt-10 mb-4">大分類</p>
        {
          props.data?.length === 0
          ? <h2>メニューは登録されていません。</h2>
          :
          <div className='grid grid-cols-2 mt-5 ml-3 divide-y'>
            { 
              props.data?.map(item => {
                return (
                  <Fragment key={ item.broadCategory.id.toString() }>
                    <div className='pt-3 pb-3'>
                      { item.broadCategory.name }
                    </div>
                    <button className="w-max h-max shadow-lg bg-red-500 hover:bg-red-300 shadow-red-500/50 text-white rounded px-2 py-1" onClick={ () => handleDelete(item.broadCategory.id)}>削除</button>
                  </Fragment>
                )
              })
            }
          </div>
        }
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='grid grid-cols-2 mt-5 ml-3 divide-y'>
            <div className='pt-3 pb-3'>
              <input type="text" placeholder='' className='block w-4/5 px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300'
                {...register('category', { required: true })}
              />
              {errors.category && <div className='text-red-500'>入力が必須の項目です</div>}
            </div>
            <button className="w-max h-max mt-auto mb-auto shadow-lg bg-blue-500 hover:bg-blue-300 shadow-blue-500/50 text-white rounded px-2 py-1"
            >追加</button>
          </div>
        </form>
    </div>
  )
}

export default BroadCategoryGrid;

