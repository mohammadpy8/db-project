import { FC } from 'react'

const EditInfo: FC = () => {
  return (
    <div className="mt-12">
      <div className="text-2xl font-Yek-ExtraBlack text-gray-600 flex justify-center">
        <h1>اطلاعات حساب</h1>
      </div>
      <div className="text-sm font-Yek-Regular text-gray-600 flex justify-center mt-4">
        <div className='flex gap-x-2 items-center'>
          <div>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 20 20"
              className="w-5 h-5"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <div>شماره تلفن قابل ویرایش نیست!</div>
        </div>
          </div>
          <div className="bg-white mt-4 w-[600px] rounded-xl p-8 mr-[330px] h-[600px] mb-8">
              
          </div>
    </div>
  )
}

export default EditInfo
