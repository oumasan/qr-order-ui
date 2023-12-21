import { MenuType } from '@/types/index'
import { Fragment } from 'react'
import SubCategoryAccordion from './SubCategoryAccordion'

type PropsData = {
  data: Array<MenuType>,
  onPostTrigger: Function,
  onDeleteTrigger: Function,
}

const SubCategoryGrid = (props: PropsData) => {

  const toggleAccordion = (toggle: boolean) => !toggle
  const handlePost = (data: any) => props.onPostTrigger(data)
  const handleDelete = (id: Number) => props.onDeleteTrigger(id)

  return (
    <div>
      <p className="text-xl font-bold mt-10 mb-4">小分類</p>
      <div>
        {
          props.data.map(item => {
            return (
              <Fragment key={ item.broadCategory.id.toString()}>
                <SubCategoryAccordion 
                  data={item} 
                  onPostTrigger = { handlePost }
                  onDeleteTrigger= { handleDelete }
                />
              </Fragment>
            )
          })
        }
      </div>
    </div>
  )
}

export default SubCategoryGrid;