'use client'
import '../globals.css'
import { Inter } from 'next/font/google'
import { Provider, useSelector } from 'react-redux'
import { store } from '@/store/ShopStore'
import { useRouter, usePathname } from 'next/navigation'
import { ShopState } from '@/store/ShopStore'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const pathName = usePathname();
  const router = useRouter()
  const shop = useSelector((state: ShopState) => state.value);
  const shopId = shop.id.toString()
  const goToMenu = () => router.push(`/shop/${shopId}/menu`)
  const goToQr = () => router.push(`/shop/${shopId}/qr`)
  
  return (
    <Provider store={store}>
      <div>
        <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
            <span className="font-semibold text-xl tracking-tight">QRオーダーシステム</span>
          </div>
          <ul className="flex flex-wrap items-center mt-3 text-sm text-white font-medium sm:mt-0">
                <li className='grid grid-rows-2 w-auto mr-5 cursor-pointer' onClick={goToMenu}>
                  <span className="i-lucide-clipboard-list w-7 h-7 m-auto"></span>
                  <a href="#" className="hover:underline m-auto">Menu</a>
                </li>
                <li className='grid grid-rows-2 w-auto m-auto cursor-pointer' onClick={goToQr}>
                  <span className="i-lucide-qr-code w-7 h-7 m-auto"></span>
                  <a href="#" className="hover:underline m-auto">QR</a>
                </li>
            </ul>
        </nav>
        <div>{children}</div>
      </div>
    </Provider>
  )
}
