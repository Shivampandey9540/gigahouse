import React, { useState } from 'react';

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='flex justify-center '>

      <div className="space-y-2 w-[80%]  ">
        {items.map((item, index) => (
          <div key={index}
            className="w-full bg-white overflow-hidden pl-[34px] pr-[34px] pt-[20px] pb-[20px]  flex justify-between flex-col  rounded-[20px] items-center p-2 bg-gray-100 hover:bg-gray-200 focus:outline-none">
            <div
              onClick={() => toggleAccordion(index)}
              className='w-full'
            >

              {/* <div className='w-[40%] bg-[#000]' ></div> */}
              <div className='flex justify-between w-[100%]' >
                <div>
                  <span>{item.title}</span>
                </div>
                <div className='flex  w-[65%] justify-end'>
                  <div>
                    {
                      activeIndex === index ?
                        <p>
                          Lorem ipsum dolor sit amet consectetur. Sed sollicitudin at in neque auctor fermentum pharetra
                        </p> :
                        <p></p>
                    }

                  </div>
                  <div>

                    <span className="text-gray-500">{activeIndex === index ? '▲' : '▼'}</span>
                  </div>
                </div>
              </div>
            </div>

<div className='overflow-hidden w-full'>
  
            {activeIndex === index && (
              <div className="p-2 navany w-full flex gap-[10px] justify-center">
                {/* {item.content} */}
                <div className='w-[40%] h-[100px] bg-[#000]' ></div>
                <div className='w-[40%] h-[100px] bg-[#000]' ></div>
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
