interface TagsProps {
  tags: (string | null | undefined)[] | undefined
}

export function Tags({ tags }: TagsProps) {
  if (!tags || tags.length === 0) return (
    <div></div>
  )

  return (
    <div className='flex items-center mb-4'>
      {tags.map((tag, index) => (
        <div key={index} className='flex items-center'>
          <span className='text-sm text-red-700 uppercase'>{tag}</span>
          {index < tags.length - 1 && (
            <span className='h-4 w-px bg-red-700 mx-3'></span>
          )}
        </div>
      ))}
    </div>
  )
}