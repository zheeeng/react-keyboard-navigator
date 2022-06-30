import React from 'react'

export type BadgeProps = {
    reference: string,
}

export const Badge = React.memo<BadgeProps>(
    function ({ reference }) {
        return (
            <div style={{ background: 'black', color: 'white', fontWeight: 'bold', fontSize: '1.5em', padding: '1.5em', position: 'fixed', textIndent: '2em', right: 0, bottom: 20 }}>
                Reference: <a href={reference} rel="noopener noreferrer" target="_blank">{reference}</a>
            </div>
        )
    }
)

Badge.displayName = 'Badge'