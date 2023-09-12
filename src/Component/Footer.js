

function Footer() {
  return (
    <footer className="footer p-10 bg-neutral text-neutral-content bg-black text-white ">
    

<div className=" flex items-center justify-between m-[20px]" >

    <div className="flex flex-col gap-[30px]">

        <h1  className="text-[50px] font-[800]">"Let’s Build and Scale it <br/>Together”</h1>
        <p>
        Your One-Stop Solution for MVPs, Web/App Development, Branding, and Product Enhancement"
        </p>
   
    </div>



      <div className="flex flex-wrap justify-center ">
      <button type="button" className="px-8 py-3 font-semibold rounded-full bg-white text-black">Let's contact</button>      </div>
</div>

      <hr/>
      <footer className="px-4 py-8 dark:bg-gray-800 dark:text-gray-400">
        <div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
          <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full dark:bg-violet-400">
      
            </div>
            <ul className="flex flex-wrap items-center space-x-4 sm:space-x-8">
              <li>
                <a rel="noopener noreferrer" href="#">@Gigahouse Labs</a>
              </li>
          
            </ul>
          </div>
          <ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
            <li>
              <a rel="noopener noreferrer" href="#">Instagram</a>
            </li>
            <li>
              <a rel="noopener noreferrer" href="#">Facebook</a>
            </li>
            <li>
              <a rel="noopener noreferrer" href="#">Twitter</a>
            </li>
          </ul>
        </div>
      </footer>
    </footer>
  )
}

export default Footer