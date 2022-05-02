import React, { ReactElement } from 'react'
import MySidebar from '../components/general/MySidebar'

interface SkeletonProps {
    children: ReactElement | ReactElement[],
}

export const PageSkeleton = ({ children }: SkeletonProps) => {
    return (
        <MySidebar
            children={children}
        />
    )
}