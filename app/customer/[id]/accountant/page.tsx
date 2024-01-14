"use client"

import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { CartState } from '@/store/CartStore'
import { getApi } from '@/api/api-call'
import { AccoutantType } from '@/types'
import Accountant from '@/components/Accountant'

const Customer = () => {
  const baseUrl = process.env.apiBaseUrl
  // Menu
  const [accountant, setAccountant] = useState<Array<AccoutantType> | []>([])

  const uniqueId = useSelector((state: CartState) => state.id)

  // 初期情報取得
  useEffect(() => {
    const fetchData = async () => {
      const res = await getApi(`${baseUrl}customer/accoutant/${uniqueId}`)
      if (res.ok) {
        const data: Array<AccoutantType> = await res.json()
        setAccountant(data)
      } 
    }
    fetchData()
  }, [])

  return (
    <div className="h-screen mr-auto ml-auto mt-4">
      <Accountant data={accountant} />
    </div>
  )
};

export default Customer;