import React from 'react'

const SkeletonLoader = () => {
    return (
        <>
            <div role='status' class='animate-pulse space-x-4 max-w-3xl'>
                <div class="h-6  g-gray-200 rounded-md dark:bg-gray-500 w-1/2 mb-2"></div>

                <div class="space-y-2">
                    <div class="h-3 bg-gray-200 rounded dark:bg-gray-500 w-full"></div>
                    <div class="h-3 bg-gray-200 rounded dark:bg-gray-500 w-11/12"></div>
                    <div class="h-3 bg-gray-200 rounded dark:bg-gray-500 w-10/12"></div>
                    <div class="h-3 bg-gray-200 rounded dark:bg-gray-500 w-9/12"></div>
                </div>

                <div class="bg-gray-100 dark:bg-gray-500 rounded p-4 space-y-2">
                    <div class="h-2.5 bg-gray-300 rounded w-3/4"></div>
                    <div class="h-2.5 bg-gray-300 rounded w-2/3"></div>
                    <div class="h-2.5 bg-gray-300 rounded w-1/2"></div>
                </div>
            </div>

            <div role='status' class="animate-pulse space-y-4 max-w-3xl mt-10">
                <div class="h-4 bg-gray-200 rounded-mg dark:bg-gray-500 w-1/2"></div>

                <div class="space-y-2">
                    <div class="h-3 bg-gray-200 rounded dark:bg-gray-500 w-full"></div>
                    <div class="h-3 bg-gray-200 rounded dark:bg-gray-500 w-11/12"></div>
                    <div class="h-3 bg-gray-200 rounded dark:bg-gray-500 w-10/12"></div>
                    <div class="h-3 bg-gray-200 rounded dark:bg-gray-500 w-9/12"></div>
                </div>
                <div class="space-y-2">
                    <div class="h-3 bg-gray-200 rounded dark:bg-gray-500 w-full"></div>
                    <div class="h-3 bg-gray-200 rounded dark:bg-gray-500 w-11/12"></div>
                    <div class="h-3 bg-gray-200 rounded dark:bg-gray-500 w-10/12"></div>
                    <div class="h-3 bg-gray-200 rounded dark:bg-gray-500 w-9/12"></div>
                </div>

                <div class="bg-gray-100 dark:bg-gray-500 rounded p-4 space-y-2 ">
                    <div class="h-2.5 bg-gray-300 rounded w-3/4"></div>
                    <div class="h-2.5 bg-gray-300 rounded w-2/3"></div>
                </div>

                <div class="h-4 bg-gray-200 rounded-md dark:bg-gray-500 w-1/2 mt-8"></div>

                <div class="space-y-2">
                    <div class="h-3 bg-gray-200 rounded dark:bg-gray-500 w-full"></div>
                    <div class="h-3 bg-gray-200 rounded dark:bg-gray-500 w-11/12"></div>
                    <div class="h-3 bg-gray-200 rounded dark:bg-gray-500 w-10/12"></div>
                    <div class="h-3 bg-gray-200 rounded dark:bg-gray-500 w-9/12"></div>
                </div>

            </div>
        </>
    )
}

export default SkeletonLoader