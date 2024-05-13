'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import {FaGoogle} from 'react-icons/fa'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'
import UnreadMessagesCount from './UnreadMessagesCount'

function getDate() {
    const today = new Date();
    const year = today.getFullYear();
    return `${year}`;
}

const Footer = () => {
    const { data: session } = useSession();
    const profileImage = session?.user?.image

    const [providers, setProviders] = useState(null);
    const [currentDate] = useState(getDate());

    useEffect(() => {
        const setAuthProviders = async () => {
            const res = await getProviders();
            setProviders(res);
        };setAuthProviders();
    }, []);

    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2>Services</h2>
                        <ul>
                            <li><Link href="/services">Nails</Link></li>
                            <li><Link href="/services">Massage</Link></li>
                            <li><Link href="/services">Microdermabrasion</Link></li>
                            <li><Link href="/services">Waxing</Link></li>
                            <li><Link href="/services">Facials</Link></li>
                            <li><Link href="/services">Lashes</Link></li>
                            <li><Link href="/services">Hair</Link></li>
                            <li><Link href="/services">Brows</Link></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h2>Quick Links</h2>
                        <ul>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/about">Massage</Link></li>
                            <li><Link href="/services">Services</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="col">
                    { !session &&
                        providers && Object.values(providers).map((provider, index) => (
                            <button
                            onClick={() => signIn(provider.id)}
                                key={index}
                                className='flex items-center text-white bg-gray-700 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'>
                            <FaGoogle className="text-white mr-2" />
                            <span> Login or Register</span>
                            </button>
                        ))
                    }
                    { session && (
                        <>
                            <Link href='/messages' className='relative group'>
                                <button
                                type='button'
                                className='relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
                                >
                                    <span className='absolute -inset-1.5'></span>
                                    <span className='sr-only'>View notifications</span>
                                    <svg
                                        className='h-6 w-6'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        strokeWidth='1.5'
                                        stroke='currentColor'
                                        aria-hidden='true'
                                    >
                                        <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        d='M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0'
                                        />
                                    </svg>
                                </button>
                                <UnreadMessagesCount session={session} />
                            </Link>
                            <button
                                onClick={() => {
                                    signOut()
                                }}
                                className='block px-4 py-2 text-sm text-gray-700'
                                role='menuitem'
                                tabIndex='-1'
                                id='user-menu-item-2'
                            >
                                Sign Out
                            </button>
                      </>
                    )}
                    </div>
                </div>
                <div className="row">
                    <div className="col full-width-col">
                        <p className="copyNotice">Nova Beauty &copy; {currentDate}</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer