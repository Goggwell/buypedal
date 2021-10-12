import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const Featured = () => {
    return (
        <section className="home-section home-section--features" data-scroll-section>
            <div className="container">
                <div className="grid">
                    <div className="grid__column grid__column--12">
                        <div className="home-section-header home-section-header--centered">
                            <h2 className="home-section-header__primary-title" data-scroll>Browse our featured catalog of products.</h2>
                            <h3 className="home-section-header__secondary-title" data-scroll>We provide the latest and best equipment ready to go, suited to your needs. Ranging from bicycle parts, to fishing gear.</h3>
                        </div>
                    </div>
                </div>
                <div className="home-section__feature-items grid">
                    <div className="grid__column grid__column--3" data-scroll>
                        <div className="feature-item">
                            <div className="feature-item__icon">
                                <div className="feature-item__icon__image">
                                    <StaticImage 
                                        src="../../assets/images/crankset.jpg"
                                        alt="Crankset"
                                        placeholder="blurred"
                                        layout="fixed"
                                        width={180}
                                        aspectRatio={4/4}
                                    />
                                </div>
                            </div>
                            <h3 className="feature-item__title">Crankset</h3>
                            <p className="feature-item__description">Standard crankset,<br/> 175mm 52/36</p>
                        </div>
                    </div>
                    <div className="grid__column grid__column--3" data-scroll>
                        <div className="feature-item">
                            <div className="feature-item__icon">
                                <div className="feature-item__icon__image">
                                    <StaticImage 
                                        src="../../assets/images/pedal.jpg"
                                        alt="Pedal"
                                        placeholder="blurred"
                                        layout="fixed"
                                        width={180}
                                        aspectRatio={4/4}
                                    />
                                </div>
                            </div>
                            <h3 className="feature-item__title">CXWXC Bike Pedals</h3>
                            <p className="feature-item__description">Aluminum Alloy Bicycle Pedals</p>
                        </div>
                    </div>
                    <div className="grid__column grid__column--3" data-scroll>
                        <div className="feature-item">
                            <div className="feature-item__icon">
                                <div className="feature-item__icon__image">
                                    <StaticImage 
                                        src="../../assets/images/tyre.png"
                                        alt="Pedal"
                                        placeholder="blurred"
                                        layout="fixed"
                                        width={140}
                                        aspectRatio={4/4}
                                    />
                                </div>
                            </div>
                            <h3 className="feature-item__title">Hardshell Bike Tyre</h3>
                            <p className="feature-item__description">Continental Gator Hardshell Road Bike Tyre</p>
                        </div>
                    </div>
                    <div className="grid__column grid__column--3" data-scroll>
                        <div className="feature-item">
                            <div className="feature-item__icon">
                                <div className="feature-item__icon__image">
                                    <StaticImage 
                                        src="../../assets/images/saddle.jpg"
                                        alt="Pedal"
                                        placeholder="blurred"
                                        layout="fixed"
                                        width={180}
                                        aspectRatio={4/4}
                                    />
                                </div>
                            </div>
                            <h3 className="feature-item__title">3D Printed Saddle</h3>
                            <p className="feature-item__description">Fizik Antares Versus EVO R3 Adaptive</p>
                        </div>
                    </div>
                    <div className="grid__column grid__column--3 clear" data-scroll>
                        <div className="feature-item">
                            <div className="feature-item__icon">
                                <div className="feature-item__icon__image">
                                    <StaticImage 
                                        src="../../assets/images/reel.png"
                                        alt="Reel"
                                        placeholder="blurred"
                                        layout="fixed"
                                        width={140}
                                        aspectRatio={4/4}
                                    />
                                </div>
                            </div>
                            <h3 className="feature-item__title">Revo EXD Reel</h3>
                            <p className="feature-item__description">Made by Abu Garcia, it's low profile</p>
                        </div>
                    </div>
                    <div className="grid__column grid__column--3" data-scroll>
                        <div className="feature-item">
                            <div className="feature-item__icon">
                                <div className="feature-item__icon__image">
                                    <StaticImage 
                                        src="../../assets/images/lure3.jpeg"
                                        alt="Lure"
                                        placeholder="blurred"
                                        layout="fixed"
                                        width={140}
                                        aspectRatio={4/4}
                                    />
                                </div>
                            </div>
                            <h3 className="feature-item__title">Robotic Lure</h3>
                            <p className="feature-item__description">oddfisher Robotic Fishing Lure, Electric</p>
                        </div>
                    </div>
                    <div className="grid__column grid__column--3" data-scroll>
                        <div className="feature-item">
                            <div className="feature-item__icon">
                                <div className="feature-item__icon__image">
                                    <StaticImage 
                                        src="../../assets/images/line.jpg"
                                        alt="Line"
                                        placeholder="blurred"
                                        layout="fixed"
                                        width={140}
                                        aspectRatio={4/4}
                                    />
                                </div>
                            </div>
                            <h3 className="feature-item__title">Goture Fishing Line</h3>
                            <p className="feature-item__description">Braided, Multifilament, 500M, 4 Strands</p>
                        </div>
                    </div>
                    <div className="grid__column grid__column--3" data-scroll>
                        <div className="feature-item">
                            <div className="feature-item__icon">
                                <div className="feature-item__icon__image">
                                    <StaticImage 
                                        src="../../assets/images/hook.jpg"
                                        alt="Hook"
                                        placeholder="blurred"
                                        layout="fixed"
                                        width={140}
                                        aspectRatio={4/4}
                                    />
                                </div>
                            </div>
                            <h3 className="feature-item__title">Fishing Hook</h3>
                            <p className="feature-item__description">Standard hook, perfect for carp, and other big fish</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Featured