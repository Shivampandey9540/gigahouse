

function Project(){

    return (
        <section className="text-gray-600 body-font" id="Project">
  <div className="container  px-5 py-24 mx-auto flex flex-wrap justify-center">
    <div className="flex w-[80%] mb-20 flex-wrap item-center w-1/2">
      <h1 className="text-white text-[60px] font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Our Projects</h1>
      <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">GigaHouse is your one-stop Product agency. We offer all the services you need to develop your first MVP for your startup.</p>
    </div>
    <div className="flex flex-wrap justify-center md:-m-2 -m-1">
      <div className="flex flex-wrap w-[40%]">
     
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://dummyimage.com/600x360"/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://dummyimage.com/500x300"/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://dummyimage.com/501x301"/>
        </div>
      </div>
      <div className="flex flex-wrap w-[40%]">
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://dummyimage.com/601x361"/>
        </div>

        {/* <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://dummyimage.com/502x302"/>
        </div> */}
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://dummyimage.com/503x303"/>
        </div>
      </div>
    </div>
  </div>
</section>
    )
}

export default Project;