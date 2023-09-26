import { MenuType } from '@/types/index'
import { Fragment } from 'react'
import SubCategoryAccordion from './SubCategoryAccordion'

type PropsData = {
  data: Array<MenuType>
}

const SubCategoryGrid = (props: PropsData) => {

  const toggleAccordion = (toggle: boolean) => !toggle

  return (
    <div>
      <p className="text-xl font-bold mt-10 mb-4">小分類</p>
      <div>
        {
          props.data.map(item => {
            return (
              <Fragment key={ item.broadCategory.id.toString()}>
                <SubCategoryAccordion data={item} />
              </Fragment>
            )
          })
        }
      </div>
    </div>
  )
}

export default SubCategoryGrid;