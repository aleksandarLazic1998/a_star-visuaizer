import { useEffect, useRef } from 'react'

const useOnClickOutside = <T extends Element>(callback: () => void) => {
    const containerRef = useRef<T | null>(null)

    useEffect(() => {
        const listener = (event: MouseEvent | TouchEvent) => {
            if (
                !containerRef.current ||
                containerRef?.current.contains(event.target as Node)
            )
                return

            callback()
        }

        document.addEventListener('mouseup', listener)
        document.removeEventListener('touchstart', listener)
        return () => {
            document.removeEventListener('mouseup', listener)
            document.removeEventListener('touchstart', listener)
        }
        // eslint-disable-next-line
    }, [containerRef, callback])

    return { containerRef }
}

export default useOnClickOutside
