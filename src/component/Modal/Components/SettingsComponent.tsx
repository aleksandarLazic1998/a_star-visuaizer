import React, { useRef } from 'react'

import './SettingsComponent.scss'

function SettingsComponent() {
    const rowRef = useRef<HTMLInputElement | null>(null)
    const colRef = useRef<HTMLInputElement | null>(null)
    const startRef = useRef<HTMLInputElement | null>(null)
    const endRef = useRef<HTMLInputElement | null>(null)
    const blockingObjectsNumberRef = useRef<HTMLInputElement | null>(null)

    return (
        <form className="settings">
            <div>
                <label htmlFor="row">Number of Rows:</label>
                <input
                    id="row"
                    type="number"
                    min="2"
                    ref={rowRef}
                    defaultValue="2"
                    aria-label="Number of Rows"
                />
            </div>
            <div>
                <label htmlFor="col">Number of Columns:</label>
                <input
                    id="col"
                    type="number"
                    min="2"
                    ref={colRef}
                    defaultValue="2"
                    aria-label="Number of Columns"
                />
            </div>
            <div>
                <label htmlFor="start">Start Position:</label>
                <input
                    id="start"
                    type="text"
                    ref={startRef}
                    aria-label="Start Position"
                />
            </div>
            <div>
                <label htmlFor="end">End Position:</label>
                <input
                    id="end"
                    type="text"
                    ref={endRef}
                    aria-label="End Position"
                />
            </div>
            <div>
                <label htmlFor="blocking">Number of Blocking Objects:</label>
                <input
                    id="blocking"
                    type="number"
                    min="0"
                    ref={blockingObjectsNumberRef}
                    aria-label="Number of Blocking Objects"
                />
            </div>

            <button type="button">Set The Values</button>
        </form>
    )
}
export default SettingsComponent
