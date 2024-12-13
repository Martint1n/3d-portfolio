import React from 'react'


function StackCard({ svgIcon, isOdd }) {

    
    return (
        isOdd ? (
        <div className="m-5 p-2 w-[10vw] border-dotted border-l-1 border-r-1">
            {svgIcon}
        </div>
        ) :
        (
            <div className="m-5 p-2 w-[10vw] border-dotted border-t-1 border-b-1">
            {svgIcon}
        </div>
        )
    )
}

export default StackCard