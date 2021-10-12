import React, { useState, useEffect, useRef } from 'react'
import CursorAnim from '../components/Cursor'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Featured from '../components/Featured'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import SEO from '../components/SEO/SEO'

import useLocoScroll from '../hooks/useLocoScroll'

const Home = () => {
    const ref = useRef(null)
    const [preloader, setPreloader] = useState(true)
    useLocoScroll(!preloader)
    useEffect(() => {
        if(!preloader && ref) {
            if(typeof window === "undefined" || !window.document) {
                return;
            }
        }
    }, [preloader])

    const [timer, setTimer] = useState(3)

    const id = useRef(null)

    const clear = () => {
        window.clearInterval(id.current)
        setPreloader(false)
    }

    useEffect(() => {
        id.current = window.setInterval(() => {
            setTimer((time) => time - 1)
        }, 1000)
        return () => clear()
    }, [])

    useEffect(() => {
        if(timer === 0) {
            clear()
        }
    }, [timer])

    if(typeof window === "undefined" || !window.document) {
        return null;
    }
    return (
        <>
            <CursorAnim />
            <SEO />
            {preloader 
             ? (
                <div className="loader-wrapper absolute">
                    <h1>BuyPedal</h1>
                    <h2>Hyogo, Japan</h2>
                </div>
             ) : (
                <div id="main-container" data-scroll-container ref={ref}>
                    <Navbar />
                    <Header />
                    <Featured />
                    <About />
                    <Contact />
                    <Footer />
                </div>
             )}
        </>
    )
}

export default Home
