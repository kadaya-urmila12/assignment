import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageCard from './components/ImageCard';
 import './App.css';

function App() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchImages = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://picsum.photos/v2/list?page=${page}&limit=10');
      setImages(prevImages => [...prevImages, ...response.data]);
    } catch (error) {
      console.error('Error fetching images:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, [page]);

  return (
    <div className="container text-center">
      <h1 className="mb-4">Image Gallery</h1>
      <div className="row">
        {images.map((image) => (
          <ImageCard key={image.id} image={image} />
        ))}
      </div>
      <button
        className="btn btn-primary mt-4"
        onClick={() => setPage(page + 1)}
        disabled={loading}
      >
        {loading ? 'Loading...' : 'Load More'}
      </button>
    </div>
  );
}

export default App;