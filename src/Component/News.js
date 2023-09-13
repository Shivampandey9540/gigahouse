

function NewSection() {
	return (
		// style={"background-image: url('https://source.unsplash.com/random/640x480'); background-position: center center; background-blend-mode: multiply; background-size: cover;"}
		<div className="w-full dark:bg-gray-500 mb-[100px] "  >
			<div className="container flex flex-col bg-black pb-[200px] w-[80%] items-center gap-[100px] flex-wrap content-center justify-center p-4 py-20 mx-auto ">

				<div className="w-[70%] ">

					<h1 className="text-5xl antialiased font-semibold leadi text-center text-white">We are providing free resources related to UI, Tech and productivity tools through our newsletter</h1>
				</div>
				{/* <p className="pt-2 pb-8 text-xl antialiased text-center dark:text-gray-100">We are providing free resources related to UI, Tech and productivity tools through our newsletter</p> */}
				<div className="flex flex-row w-[50%]   ">
					<input type="text" placeholder="example@email.com" className="w-3/5 p-3 rounded-l-lg sm:w-2/3" fdprocessedid="ooiie6" />
					<button type="button" className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3  bg-[#1A003A] text-white" fdprocessedid="zrlhz">Subscribe</button>
				</div>
			</div>
		</div>
	)
}

export default NewSection