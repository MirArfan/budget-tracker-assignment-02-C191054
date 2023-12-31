import React from 'react'

function TotalExpanse() {
    return (
        <div
            className="mt-2 flex items-center justify-between bg-red-500 px-4 py-3 text-sm"
        >
            <span>Expenses</span>
            <p>- BDT <span id="total-expanse">1,762.69</span></p>
        </div>
    )
}

export default TotalExpanse