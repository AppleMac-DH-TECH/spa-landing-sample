import React , {useState} from 'react';
import './Navbar.css';
// import component
const Navbar = () => {

    const [open , setOpen ] = useState(false);

    const toggleCollapse = () => {
        const btn_nav = document.getElementsByClassName("btn-nav");

        if (btn_nav[0].className.search("animated") < 0) {
            btn_nav[0].classList.add("animated");
        } else {
            btn_nav[0].classList.remove("animated");
        }
    };
    return(
        <>
        <nav className='flex flex-wrap h-24 bg-gray-100'>
            <div className='flex justify-between items-center flex-row w-full space-x-16 px-12 '>
                <div className='flex items-center gap-10'>
                    {/* image log */}
                    {/* <img src='./img/logo.png' className='h-14'/> */}
                    <img src='./img/logo.png' className='w-36 '/>
                    {/* ul li */}
                    <div className='hidden md:flex items-center gap-10'>
                        <button className='text-[#6C6C70] font-bold text-sm hover:text-[#343799] text_font'>About</button>
                        <button className='text-[#6C6C70] font-bold text-sm hover:text-[#343799] text_font'>Practice Areas</button>
                        <button className='text-[#6C6C70] font-bold text-sm hover:text-[#343799] text_font'>Blog</button>
                    </div>
                </div>
                <div className='flex items-center space-x-10'>
                    <button className='max-[635px]:hidden text-[#6C6C70] font-bold text-sm hover:text-[#343799] text_font'>Contact</button>
                    <button className='max-[582px]:hidden font-bold text-sm text-[#343799] hover:text-white bg-white hover:bg-[#343799] text-center  py-3 px-4 rounded-xl  border-2 border-[#343799] duration-700 ease-in-out text_font'>Free Consultation</button>
                </div>
                <button className="block md:hidden btn-nav" onClick={()=>{toggleCollapse(); setOpen(!open)}}>
                    <span className="icon-bar top rounded-full"></span>
                    <span className="icon-bar middle rounded-full"></span>
                    <span className="icon-bar bottom rounded-full"></span>
                </button>
            </div>
        </nav>
        </>
    )
}

export default Navbar;