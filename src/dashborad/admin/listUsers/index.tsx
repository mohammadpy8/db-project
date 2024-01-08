import { FC, useEffect, useState } from 'react'
import useLocalStorage from '../../../hooks/useLocalStorage'

const ListUsers: FC = () => {
  const [users, setUsers] = useState<any>([])
  console.log(users);
  
  const getToken = useLocalStorage('', 'GET')
  console.log(getToken)

  useEffect(() => {
    fetch('http://127.0.0.1:8000/digital/customer/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `JWT ${getToken}`,
      },
    })
      .then((res) => res.json())
      .then((result) => setUsers(result))
  }, [])
  return (
    <div className="p-9">
      <div className="text-2xl font-Yek-ExtraBlack text-gray-600">
        <h1>لیست کاربرها</h1>
      </div>
      <div className="bg-white mt-4 rounded-xl p-8">
        <div className="text-lg font-Yek-ExtraBlack flex gap-x-1 mb-2 text-gray-700">
          <h1>تعداد:</h1>
          <p></p>
        </div>
        <div className="space-y-4"></div>
      </div>
    </div>
  )
}

export default ListUsers
