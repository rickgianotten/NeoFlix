import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import "../../assets/css/componenten/carousel/carousel.css";

export default function Carousel({children}){
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true}, [Autoplay()]);

    return <>
        <div className='embla' ref={emblaRef}>
            <div className="embla__container">
                {children}
            </div>
        </div>
    </>
}