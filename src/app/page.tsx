'use client'
import React, { useState } from 'react';
import NavItem from "./components/NavItem";
import ArticleItem from "./components/ArticleItem";
import ImageComponent from "./components/ImageComponent";
import NavMenu from './components/NavMenu';
import Image from 'next/image';

const navItems = ["Home", "News", "Popular", "Trending", "Categories"];
const articles = [
    { title: "Hydrogen VS Electric Cars", content: "Will hydrogen-fueled cars ever catch up to EVs?" },
    { title: "The Downsides of AI Artistry", content: "What are the possible adverse effects of on-demand AI image generation?" },
    { title: "Is VC Funding Drying Up?", content: "Private funding by VC firms is down 50% YOY. We take a look at what that means." },
];
const listItems = [
    {
        src: "/images/image-retro-pcs.jpg",
        alt: "DeFi",
        title: "01",
        heading: "Exploring DeFi",
        text: "Discover how decentralized finance is creating new opportunities for financial ",
    },
    {
        src: "/images/image-top-laptops.jpg",
        alt: "NFTs",
        title: "02",
        heading: "NFTs and Digital Ownership",
        text: "Understand the impact of Non-Fungible Tokens on digital art, gaming, and beyond",
    },
    {
        src: "/images/image-gaming-growth.jpg",
        alt: "DAOs",
        title: "03",
        heading: "The Rise of DAOs",
        text: "Learn about Decentralized Autonomous Organizations and how they're redefining ",
    },
];

export default function Home() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <main className="flex flex-col items-center justify-between md:p-16 p-6 max-w-full m-auto min-h-screen">

            <header className="flex w-full justify-between">
                <div>
                    <ImageComponent src="/images/logo.svg" alt="logo" className="bg-white" width={40} height={40} />
                </div>
                <div>
                    <div className='md:hidden' onClick={() => setIsNavOpen(!isNavOpen)}>
                        <ImageComponent src={isNavOpen ? "/images/icon-menu-close.svg" : "/images/icon-menu.svg"} alt="Menu Icon" className="bg-white sticky top-6 right-6 " width={30} height={30} />
                    </div>
                    <div className=' w-full '>
                        <NavMenu isNavOpen={isNavOpen} navItems={navItems} />
                    </div>
                </div>
            </header>

            <section className='flex flex-col md:flex-row justify-between py-10 gap-6 items-stretch'>
                <div className='flex flex-col gap-4 md:flex-2 md:gap-8'>
                    <ImageComponent src="/images/image-web-3-desktop.jpg" alt="Web 3.0 Overview" width={950} height={250} />
                    <div className='flex gap-5 flex-col md:flex-row'>
                        <h2 className='flex-1 text-7xl font-bold'>The Bright Future of Web 3.0?</h2>
                        <div className='flex flex-col gap-4 md:flex-1' >
                            <p className='flex-1 text-gray-500 text-lg leading-relaxed'>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
                                But is it really fulfilling its promise?</p>
                            <button className='p-2 bg-red-500 my-2 w-[50%] uppercase align-middle text-white tracking-widest'>Read More</button>
                        </div>
                    </div>
                </div>
                <aside className='md:flex-2 bg-slate-950 text-white p-6'>
                    <h2 className='text-3xl text-amber-300 font-bold'>New</h2>
                    <div className=''>
                        {articles.map((article, index) => (
                            <div className='border border-transparent border-b-white last:border-b-0 text-md' key={index}>
                                <ArticleItem title={article.title} content={article.content} />
                            </div>
                        ))}
                    </div>
                </aside>
            </section>

            <section>
                <ul className='flex flex-col md:flex-row items-center content-center justify-evenly gap-8'>
                    {listItems.map((item, index) => (
                        <li key={index} className='flex gap-4 items-center content-between'>
                            <ImageComponent src={item.src} alt={item.alt} width={100} height={100} />
                            <div>
                                <h3 className='text-2xl font-semibold text-gray-400'>{item.title}</h3>
                                <h3 className="text-lg font-bold py-2 ">{item.heading}</h3>
                                <p className='text-sm md:text-md line-clamp-2 text-gray-500'>{item.text}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    );
}
