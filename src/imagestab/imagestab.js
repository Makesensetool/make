import React, { useState, useEffect } from 'react';
import  Heading  from './downloadImage/downloadpage';
import { UnsplashImage } from './loader/UnsplashImage';
import { Loader } from './loader/Loader';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

// Style
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color:black
  }

  body {
    font-family: sans-serif;
    background-color: white;
    color:black
  }
`;

const WrapperImages = styled.section`
  max-width: 70rem;
  margin: 4rem auto;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 300px;
`;

function App() {
  const [images, setImage] = useState([]);

  useEffect(() => {
    fetchImages();
  }, [])

  const fetchImages = () => {
    axios
      .get(`http://localhost:3001/api/images`)
      .then(res => {
        setImage([...images, ...res.data]);
      })
  }


  return (
    <div className="body">
      <Heading />
      <GlobalStyle />
      <InfiniteScroll
        dataLength={images.length}
        next={fetchImages}
        hasMore={true}
        loader={<Loader />}
      >
        <WrapperImages>
          {images.map((image,key) => (
            <UnsplashImage url={image.image} damagetype={image.damagetype} key={key} />
          ))}
        </WrapperImages>
      </InfiniteScroll>
    </div>
  );
}

export default App;
