"use client";

import React, { useState } from "react";


const catalogue: React.FC = () => {
   return (
      <div className="flex bg-black  flex-col min-h-screen">
         <main className="flex-grow bg-black">
            <nav className="fixed top-0 z-50 w-full bg-black   ">
               <div className="px-3 py-3 lg:px-5 lg:pl-5">
                  <div className="flex items-center justify-between">
                     <div className="flex items-center justify-start">
                        <img
                           src="\gamepad-solid.svg"
                           className="h-8 mr-5"
                           alt="FlowBite Logo"
                        />
                       
                     </div>


                     

                  </div>
               </div>
            </nav>

            <aside
               id="logo-sidebar"
               className="fixed top-0 left-0 z-40 w-32  h-screen pt-20  dark:bg-black dark:border-white"
               aria-label="Sidebar"
            >
               <div className="h-full px-3  pb-5 py-32   overflow-y-auto bg-white dark:bg-black">
                  <ul className="space-y-10  pt-16 justify-between  font-medium">
                     <li className="py-7">
                        <a
                           href="#"
                           className="flex justify-center items-center p-2 text-gray-900 rounded-lg dark:text-white group "
                        >
                           <svg
                              className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white "
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 22 21"
                           >
                              <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                              <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                           </svg>
                          
                        </a>
                     </li>
                     <li className="py-7">
                        <a
                           href="#"
                           className="flex justify-center items-center p-2 text-gray-900 rounded-lg dark:text-white group "
                        >
                           <svg
                              className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 18 18"
                           >
                              <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                           </svg>
                         
                         
                        </a>
                     </li>
                     <li className ="py-7">
                        <a
                           href=""
                           className="flex justify-center  p-2 text-gray-900 rounded-lg dark:text-white  group"
                        >
                           <svg
                              className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                           >
                              <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                           </svg>
                          
                          
                        </a>
                     </li>
                  </ul>
               </div>
            </aside>
     <div className="flex  flex-grow items-center pl-48 pt-24 pr-16 items-center bg-black ">       
         <div className=" grid grid-cols-4 gap-4 ">
            <div>
               <a href="/details.tsx">
               <img className="h-auto max-w-full md:h- rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt=""></img>
               </a>
            </div>   
            <div>
               <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt=""></img>

            </div>
            <div>
               <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt=""></img>

            </div>
            <div>
               <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt=""></img>

            </div>
            <div>
               <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt=""></img>

            </div>
            <div>
               <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt=""></img>

            </div>
            <div>
               <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt=""></img>

            </div>
            <div>
               <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt=""></img>

            </div>
            <div>
               <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt=""></img>

            </div>
            <div>
               <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt=""></img>

            </div>
            <div>
               <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt=""></img>

            </div>
            <div>
               <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt=""></img>

            </div>
         </div>
         </div>
         </main>
      </div>
   );
};
 
export default catalogue;
