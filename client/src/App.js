import "./App.css";

function App() {
  return (
    <>
      <div className="px-16">
        <div>
        <nav className="flex items-center justify-between px-4 py-2 bg-gray-800 text-white">
      <h1 className="text-xl font-bold">My Blog</h1>
      <ul className="flex space-x-4">
        <li className="hover:text-gray-400">
          <a href="/login" className="font-medium">Login</a>
        </li>
        <li className="hover:text-gray-400">
          <a href="/register" className="font-medium">Register</a>
        </li>
      </ul>
    </nav>
        </div>
        {/* we are having an navbar upside */}

        {/* now we are starting our content */}
        <div className="py-2">
          <h1>
            <img
              src="https://images.unsplash.com/photo-1533167649158-6d508895b680?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              srcset=""
              className="h-[600px] w-[100%]"
            />
            <div>
            <h1 className="text-xl font-extrabold">Our text is wonder</h1>
            <p>Author name</p>
            <p>post Time</p>
            </div>
            <p className="">
              we are adding images Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Repellendus et hic iste itaque, dolores soluta
              quas cupiditate distinctio, accusantium laborum ipsum earum,
              beatae aliquid alias quidem minus nihil quaerat atque.
            </p>
          </h1>
        </div>
        {/* we are ending our content */}
      </div>
    </>
  );
}

export default App;
