import '../globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <div>{children}</div>
      <footer className="fixed bottom-0 left-0 z-20 w-full p-2 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
              <li className='grid grid-rows-2 w-auto m-auto'>
                <span className="i-lucide-layout-grid w-7 h-7 m-auto"></span>
                <a href="#" className="hover:underline md:me-6 m-auto">カテゴリ</a>
              </li>
              <li className='grid grid-rows-2 w-auto m-auto'>
                <span className="i-lucide-shopping-cart w-7 h-7 m-auto"></span>
                <a href="#" className="hover:underline md:me-6 m-auto">会計</a>
              </li>
          </ul>
      </footer>
    </div>
  )
}
