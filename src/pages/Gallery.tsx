import React from 'react';
import { useEffect, useState } from 'react';

interface Img {
  id: number;
  media_url: string;
}

const Gallery = () => {
  const [imgs, setImgs] = useState<Img[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState<any | null>(null);

  useEffect(() => {
    fetch('/assets/images')
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setImgs(result.data);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setIsError(error);
        },
      );
  }, []);

  if (isError) {
    return <div>Error: {isError}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <section className="gallery">
        {imgs.map((item) => (
          <article key={item.id} className="gallery__photo">
            <img loading='lazy' src={item.media_url} alt="image" className="gallery__photo__content" />
          </article>
        ))}
      </section>
    );
  }
};

export default Gallery;
