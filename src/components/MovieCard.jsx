function MovieCard({ movie, deleteMovie }) {
  return (
    <div className="bg-gray-800 rounded shadow overflow-hidden">
      <img src="download.jpeg" alt={movie.title} className="w-full h-60 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">Avenger : End game</h3>
        <p className="text-sm text-gray-400">2 : 15 min / Action</p>
        <div className="mt-4 flex justify-between items-center">
          <button className="text-sm bg-red-500 px-3 py-1 rounded hover:bg-red-600">watch trailer</button>
          <button
            className="mt-3 bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700"
            onClick={() => deleteMovie(movie._id)}
          >
            Delete
          </button>
          <FiHeart className="text-red-400 hover:text-red-600 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
