import React from "react";

const SearchBar = () => {
    return (
        <>
            <form className="flex items-center mx-5 w-full max-w-xl">
                <label htmlFor="simple-search" className="sr-only">Search</label>
                <div className="relative w-full">
                    <input type="text" id="simple-search" className="bg-[#E4E4E4] text-[#000E23] border text-base rounded-full focus:ring-gray-500 focus:border-gray-500 outline-none block w-full p-2.5 px-5" placeholder="Telusuri Pencarian Anda" required />
                    <button type="submit" className="p-3.5 absolute end-0 top-0 bottom-0 text-sm font-medium text-white bg-black rounded-full border border-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                        <span className="sr-only">Search</span>
                    </button>
                </div>
            </form>

        </>
    )
}

export default SearchBar