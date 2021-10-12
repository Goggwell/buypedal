import React from 'react'

const Footer = () => {
    return (
        <footer className="footer--dark" data-scroll-section>
            <div className="container">
                <div className="grid">
                    <div className="grid__column grid__column--6 grid__column--centered">
                        <p data-scroll>&copy; BuyPedal {(new Date().getFullYear())}. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
