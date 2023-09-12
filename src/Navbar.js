import { LeftImage, } from "./images/Hero_image"
import hero_first_img from "./images/Rectangle 5.jpg"

function Navbar() {
  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg width="69" height="56" viewBox="0 0 69 56" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="Group 2">
                <g id="Group 1">
                  <path id="Rectangle 1" d="M22 15.8594C22 7.5751 28.7157 0.859375 37 0.859375C45.2843 0.859375 52 7.5751 52 15.8594V16.3594C52 24.9198 45.0604 31.8594 36.5 31.8594H22V15.8594Z" fill="#D9D9D9" stroke="white" />
                  <path id="Rectangle 2" d="M48.3638 40.0303C48.2848 48.3756 41.4555 55.0767 33.1103 54.9977C24.765 54.9187 18.0639 48.0895 18.1429 39.7442C18.2219 31.3989 25.0511 24.6978 33.3964 24.7768L48.5068 24.9199L48.3638 40.0303Z" fill="#D9D9D9" stroke="white" />
                </g>
                <g id="Vector 1" filter="url(#filter0_d_48_161)">
                  <path d="M39.5001 31.5H20.7383L22.0001 30C24.2545 27.4236 27.3771 25.7654 30.7741 25.3407L33.5001 25H48.5001V26.5C46.2065 28.7936 43.3541 30.4489 40.2248 31.3024L39.5001 31.5Z" fill="white" />
                </g>
              </g>
              <defs>
                <filter id="filter0_d_48_161" x="0.738281" y="9" width="67.7617" height="46.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="10" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_48_161" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_48_161" result="shape" />
                </filter>
              </defs>
            </svg>

            <span className="ml-3 text-xl text-white">GIGA HOUSE</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a href="#" className="mr-5">SERVICES</a>
            <a href="#Project" className="mr-5">PROJECTS</a>
            <a className="mr-5">ABOUT  US </a>
            <a className="mr-5">CONTACT</a>
          </nav>
          <button type="button" className="px-8 py-3 font-semibold rounded-full flex items-center dark:bg-gray-100 dark:text-gray-800">Let’s Connect
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>

    </div>
  )
}

export default Navbar