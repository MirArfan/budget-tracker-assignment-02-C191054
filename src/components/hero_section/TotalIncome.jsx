import React from 'react'

function TotalIncome() {
    return (
        <div
            className="mt-4 flex items-center justify-between bg-green-500 px-4 py-3 text-sm"
        >
            <p>Income</p>
            <p>+ BDT <span id="total-income">3,391.45</span></p>
        </div>
    )
}

export default TotalIncome