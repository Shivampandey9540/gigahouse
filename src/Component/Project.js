

function Project() {

  return (
    <section className="text-white flex body-font font-poppins" id="Project">
      <div className="rotate-180 absolute left-[0px]">
        <svg width="120" height="996" viewBox="0 0 120 996" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="354.5" cy="641.5" r="354" stroke="white" />
          <circle cx="374.5" cy="354.5" r="354" stroke="white" />
        </svg>
      </div>

      <div className="container  px-5 py-24 mx-auto flex flex-wrap justify-center">
        {/* <div className="flex w-[80%] mb-20 flex-wrap item-center w-1/2">
      <h1 className="text-white text-[60px] font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Our Projects</h1>
      <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
      GigaHouse is your one-stop Product agency. We offer all the services you need to develop your first MVP for your startup.</p>
    </div> */}
        <div className="flex w-[85%] gap-[5%] mb-20 sm:flex-wrap lg:flex-nowrap justify-center items-center item-center w-1/2">
          <div className='w-[30%]'>

            <h1 className="text-white text-[60px] font-medium title-font text-gray-900   lg:mb-0 mb-4">Our Projects</h1>
          </div>
          <div className='w-[5%] h-[5px] bg-white lg:flex sm:hidden'></div>
          <div className='w-[60%]'>
            <p className="text-[20px] font-poppins-[200] font-[500]">
              GigaHouse is your one-stop Product agency. We offer all the services you need to develop your first MVP for your startup  </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center md:-m-2 -m-1">
          <div className="flex flex-wrap w-[50%]">

            <div className="md:p-2 p-1 w-full overflow-hidden ">
              <img alt="gallery" className="w-full h-full object-cover object-center block rounded-[30px] " src="https://dummyimage.com/600x360" />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img alt="gallery" className="w-full object-cover h-full object-center block rounded-[30px]" src="https://dummyimage.com/500x300" />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img alt="gallery" className="w-full object-cover h-full object-center block rounded-[30px]" src="https://dummyimage.com/501x301" />
            </div>
          </div>
          <div className="flex flex-wrap w-[50%]">
            <div className="md:p-2 p-1 w-full">
              <img alt="gallery" className="w-full h-full object-cover object-center block rounded-[30px]" src="https://dummyimage.com/601x361" />
            </div>

            {/* <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://dummyimage.com/502x302"/>
        </div> */}
            <div className="md:p-2 p-1 w-full">
              <img alt="gallery" className="w-full object-cover h-full object-center block rounded-[30px]" src="https://dummyimage.com/503x303" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Project;