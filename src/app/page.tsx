'use client'
import React, {useState} from 'react';
import NavItem from "./components/NavItem";
import ArticleItem from "./components/ArticleItem";
import ImageComponent from "./components/ImageComponent";
import NavMenu from './components/NavMenu';
import Image from 'next/image';

const navItems = ["Home", "News", "Popular", "Trending", "Categories"];
const articles = [
  { title: "Decentralized Finance (DeFi)", content: "Transforming traditional finance by leveraging blockchain technology to facilitate open, accessible, and secure financial markets." },
  { title: "Non-Fungible Tokens (NFTs)", content: "Revolutionizing digital ownership and creativity through unique, blockchain-based digital assets that represent art, collectibles, and more." },
  { title: "Decentralized Autonomous Organizations (DAOs)", content: "Enabling a new form of organizational structure governed by smart contracts, allowing for community-driven decisions and operations." },
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
        <main className="flex flex-col items-center justify-between md:p-16 p-6 max-w-[1200px] m-auto min-h-screen">
            
            <header className="flex w-full items-end justify-between">
                <div>
                <ImageComponent src="/images/logo.svg" alt="" className="bg-white" width={40} height={40}/>
                </div>
                <div className='md:hidden' onClick={() => setIsNavOpen(!isNavOpen)}>
                    <ImageComponent src={isNavOpen ? "/images/icon-menu-close.svg" : "/images/icon-menu.svg"} alt="Menu Icon" className="bg-white absolute top-6 right-6 " width={30} height={30}/>
                </div>
                <div className='absolute md:static top-[55px] right-6 z-10 bg-black w-[200px] md:w-[35%] md:mr-0'>
                <NavMenu isNavOpen={isNavOpen} navItems={navItems} />
                </div>
            </header>
                
            <section className='flex flex-col md:flex-row justify-between py-10 gap-6 items-stretch'>
                <div className='flex flex-col md:flex-2 md:gap-8'>
                    <ImageComponent src="/images/image-web-3-desktop.jpg" alt="Web 3.0 Overview" width={650} height={150}/>
                    <div className='flex gap-4 flex-col md:flex-row'>
                        <h2 className='flex-1 text-5xl font-extrabold'>The Bright Future of Web 3.0</h2>
                        <div className='md:flex-1'>
                            <p className='flex-1'>Web 3.0 represents the next phase of the internet's evolution, offering decentralized and transparent user experiences powered by blockchain technology. </p>
                            <button className='p-2 bg-red-500 my-2 w-[50%] uppercase align-middle '>Read More</button>
                        </div>
                    </div>
                </div>
                <aside className='md:flex-2 bg-black'>
                    <h2 className='text-3xl text-amber-500 font-semibold'>What's New</h2>
                    <div className=''>
                        {articles.map((article, index) => (
                            <div className='border border-transparent border-b-white py-3 text-md' key={index}>
                                <ArticleItem title={article.title} content={article.content} />
                            </div>
                        ))}
                    </div>
                </aside>
            </section>

            <section>
                <ul className='flex flex-col md:flex-row items-center content-center justify-evenly gap-8'>
                    {listItems.map((item, index) => (
                        <li key={index} className='flex gap-2 items-center content-between'>
                            <ImageComponent src={item.src} alt={item.alt} width={100} height={100} />
                            <div>
                                <h3 className='text-2xl font-semibold text-gray-400'>{item.title}</h3>
                                <h3 className="text-lg font-bold ">{item.heading}</h3>
                                <p className='text-sm md:text-md'>{item.text}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    );
}
