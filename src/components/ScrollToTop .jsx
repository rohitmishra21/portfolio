import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {
    const { pathName } = useLocation()
    console.log(pathName);
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathName])

    return (
        <div>

        </div>
    )
}

export default ScrollToTop 
