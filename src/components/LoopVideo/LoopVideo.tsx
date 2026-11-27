import { useEffect, useRef, useState } from "react"

type LoopVideoProps = {
  /** Path to the .mp4 file */
  src: string
  /** Still image shown before the video loads. Defaults to "<src>-poster.webp" */
  poster?: string
  className?: string
  /** false = load immediately (use for videos at the top of the page) */
  lazy?: boolean
}

const canObserve = typeof window !== "undefined" && "IntersectionObserver" in window

/**
 * Silent looping video that replaces animated GIFs.
 * Only downloads when it gets close to the viewport and pauses when off-screen.
 */
function LoopVideo({ src, poster, className, lazy = true }: LoopVideoProps) {
  const ref = useRef<HTMLVideoElement>(null)
  const [load, setLoad] = useState(!lazy || !canObserve)

  useEffect(() => {
    const el = ref.current
    if (!el || !canObserve) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoad(true)
          el.play().catch(() => {})
        } else {
          el.pause()
        }
      },
      { rootMargin: "300px 0px" }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <video
      ref={ref}
      className={className}
      src={load ? src : undefined}
      poster={poster ?? src.replace(/\.mp4$/, "-poster.webp")}
      preload={load ? "auto" : "none"}
      autoPlay
      loop
      muted
      playsInline
      aria-hidden="true"
    />
  )
}

export default LoopVideo
