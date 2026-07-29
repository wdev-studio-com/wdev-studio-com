import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import { useMediaQuery } from "@reactuses/core";

const containerStyle = {
    borderRadius: '10px', // Ajuste conforme necessário
    overflow: 'hidden', // Garante que o vídeo seja cortado pelos cantos arredondados
  };
  
interface  YouTubeVideoProps {
    videoId:string
}


const YouTubeVideo = ({ videoId }:YouTubeVideoProps) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
  
    useEffect(() => {
      // Adiciona um ouvinte para o evento de redimensionamento
      window.addEventListener('resize', handleResize);
  
      // Remove o ouvinte quando o componente é desmontado
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  

  const opts = {
    height: windowWidth/2.3,
    width:windowWidth/1.3,
    playerVars: {
      autoplay: 0,
    },
  };

  return <div style={containerStyle}>
    <YouTube videoId={videoId} opts={opts}  />
  </div>;
};

export default YouTubeVideo;