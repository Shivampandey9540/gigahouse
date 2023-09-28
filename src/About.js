import React, { useState } from 'react';

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {

    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='flex'>

      <div className='flex justify-center  flex-col  items-center font-poppins text-[700] text-[24px] text-[#ffffff] '>

        <div className="flex w-[80%] gap-[5%] mb-2 sm:flex-wrap lg:flex-nowrap justify-center items-center item-center w-1/2">
          <div className='w-[30%]'>

            <h1 className="text-white text-[60px] font-medium title-font text-gray-900   lg:mb-0 mb-4">Our Services</h1>
          </div>
          <div className='w-[5%] h-[5px] bg-white lg:flex sm:hidden'></div>
          <div className='w-[60%]'>
            <p className="text-[20px] font-poppins-[200] font-[500]">
              For the benefit of stakeholders, founders, and teams, the company provides a wide array of services, such as consulting, product development, and branding.        </p>
          </div>
        </div>


        <div className="space-y-2 w-[80%]  ">
          {items.map((item, index) => (
            <div key={index}
              className="w-full bg-[#14002D] overflow-hidden pl-[34px] pr-[34px] pt-[20px] pb-[20px]  flex justify-between flex-col  rounded-[20px] items-center p-2  focus:outline-none">
              <div
                onClick={() => toggleAccordion(index)}
                className='w-full'
              >

                {/* <div className='w-[40%] bg-[#000]' ></div> */}
                <div className='flex justify-between w-[100%]' >

                  <div className='flex gap-[20px]'>
                    <div>
                      <svg width="30" height="30" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="68" height="68" fill="white" />
                      </svg>

                    </div>


                    <div>
                      <span>{item.title}</span>
                    </div>
                  </div>

                  <div className='flex  w-[65%] justify-end gap-[20px] '>
                    <div className='w-[60%]'>
                      {
                        activeIndex === index ?
                          <p className='text-[18px] font-[500]'>
                            Lorem ipsum dolor sit amet consectetur. Sed sollicitudin at in neque auctor fermentum pharetra
                          </p> :
                          <p></p>
                      }

                    </div>
                    <div>

                      <span className="text-gray-500">{activeIndex === index ?
                        <div className='animate-[wiggle_1s_ease-in-out]'>
                          <svg fill="#ffffff" height="20px" width="30px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 330 330">
                            <path id="XMLID_225_" d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
	c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
	s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"/>
                          </svg>
                        </div>

                        :
                        <div className='animate-[wiggle2_1s_ease-in-out]'>
                          <svg width="20" height="30" viewBox="0 0 55 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 26.5L25.5 3L51.5 26.5" stroke="white" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                        </div>
                      }</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className='overflow-hidden w-full'>

                {activeIndex === index && (
                  <div className="p-2 navany w-full flex gap-[30px] justify-center ">
                    {/* {item.content} */}
                    <div className='w-[40%] h-[300px] bg-[#ffffff] rounded-[20px]' ></div>
                    <div className='w-[40%] h-[300px] bg-[#ffffff] rounded-[20px]' ></div>
                  </div>
                )}

              </div>
            </div>
          ))}
        </div>

      </div>
      <div className='absolute right-[0px]'>

        <svg width="120" height="996" viewBox="0 0 120 996" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="354.5" cy="641.5" r="354" stroke="white" />
          <circle cx="374.5" cy="354.5" r="354" stroke="white" />
        </svg>
      </div>
    </div>
  );
};

export default Accordion;
