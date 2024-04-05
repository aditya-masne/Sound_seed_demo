// import React from 'react'

const items = [
  {
    name: "Arjit Singh",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?",
    colors: ["red", "purple", "orange"],
    sizes: ["8 UK", "9 UK", "10 UK"],
    imageUrl: "https://images.unsplash.com/photo-1588099768523-f4e6a5679d88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHwxMTM4MTU1NXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
  },
  // Add more items as needed
  {
    name: "Nike Airmax v2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?",
    colors: ["red", "purple", "orange"],
    sizes: ["8 UK", "9 UK", "10 UK"],
    imageUrl: "https://images.unsplash.com/photo-1588099768523-f4e6a5679d88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHwxMTM4MTU1NXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
  },
  {
    name: "Nike Airmax v2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?",
    colors: ["red", "purple", "orange"],
    sizes: ["8 UK", "9 UK", "10 UK"],
    imageUrl: "https://images.unsplash.com/photo-1588099768523-f4e6a5679d88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHwxMTM4MTU1NXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
  },
  {
    name: "Nike Airmax v2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?",
    colors: ["red", "purple", "orange"],
    sizes: ["8 UK", "9 UK", "10 UK"],
    imageUrl: "https://images.unsplash.com/photo-1588099768523-f4e6a5679d88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHwxMTM4MTU1NXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
  },
];

export function Service() {
  return (
    <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
      {items.map((item, index) => (
        <div key={index} className="rounded-md border">
          <img
            src={item.imageUrl}
            alt="Laptop"
            className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
          />
          <div className="p-4">
            <h1 className="inline-flex items-center text-lg font-semibold">{item.name}</h1>
            <p className="mt-3 text-sm text-gray-600">{item.description}</p>
            <div className="mt-4">
              {item.colors.map((color, index) => (
                <span key={index} className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                  #{color}
                </span>
              ))}
            </div>
            <div className="mt-3 flex items-center space-x-2">
              <span className="block text-sm font-semibold">Size : </span>
              {item.sizes.map((size, index) => (
                <span key={index} className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
                  {size}
                </span>
              ))}
            </div>
            <button
              type="button"
              className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
