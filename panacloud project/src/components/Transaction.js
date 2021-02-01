import React from 'react'

export const Transaction = () => {
    return (
        <div>
            <form>
                <div>
                    <label>
                        Description
                        <input
                            type="text"
                            id="description"
                            placeholder="Ennter the Description">
                        </input>
                    </label>
                </div>
                <div>
                    <label>
                        Amount
                        <input
                            type="number"
                            id="Amount"
                            placeholder = "Number Supported Only ">
                        </input>
                    </label>
                </div>

            </form>
        </div>
    )
}
