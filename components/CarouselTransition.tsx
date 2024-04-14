import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

function CarouselTransition() {
    return (
        <Carousel
            showArrows={true}
            autoPlay={true}
            interval={2000}
            infiniteLoop={true}
            emulateTouch={true}
            showThumbs={false}
            className="w-full h-auto mt-[1rem] p-[1rem] rounded-sm"
        >
            {[
                "/DJI_0337.JPG",  // Changed from "public/DJI_0337.JPG"
                "/IMG_20170329_221158.jpg",  // Changed from "public/IMG_20170329_221158.jpg"
                "/nang.jpg"  // Changed from "public/nang.jpg"
            ].map((src, index) => (
                <div key={index} className="relative w-full" style={{ height: '500px' }}>
                    <Image 
                        src={src}
                        alt={`image ${index + 1}`}
                        fill
                        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                    />
                </div>
            ))}
        </Carousel>
    );
}

export default CarouselTransition;
