import React, { useState } from 'react';

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='flex justify-center font-poppins text-[700] text-[24px] text-[#ffffff] '>

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
                      <div>
                        <svg fill="#ffffff" height="20px" width="30px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 330 330">
                          <path id="XMLID_225_" d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
	c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
	s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"/>
                        </svg>
                      </div>

                      : <svg width="20" height="30" viewBox="0 0 55 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 26.5L25.5 3L51.5 26.5" stroke="white" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
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
  );
};

export default Accordion;
