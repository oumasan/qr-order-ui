'use client'
import '../globals.css'
import { useRouter, useParams } from 'next/navigation'
import { Provider } from 'react-redux'
import { store } from '@/store/CartStore'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const params = useParams()
  const router = useRouter()
  const goToCategory = () => router.push(`/customer/${params.id}/category`)
  const goToCart = () => router.push(`/customer/${params.id}/cart`)
  const goToAccountant = () => router.push(`/customer/${params.id}/accountant`)

  return (
    <Provider store={store}>
      <div>
        <div>{children}</div>
        <footer className="fixed bottom-0 left-0 z-20 w-full p-2 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                <li className='grid grid-rows-2 w-auto m-auto' onClick={goToCategory}>
                  <span className="i-lucide-layout-grid w-7 h-7 m-auto"></span>
                  <a href="#" className="hover:underline md:me-6 m-auto">大分類</a>
                </li>
                <li className='grid grid-rows-2 w-auto m-auto' onClick={goToCart}>
                  <span className="i-lucide-shopping-cart w-7 h-7 m-auto"></span>
                  <a href="#" className="hover:underline md:me-6 m-auto">カート</a>
                </li>
                <li className='grid grid-rows-2 w-auto m-auto' onClick={goToAccountant}>
                  <span className="i-lucide-japanese-yen w-7 h-7 m-auto"></span>
                  <a href="#" className="hover:underline md:me-6 m-auto">会計</a>
                </li>
            </ul>
        </footer>
      </div>
    </Provider>
  )
}
