import { CONSTANTS } from '../../config/constants';
import LazyImage from '../../components/LazyImage';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function CarouselComponent() {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows={false}
      autoPlay
      autoPlaySpeed={0}
      centerMode={false}
      className="w-full h-[150px]"
      containerClass="container-with-dots"
      customTransition="transform 7s ease-in-out"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024
          },
          items:6,
          partialVisibilityGutter: 60
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0
          },
          items: 1,
          partialVisibilityGutter: 30
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464
          },
          items: 2,
          partialVisibilityGutter: 30
        }
      }}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay={false}
      showDots={false}
      sliderClass=""
      slidesToSlide={1}
      swipeable
      transitionDuration={7000}
    >
      {CONSTANTS.banner.map((image) => (
        <LazyImage
          key={image.id}
          src={image.image}
          alt="background"
          imageSize="100%"
          className="w-[180px] h-[100px] bg-contain bg-no-repeat bg-top"
        />
      ))}
    </Carousel>
  );
}
