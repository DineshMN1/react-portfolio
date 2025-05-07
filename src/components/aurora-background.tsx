"use client"
import { cn } from "../lib/utils"
import type React from "react"
import type { ReactNode } from "react"
import { useCallback } from "react"

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode
  showRadialGradient?: boolean
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  const gradientClasses = useCallback(() =>
    cn(
      `
      [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)]
      [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)]
      [--aurora:repeating-linear-gradient(100deg,rgba(0, 0, 255, 0.5)_10%, rgba(0, 0, 200, 0.3)_15%, rgba(0, 0, 150, 0.2)_20%, rgba(255, 255, 255, 0)_25%, rgba(0, 0, 255, 0.5)_30%)]  /* Blue gradient */
      [background-image:var(--white-gradient),var(--aurora)]
      dark:[background-image:var(--dark-gradient),var(--aurora)]
      [background-size:300%,_200%]
      [background-position:50%_50%,50%_50%]
      filter blur-[20px] invert dark:invert-0
      after:content-[""] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] 
      after:dark:[background-image:var(--dark-gradient),var(--aurora)]
      after:[background-size:200%,_100%] 
      after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
      pointer-events-none
      absolute -inset-[10px] opacity-50 will-change-transform`,

      showRadialGradient && `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`
    ), [showRadialGradient]);

  return (
    <main>
      <div className={cn("bg-black transition-bg", className)} {...props}>
        <div className="overflow-hidden opacity-30">
          <div className={gradientClasses()}></div>
        </div>
        {children}
      </div>
    </main>
  )
}
