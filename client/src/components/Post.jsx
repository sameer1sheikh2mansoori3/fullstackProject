import React from 'react'

const Post = () => {
  return (
    <>
           {/* now we are starting our content */}
           <article className="flex flex-col my-4 md:flex-row md:space-x-8 p-4 border rounded-lg bg-gray-100 shadow-md py-6">
        <img
  src="https://images.unsplash.com/photo-1533167649158-6d508895b680?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  alt=""
  className="w-full rounded-lg object-cover md:w-1/2 md:h-[10%] h-2" /* Corrected height class */
/>

          <div className="flex flex-col justify-between md:w-1/2 p-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                help me heading
              </h2>
              <div className="flex items-center mt-2">
                <p className="text-gray-600 mr-2 font-bold">I am the author</p>
                <span className="inline-block h-2 w-2 rounded-full bg-gray-400 mr-2"></span>
                <p className="text-gray-600">2-01-11</p>
              </div>
              <div className="py-8">
              <p className="text-gray-700">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo,
              molestiae aut architecto a odio incidunt. Eaque maxime dolores
              cum, unde velit iure natus veritatis fugiat molestiae explicabo
              nobis illum modi.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nisi corrupti expedita cupiditate, eligendi a accusantium, voluptate maiores eaque aliquid ex consectetur optio quo? Numquam aliquid vitae architecto corporis delectus?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At eaque magnam, ipsum facere fugiat reiciendis libero eligendi quas minus vero! Repellendus, hic aliquam sit esse ex debitis ratione libero perspiciatis!
            </p>
              </div>
            </div>
           
          </div>
        </article>
        {/* we are ending our content */}
    </>
  )
}

export default Post