import React from 'react'

import { CookieBanner } from '@palmabit/react-cookie-law';
import Theme from '../theme'

export default function CookieConsent(props) {
    return (
        <CookieBanner
            message="This site uses cookies to enhance your experience and help us improve"
            showDeclineButton={true}
            styles={{
                message: {
                    color: '#222',
                    fontSize: '0.95rem',
                    marginBottom: '0.5rem'
                },
                optionLabel: {
                    fontSize: '0.85rem',
                    color: Theme.colors["green"]["600"],
                    fontWeight: '500',
                    paddingLeft: '1.25rem',
                    position: 'relative',
                    top: '-2px'
                },
                policy: {
                    padding: 0,
                    fontSize: '0.9rem',
                    color: Theme.colors["green"]["600"],
                    fontWeight: '600',
                    marginLeft: '0 !important'
                },
                dialog: {
                    borderTopWidth: '2px',
                    borderColor: Theme.colors["green"]["500"],
                    position: 'fixed',
                    bottom: '0',
                    left: '0',
                    zIndex: '200',
                    width: '100%',
                    padding: "20px 20px 20px",
                    backgroundColor: Theme.colors["green"]["50"]
                },
                button: {
                    color: 'white',
                    borderRadius: '5px',
                    marginLeft: '15px',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    padding: '0.5rem 1rem',
                    backgroundColor: Theme.colors["green"]["500"]
                }
            }}
        />
    )

}