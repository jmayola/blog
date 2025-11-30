import { cn } from '@/lib/utils'
import React, { useEffect, useRef } from 'react'
import ImageCard from './ui/image_card';
import { createTimeline, set, stagger, animate } from 'animejs';

export interface ImageCarrouselItem {
    title: string;
    src: string;
}

export default function ImageCarrousel({ items, className, ...props }: React.ComponentProps<"div"> & {
    items: ImageCarrouselItem[]
})  {
    const rootRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const rootEl = rootRef.current;
        if (!rootEl) return;

        const $images = rootEl.querySelectorAll('.image-card');
        
        // Reset initial state
        set($images, {
            opacity: 0,
            scale: 0.8,
            y: 50,
            rotateY: 45
        });

        // Create timeline for better control
        const timeline = createTimeline({
            loop: true,
            autoplay: true,
            duration: 5000
        });

        // Main animation sequence
        timeline
            // Entrance animation
            .add($images,{
                opacity: [0, 1],
                scale: [0.8, 1],
                y: [50, 0],
                rotateY: [45, 0],
                duration: 1200,
                easing: 'easeOutCubic',
                delay: stagger(150, { start: 300 })
            })
            // Subtle hover-like effect
            .add($images,{
                scale: [1, 1.02],
                duration: 800,
                easing: 'easeInOutQuad',
                delay: stagger(100)
            })
            // Exit animation
            .add($images,{
                opacity: [1, 0],
                scale: [1.02, 0.9],
                y: [0, -30],
                rotateY: [0, -30],
                duration: 1000,
                easing: 'easeInCubic',
                delay: stagger(100)
            });
    }, []);

    // parallax effect on hover
    const handleMouseMove = (e: React.MouseEvent) => {
        if (!rootRef.current) return;
        
        const $images = rootRef.current.querySelectorAll('.image-card');
        const { left, top, width, height } = rootRef.current.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;

        animate($images,{
            translateX: stagger(10 * x),
            translateY: stagger(10 * y),
            rotateY: stagger(5 * x),
            duration: 500,
            easing: 'easeOutQuad'
        });
    };

    const handleMouseLeave = () => {
        if (!rootRef.current) return;
        
        const $images = rootRef.current.querySelectorAll('.image-card');
        animate($images,{
            translateX: 0,
            translateY: 0,
            rotateY: 0,
            duration: 800,
            easing: 'easeOutElastic(1, .8)'
        });
    };

    return (
        <div 
            id='carrousel' 
            ref={rootRef}
            className={cn(
                "grid grid-cols-3 gap-2 p-10 auto-rows-min overflow-hidden cursor-pointer",
                "perspective-1000",
                className
            )} 
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            {...props}
        >
            {items.map((val, i) => (
                <ImageCard 
                    key={i} 
                    src={val.src} 
                    alt={val.title ?? "mayola's image"} 
                    className="image-card transform-style-preserve-3d" 
                />
            ))}
        </div>
    )
}