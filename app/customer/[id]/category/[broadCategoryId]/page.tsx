"use client"

import { useSearchParams } from 'next/navigation'
import { useState, useEffect } from 'react';
import { getApi } from '@/api/api-call'
import { MenuType } from '@/types/index';
import CustomerMenu from '@/components/CustomerMenu'

const Customer = (
  { params }: { params: { id: string, broadCategoryId: string } },
) => {
  const searchParams = useSearchParams();
  const uniqueId = searchParams.get("id");
  const broadCategoryId = params.broadCategoryId
  const baseUrl = 'http://localhost:9090/'

  
  return (
    <div className="h-screen mr-auto ml-auto mt-4">
      <h1>SUB</h1>
    </div>
  )
};

export default Customer;