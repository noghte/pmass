export default function Header() 
{
    return (<div className="bg-white">
     <nav className="bg-gray-900">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="justify-center w-1/5 text-center">
              <svg id="Layer_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><g><circle cx="256" cy="256" fill="#424242" r="256"/></g><path d="m508.635 297.494-143.967-144.804-181.045 24.215-31.371 216.19 118.474 118.474c120.598-6.842 218.849-97.152 237.909-214.075z" fill="#232323"/><g><path d="m296.492 118.905h-144.24v274.19h58v-100.89h86.24c47.3 0 85.78-38.48 85.78-85.78v-1.73c0-47.3-38.48-85.79-85.78-85.79zm27.78 87.52c0 15.32-12.46 27.78-27.78 27.78h-86.24v-57.3h86.24c15.32 0 27.78 12.47 27.78 27.79z" fill="#f8fffb"/></g><g><path d="m296.49 118.9h-40.49v58h40.49c15.32 0 27.78 12.48 27.78 27.8v1.72c0 15.32-12.46 27.78-27.78 27.78h-40.49v58h40.49c47.3 0 85.78-38.48 85.78-85.78v-1.72c0-47.3-38.48-85.8-85.78-85.8z" fill="#d8d8d8"/></g></g></svg>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center ml-10">
                <input type="text" className="hidden px-4 py-1 text-sm text-white placeholder-white bg-gray-700 rounded-lg focus:outline-none focus:shadow-none lg:block" placeholder="Search or jump to..." />
                <a href="#" className="px-3 py-2 ml-4 text-sm font-semibold text-white bg-gray-900 rounded-md focus:outline-none hover:bg-gray-700 focus:text-white focus:bg-gray-700">Dashboard
                </a>
                <a href="#" className="px-3 py-2 ml-4 text-sm font-semibold text-gray-300 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Pull requests
                </a>
                <a href="#" className="px-3 py-2 ml-4 text-sm font-semibold text-gray-300 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Issues
                </a>
                <a href="#" className="px-3 py-2 ml-4 text-sm font-semibold text-gray-300 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Marketplace
                </a>
                <a href="#" className="px-3 py-2 ml-4 text-sm font-semibold text-gray-300 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Explore
                </a>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center ml-4 md:ml-6">
              <button className="p-1 text-gray-400 border-2 border-transparent rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-gray-700" aria-label="Notifications">
                <svg className="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>

              <div className="relative ml-3">
                <div>
                  <button className="flex items-center max-w-xs text-sm text-white rounded-full focus:outline-none focus:shadow-solid" id="user-menu" aria-label="User menu" aria-haspopup="true">
                    <img className="w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1592242481757-a0519c3d0d89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex -mr-2 md:hidden">
            <button className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white">
              <svg className="block w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
</div>)
}