export default () => (
  <div className='animate-pulse'>
    <div className="h-8 w-2/3 rounded bg-neutral-200 mb-4"></div>
    <div className="aspect-3/2 rounded bg-neutral-200 mb-4"></div>
    <div className='h-4 w-1/4 rounded bg-neutral-200 mb-4'></div>
    <div className="h-4 rounded bg-gray-200 mb-4"></div>
    <div className="grid grid-cols-3 gap-4 mb-4">
      <div className="col-span-2 h-4 rounded bg-gray-200"></div>
      <div className="col-span-1 h-4 rounded bg-gray-200"></div>
    </div>
  </div>
)
