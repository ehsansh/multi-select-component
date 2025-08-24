import { useEffect, useRef, useCallback } from 'react';

export const useClickOutside = (handler: () => void) => {
    const ref = useRef<HTMLDivElement>(null);

    const memoizedHandler = useCallback(handler, [handler]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                memoizedHandler();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [memoizedHandler]);

    return ref;
};
