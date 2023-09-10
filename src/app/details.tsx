

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row bg-red-500 items-center justify-between">
             <div className = " rounded-full w-96 h-96 object-contain bg-white ml-[75px]  my-64 items-center text-black">
            <a href ="https://github.com/ice-weasel">
            <img
              className="rounded-full border  items-center w-96 h-96 shadow-black border-green-300 shadow-sm hover:bg-gray-300 object-contain"
              src="\github.svg"
              alt="prof pic">            
              </img>
            </a>
             </div>
             <div className=" items-center ml-32 pl-16 pr-64 mr-32 flex flex-grow    rounded-lg justify-center text-black bg-white ">
              <div className="font-medium text-black">
              Hi I am Abhishek Raman R
              </div>
             </div> 
    </main>
  )
}
