import React, { Suspense, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, Preload } from '@react-three/drei'
import { useSpring, animated, config } from '@react-spring/three'

const Model = (props) => {
    const gltf = useGLTF('/tatami/scene.gltf')
    return <primitive object={gltf.scene} {...props} />
}

useGLTF.preload('/tatami/scene.gltf')

const Lights = () => {
    return (
        <>
            <ambientLight intensity={0.3} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <directionalLight position={[0, 10, 0]} intensity={1.5} />
            <spotLight intensity={1} position={[1000, 0, 0]} />
        </>
    )
}

const About = () => {
    const [hovered, setHovered] = useState(false)

    const { scale } = useSpring({
        scale: hovered ? 4 : 2,
        config: config.slow
    })

    const HTMLContent = ({position}) => {
        const ref = useRef()
        useFrame(() => (ref.current.rotation.y += 0.02))
    
        return (
            <group position={[0, position, 0]}>
                <animated.mesh ref={ref} position={[-10, -12, 0]} scale={scale}>
                    <Model />
                </animated.mesh>
            </group>
        )
    }

    return (
        <section className="feature-section feature-section--dark feature-section--has-padding" data-scroll-section>
            <div className="container">
                <div className="grid">
                    <div className="grid__column grid__column--7" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} data-scroll>
                        <div className="back-circle"></div>
                        <Canvas
                            className="canvas-container"
                            colorManagement
                            camera={{ position: [0, 110, 180], fov: 30 }}
                        >
                            <Lights />
                            <Suspense fallback={null}>
                                <HTMLContent position={3} />
                                <Preload all />
                            </Suspense>
                        </Canvas>
                    </div>
                    <div className="grid__column grid__column--5">
                        <h4 className="feature-section-header__label" data-scroll>ALL ABOUT US</h4>
                        <h2 className="feature-section-header__primary-title" data-scroll>We are a company of like-minded individuals based in Hyogo, Japan.</h2>
                        <p className="global-u-body-excerpt" data-scroll>BuyPedal is ran by a small team with a dream of expanding its business to reach people across Asia.</p>
                        <ul className="setup-steps-container">
                            <li className="setup-step setup-step--list">
                                <div className="setup-step__number"><span></span><span></span></div>
                                <p className="setup-step__title" data-scroll>Friendly Staff</p>
                            </li>
                            <li className="setup-step setup-step--list">
                                <div className="setup-step__number"><span></span><span></span></div>
                                <p className="setup-step__title" data-scroll>Open To Expansion</p>
                            </li>
                            <li className="setup-step setup-step--list">
                                <div className="setup-step__number"><span></span><span></span></div>
                                <p className="setup-step__title" data-scroll>Quality Products</p>
                            </li>
                            <li className="setup-step setup-step--list">
                                <div className="setup-step__number"><span></span><span></span></div>
                                <p className="setup-step__title" data-scroll>Safe Transactions</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>            
        </section>
    )
}

export default About
