"use client"
import './header-component.scss'
import { Abel, Montserrat, Noto_Sans, Roboto, Work_Sans } from 'next/font/google'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const header = Montserrat({subsets: ['latin'],   weight: '400'})
const sub_header = Abel({subsets: ['latin'],   weight: '400'})

export default function Header(){

    const routeConfigurations = [{route: '/', title: 'Welcome'}, {route: '/tww', title: 'The Weekend Washer'}, {route: '/gallery', title: 'Gallery'}, {route: '/blog', title: 'Blog'}]
    const [currentRoute, setCurrentRoute] = useState({route: '/', title: 'Welcome'})
    const router = useRouter()

    const navigateRoute = (incomingRoute) => {
        console.log('click')
        routeConfigurations.forEach((routeConfiguration) => {
            if(routeConfiguration.route === incomingRoute){
                setCurrentRoute(routeConfiguration)
                router.push(routeConfiguration.route)
            }
        })
    }

    return (
        <div className="header-container">
            <div className='visualization-container'>
                <p className={`${header.className} visualization-header`} onClick={() => navigateRoute('/')}>Raj Likhari</p>
            </div>
            <div className='links-container'>
                {routeConfigurations.map((routeConfiguration) => {
                    if(routeConfiguration.route != '/'){
                        return (
                            <p className={currentRoute.route === routeConfiguration.route ? `${sub_header.className} active-link` : `${sub_header.className}`}
                            onClick={() => navigateRoute(routeConfiguration.route)} 
                            key={routeConfiguration.title}>{routeConfiguration.title}</p>
                        )
                    }
                })}
                <div className={`${sub_header.className} links-button`}>Let&apos;s Connect</div>
            </div>
        </div>
    )
}