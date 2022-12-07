import React from 'react';
import './Landing.css'
// import component
const Landing = () => {
    return(
        <>
        <div className='m-auto container'>
            <div className='mt-5 p-3'>
                <p className='text-center text-[40px] md:text-[58px] font-bold text-gray-800 text_font'>Unbelievable Solutions</p>
                <p className='text-center text-[40px] md:text-[58px] font-bold text-gray-800 text_font'>For All <span className='text-[#343799]'>Legal Cases</span></p>
            </div>

            <div className='mt-5 p-3'>
                <p className='text-[20px] font-semibold text-gray-700 text_font text-center'>We support businesses through periods of expansion ,</p>
                <p className='text-[20px] font-semibold text-gray-700 text_font text-center'>succession ,and all other important transitions.</p>
            </div>

            <div className='mt-10 mx-auto grid grid-col-1 w-full  md:grid-cols-2 gap-5  text-center'>
                <div className=''>
                    <button className='title_font text-center md:float-right py-4 px-10 rounded-2xl w-2/3 break-words border-[#343799] text-white bg-[#343799] border-2 hover:text-[#343799] hover:border-[#343799] hover:bg-white  duration-700 ease-in-out text_font'>Learn more</button>
                </div>
                <div className=''>
                    <button className='title_font text-center md:float-left py-4 px-8 rounded-2xl  w-2/3 break-words text-[#343799] border-[#343799] bg-white border-2 hover:bg-[#343799] hover:text-white duration-700 ease-in-out text_font'>Free Consultation</button>
                </div>
            </div>


            {/* Image animation Sections */}

            <div className="md:ml-20 mt-5 md:mt-10 m-auto relative" id="dashboardImage">
                    <div>
                        <img
                            src="./img/dashboard-1.jpg"
                            className="p-2 md:p-0 "
                            id="dashboard_1"
                        />
                    </div>
                    <div className="absolute w-[100%] h-[100%] top-0">
                        
                            
                        <img
                            src="./img/dashboard-1-1.jpg"
                            className="p-2 md:p-0 w-[50%] md:-left-20 absolute sm:left-0 mt-[15%] "
                            id="dashboard_1_1"
                        />
                         <img
                        src="./img/dashboard-1-2.jpg"
                        className="w-[30%] absolute left-[65%] top-[15%]"
                        id="dashboard_1_2"
                    />
                        <img
                        src="./img/dashboard-1-3.jpg"
                        className="absolute  left-[50%] p-2 w-[50%] top-[65%]"
                        id="dashboard_1_3"
                    /> 
                    </div>
                </div>

                {/* Text Section and Description Part */}
                <div className='mt-10 p-3 space-y-2'>
                    <p className='text-[38px] font-semibold text-gray-700 text_font text-left'>Our Best Practice Areas</p>
                    <p className='px-2 text-[18px] text-gray-500 text_font text-left'>We have the best lawyers in these areas</p>
                </div>

                {/* Grid Card Section */}
                <div className='grid grid-cols-1 md:grid-cols-4 gap-10 px-10'>
                    <div className='px-5 py-10 bg-gray-100 space-y-5 rounded-2xl hover:bg-gray-200  duration-700 ease-in-out hover:scale-105 hover:shadow-lg'> 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-20 h-20 m-auto text-gray-400">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                        </svg>
                        <p className='text_font text-center font-semibold text-sm text-gray-600'>Bail</p>
                    </div>

                    <div className='px-5 py-10 bg-gray-100 space-y-5 rounded-2xl hover:bg-gray-200  duration-700 ease-in-out hover:scale-105 hover:shadow-lg'> 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-20 h-20 m-auto text-gray-400">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                        </svg>

                        <p className='text_font text-center font-semibold text-sm text-gray-600'>Family Law</p>
                    </div>

                    <div className='px-5 py-10 bg-gray-100 space-y-5 rounded-2xl hover:bg-gray-200  duration-700 ease-in-out hover:scale-105 hover:shadow-lg'> 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-20 h-20 m-auto text-gray-400">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                        </svg>
                        <p className='text_font text-center font-semibold text-sm text-gray-600'>Student Law</p>
                    </div>

                    <div className='px-5 py-10 bg-gray-100 space-y-5 rounded-2xl hover:bg-gray-200  duration-700 ease-in-out hover:scale-105 hover:shadow-lg'> 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-20 h-20 m-auto text-gray-400">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                        </svg>
                        <p className='text_font text-center font-semibold text-sm text-gray-600'>Car Accident</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Landing;