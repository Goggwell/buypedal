import React, { useState, useEffect, useRef } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import gsap from 'gsap'
import SplitText from '../../utils/Split3.min'

const Index = () => {
    const [cycleHovered, setCycleHovered] = useState(false);
    const [fishHovered, setFishHovered] = useState(false);
    const toggleCycleHover = () => setCycleHovered(!cycleHovered);
    const toggleFishHover = () => setFishHovered(!fishHovered);

    useEffect(() => {
        const split = new SplitText("#header-text", {
            type: 'lines',
            linesClass: 'lineChildren',
        })

        gsap.to(split.lines, {
            duration: 2,
            y: 0,
            opacity: 1,
            stagger: 0.1,
            ease: 'power2',
        })
    }, [])

    return (
        <section className="hero-section" data-scroll-section>
            <div 
                className={cycleHovered 
                           ? 'hero-section--cycling hero-section--cycling--hovered'
                           : 'hero-section--cycling'}
            >
                <StaticImage 
                    src="../../assets/images/cycle.jpg"
                    alt="Cycling"
                    placeholder="blurred"
                    layout="fixed"
                    width={200}
                    aspectRatio={4/4}
                />
            </div>
            <div
                className={fishHovered 
                           ? 'hero-section--fishing hero-section--fishing--hovered'
                           : 'hero-section--fishing'}
            >
                    <StaticImage 
                        src="../../assets/images/fishing.jpg"
                        alt="Fishing"
                        placeholder="blurred"
                        layout="fixed"
                        width={200}
                        aspectRatio={4/4}
                    />
            </div>
            <div className={cycleHovered ? '' : 'cycle-circle'}
            >
            </div>
            <div className={fishHovered ? '' : 'fish-circle'}>
            </div>
            <div className="hero-section__block global-u-text-center" id="header-text">
                <h1 className="hero-section__primary-title">Have an adventure</h1>
                <h2 className="hero-section__secondary-title">
                    We bring <span className="hero-section__secondary-title--cycling" onMouseEnter={toggleCycleHover} onMouseLeave={toggleCycleHover}>cycling</span> and <span className="hero-section__secondary-title--fishing" onMouseEnter={toggleFishHover} onMouseLeave={toggleFishHover}>fishing</span> gear to your doorstep.
                </h2>
                <div className="hero-section__call-to-action">
                    <a class="button button--large button--green" href="/">See our products</a>
                </div>
            </div>
        </section>
    )
}

export default Index
