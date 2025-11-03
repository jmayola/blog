import { cn } from '@/lib/utils'
import React from 'react'

export default function ImageCard({ className, src, ...props }: React.ComponentProps<"img">) {
  return (
    <div className={cn("rounded-2xl overflow-hidden aspect-square transition-all duration-300 hover:scale-105 hover:shadow-xl",className)}>
        <img src={src} className="w-full h-full object-cover" alt="" {...props} />
    </div>    
  )
}