import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-gray-800 p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-red-500">🎬 Movie Browser</h1>
        <nav className="space-x-4">
          <Link to="/Login" className="text-red-400 hover:underline">Login</Link>
          <Link to="/Signup" className="text-red-400 hover:underline">Signup</Link>
          <Link to="/Addmovie" className="text-red-400 hover:underline">Add Movie</Link>
          <Link to="/AddGenre" className="text-red-400 hover:underline">Add Genre</Link>
        </nav>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-800 p-6">
          <h2 className="text-lg mb-4">Filters</h2>
          <ul className="space-y-2">
            <li><button className="w-full text-left bg-gray-700 p-2 rounded">All</button></li>
            <li><button className="w-full text-left bg-gray-700 p-2 rounded">Action</button></li>
            <li><button className="w-full text-left bg-gray-700 p-2 rounded">Comedy</button></li>
            <li><button className="w-full text-left bg-gray-700 p-2 rounded">Thriller</button></li>
            <li><button className="w-full text-left bg-gray-700 p-2 rounded">Horror</button></li>
            <li><button className="w-full text-left bg-gray-700 p-2 rounded">Drama</button></li>
            <li><button className="w-full text-left bg-gray-700 p-2 rounded">Fantasy</button></li>
            <li><button className="w-full text-left bg-gray-700 p-2 rounded">Animation</button></li>
          </ul>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-6">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-2 bg-gray-700 text-white rounded border border-red-400"
            />
          </div>

          <p className="mb-4 text-gray-400">19 movies found</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Movie 1 */}
            <div className="bg-gray-800 rounded overflow-hidden shadow-lg">
              <img src="download.jpeg" alt="Avengers" className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-xl">Avengers: Endgame</h3>
                <p className="text-sm text-gray-400">2h 15min / Action</p>
                <div className="mt-2 flex justify-between items-center">
                  <button className="text-red-400 border border-red-400 px-3 py-1 rounded">Watch Trailer</button>
                  <button className="mt-3 bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700" onClick={() => deleteMovie(movie._id)}>
    Delete
  </button>
                  <span className="text-red-400 text-xl">♡</span>
                </div>
              </div>
            </div>

            {/* Movie 2 */}
            <div className="bg-gray-800 rounded overflow-hidden shadow-lg">
              <img src="gonegirl.jpeg" alt="gone girl" className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-xl">Gone girl</h3>
                <p className="text-sm text-gray-400">2h 15min / Thriller</p>
                <div className="mt-2 flex justify-between items-center">
                  <button className="text-red-400 border border-red-400 px-3 py-1 rounded">Watch Trailer</button>
                  <button className="mt-3 bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700" onClick={() => deleteMovie(movie._id)}>
    Delete
  </button>
                  <span className="text-red-400 text-xl">♡</span>
                </div>
              </div>
            </div>

            {/* Movie 3 */}
            <div className="bg-gray-800 rounded overflow-hidden shadow-lg">
              <img src="theholeintheground.jpeg" alt="the hole in the ground" className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-xl">the hole in the ground</h3>
                <p className="text-sm text-gray-400">2h 15min / Horror</p>
                <div className="mt-2 flex justify-between items-center">
                  <button className="text-red-400 border border-red-400 px-3 py-1 rounded">Watch Trailer</button>
                  <button className="mt-3 bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700" onClick={() => deleteMovie(movie._id)}>
    Delete
  </button>
    
                  <span className="text-red-400 text-xl">♡</span>
                </div>
              </div>
            </div>

            {/* Movie 4 */}
            <div className="bg-gray-800 rounded overflow-hidden shadow-lg">
              <img src="harrypotter.jpeg" alt="harry potter" className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-xl">Harry potter</h3>
                <p className="text-sm text-gray-400">2h 15min / Fantasy</p>
                <div className="mt-2 flex justify-between items-center">
                  <button className="text-red-400 border border-red-400 px-3 py-1 rounded">Watch Trailer</button>
                  <button className="mt-3 bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700" onClick={() => deleteMovie(movie._id)}>
    Delete
  </button>
                  <span className="text-red-400 text-xl">♡</span>
                </div>
              </div>
            </div>

            {/* Movie 5 */}
            <div className="bg-gray-800 rounded overflow-hidden shadow-lg">
              <img src="After.jpeg" alt="After" className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-xl">After</h3>
                <p className="text-sm text-gray-400">2h 15min / Drama</p>
                <div className="mt-2 flex justify-between items-center">
                  <button className="text-red-400 border border-red-400 px-3 py-1 rounded">Watch Trailer</button>
                  <button className="mt-3 bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700" onClick={() => deleteMovie(movie._id)}>
    Delete
  </button>
                  <span className="text-red-400 text-xl">♡</span>
                </div>
              </div>
            </div>

            {/* Movie 6 */}
            <div className="bg-gray-800 rounded overflow-hidden shadow-lg">
              <img src="thetoystory.jpeg" alt="Avengers" className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-xl">The Toy Story</h3>
                <p className="text-sm text-gray-400">2h 15min / Action</p>
                <div className="mt-2 flex justify-between items-center">
                  <button className="text-red-400 border border-red-400 px-3 py-1 rounded">Watch Trailer</button>
                  <button className="mt-3 bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700" onClick={() => deleteMovie(movie._id)}>
    Delete
  </button>
                  <span className="text-red-400 text-xl">♡</span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default HomePage;
