import SearchIcon from '@/assets/icons/search.svg'

export function Search() {
  return (
    <div className='h-[44px] border border-neutral-200 rounded-md flex overflow-hidden'>
      <input type="text" className='h-full p-4' placeholder='Hledat...'/>
      <button className='bg-red-800 h-full p-[12px] flex align-center justify-center cursor-pointer'>
        <SearchIcon/>
      </button>
    </div>
  )
}