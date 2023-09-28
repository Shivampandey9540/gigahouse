

function NewSection() {
	return (
		// style={"background-image: url('https://source.unsplash.com/random/640x480'); background-position: center center; background-blend-mode: multiply; background-size: cover;"}
		<div className="w-full flex dark:bg-gray-500 mb-[100px] "  >


			<div className="container flex flex-col bg-black pb-[200px] w-[80%] items-center gap-[100px] flex-wrap content-center justify-center p-4 py-20 mx-auto ">

				<div className="w-[70%] ">

					<h1 className="text-5xl antialiased font-semibold leadi text-center text-white">We are providing free resources related to UI, Tech and productivity tools through our newsletter</h1>
				</div>


				{/* <p className="pt-2 pb-8 text-xl antialiased text-center dark:text-gray-100">We are providing free resources related to UI, Tech and productivity tools through our newsletter</p> */}
				<div className="flex flex-row w-[50%] bg-white rounded-r-[10px]  rounded-l-lg ">
					<input type="text" placeholder="example@email.com" className="w-3/5 p-5 outline-none  bg-transparent border-none rounded-l-lg sm:w-2/3" fdprocessedid="ooiie6" />
					<button type="button" className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 rounded-l-lg  bg-[#1A003A] text-white" fdprocessedid="zrlhz">Subscribe</button>
				</div>
			</div>

			<svg width="120" height="996" viewBox="0 0 120 996" fill="none" xmlns="http://www.w3.org/2000/svg">
				<circle cx="354.5" cy="641.5" r="354" stroke="white" />
				<circle cx="374.5" cy="354.5" r="354" stroke="white" />
			</svg>

			{/* <div className="h-[1px] flex justify-end "> */}

			{/* <div className="w-[300px] h-[300px] relative rounded-l-[50%] border-white border-l-[1px]">

			</div>
			<div className="w-[300px] h-[300px] relative  rounded-l-[50%]   border-white border-l-[1px]">

			</div> */}
			{/* </div> */}
		</div>
	)
}

export default NewSection