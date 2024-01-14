import { MenuType } from '@/types/index'
import { Fragment } from 'react'
import Image from 'next/image'
import NoImage from '@/public/no_image.jpeg'
import { useRouter, usePathname } from 'next/navigation'

type PropsData = {
  data: Array<MenuType>,
}

const CustomerMenu = (props: PropsData) => {

  const router = useRouter();
  const pathName = usePathname();
  const openMenuPage = (broadCategoryId: number) => router.push(`${pathName}/${broadCategoryId}`);

  return (
    <div>
      <h2 className='text-center text-4xl font-extrabold mb-4'>カテゴリ</h2>
      <div className='m-5 grid grid-cols-2 gap-2'>
        {
          props.data?.map(item => {
            return (
              <Fragment key={ item.broadCategory.id.toString() }>
                <div className="w-36 rounded-md overflow-hidden shadow-lg m-auto" onClick={ () => openMenuPage(item.broadCategory.id.valueOf())}>
                  <Image 
                    src={ NoImage } alt=''
                    className='h-28'
                  />
                  <div className="h-10 flex">
                    <div className="font-bold text-xl m-auto h-fit w-fit">{ item.broadCategory.name }</div>
                  </div>
                </div>
              </Fragment>
            )
          })
        }
      </div>
    </div>
  )
}

export default CustomerMenu