import { ComponentPropsWithRef, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge'

interface ButtonProps extends ComponentPropsWithRef<'button'> {
  variant: 'outlined' | 'text'
  leftSection?: ReactNode
}

export function Button ({ variant, leftSection, children, ...props }: ButtonProps) {
  return (
    <>
      <button
        {...props}
        className={twMerge(`py-[8px] px-[16px] rounded-md ${variant === 'outlined' && 'border-1 border-neutral-400 shadow'} cursor-pointer flex gap-[4px] justify-between items-center`, props.className)}
      >
        {leftSection}
        {children}
      </button>
    </>
  )
}