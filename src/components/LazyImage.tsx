import React, { ReactNode, useEffect, useRef } from 'react';
import { cn } from "../lib/utils"


interface LazyImageProps {
    src: string
    alt: string
    className?: string
    children?:ReactNode
    imageSize?:string
}


const LazyImage: React.FC<LazyImageProps> = ({ src, alt, className,imageSize, children }) => {
    const backgroundRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Aplica a imagem de fundo quando estiver visível
              if (backgroundRef.current) {
                backgroundRef.current.style.backgroundImage = `url(${src})`;
                observer.unobserve(entry.target);
              }
            }
          });
        },
        { rootMargin: '0px 0px 0px 0px' } // Margem para detecção de interseção
      );
  
      if (backgroundRef.current) {
        observer.observe(backgroundRef.current);
      }
  
      // Cleanup do observador ao desmontar o componente
      return () => observer.disconnect();
    }, [src]);

    return <div  ref={backgroundRef} className={cn(className)} style={{backgroundSize: imageSize}}>
      {children}
    </div>;
};

export default LazyImage;
