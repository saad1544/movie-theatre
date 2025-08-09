import React, { useState } from 'react';
import axios from 'axios';

const AddGenre = () => {
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await axios.post('http://localhost:5000/api/genres/addgenre', { name });
      setSuccess(`Genre added: ${response.data.name}`);
      setName('');
    } catch (err) {
      setError(err.response?.data?.msg || 'Error adding genre');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-center">Add Genre</h2>

        {error && <div className="bg-red-600 p-2 rounded text-white">{error}</div>}
        {success && <div className="bg-green-600 p-2 rounded text-white">{success}</div>}

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Genre Name"
          className="w-full p-3 rounded bg-gray-700 text-white"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
        >
          Add Genre
        </button>
      </form>
    </div>
  );
};

export default AddGenre;
