import { LeftImage } from "../images/Hero_image"

function HeroSection(){
    return (
        <section className=" dark:text-gray-100">
             <section className="text-[#ffffff]">
        <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-[72rem] bgurl ">
          <h1 className="text-4xl font-bold leading-none sm:text-5xl">
            Managerial Optimization
            for your company
          </h1>
          <p className="px-8 mt-8 mb-12 text-lg">
            Lorem ipsum dolor sit amet consectetur. Sed sollicitudin at in neque auctor fermentum pharetra massa. Suscipit nunc mattis orci libero porttitor et.Suscipit nunc mattis orci libero porttitor et.
          </p>
          <div className="flex flex-wrap justify-center">
            <button type="button" className="px-8 py-3 font-semibold rounded dark:bg-gray-100 dark:text-gray-800">Get Started</button>
          </div>
        </div>
      </section>

        {/* <div className="container mx-auto flex flex-col items-center px-4  text-center md:pt-[100px] md:px-10 lg:px-32 xl:max-w-4xl">
          <h1 className="text-5xl font-poppins font-bold sm:text-5x1">"Transforming Visions
            into  <span className="dark:text-[#7B19F5]"> Digital Realities”</span>
          </h1>
          <p className="px-8 mt-8 mb-12 text-lg">Your One-Stop Solution for MVPs, Web/App Development, Branding, and Product Enhancement"</p>
          <div className="flex flex-wrap justify-center">
            <button className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900" fdprocessedid="k2emc2j">Get started</button>
          </div>
        </div> */}
        <div>
          <div className="grid grid-cols-8 h-[400px]  gap-[20px] items-center absoulte bottom-[100px] p-[15px]">
            <div className="flex flex-col col-span-2 justify-start items-center  w-[100%] h-[100%]">

              {/* <div className="w-[100%] h-[70%] bg-hero_first_img bg-cover bg-no-repeat bg-center rounded-[10px]">

              </div> */}
              {/* <RightHeroImage   /> */}
            </div>
            <div className="flex flex-col col-span-1 justify-start items-center w-[100%] h-[100%]" >

              <div className=" w-[100%] h-[70%] bg-[#fff]"></div>

            </div>
            <div className="flex flex-col col-span-2 justify-end items-center  w-[100%] h-[43%] ">
            
             <div>

              <div className="h-[80px] w-[300px] rounded-3xl bg-[#fff]">


              </div>
              <div className="h-[80px] w-[300px] rounded-3xl bg-[#fff]">

              </div>
             </div>

            </div>
            <div className="flex flex-col col-span-1 justify-start items-center w-[100%] h-[100%]" >
                {/* <div className="w-[100%] h-[70%]  relative bg-hero_first_img  bg-cover bg-center bg-size-[100%] bg-no-repeat"> */}
              {/* <img src={hero_first_img} className="object-fill object-center w-full h-full"   alt=""/> */}

                </div>
              {/* < LaptopImage    /> */}
            {/* </div> */}
            <div className="flex flex-col col-span-2 justify-start items-center w-[100%] h-[100%]">
              <div className=" w-[100%] h-[70%]">
                <LeftImage />
              </div>

            </div>

          </div>
        </div>
      </section>
    )
}

export default HeroSection