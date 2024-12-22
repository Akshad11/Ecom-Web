import { useState } from "react";

const ImageSlider = ({ images }: { images: string[] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const moveSlide = (direction: number) => {
        const totalSlides = images.length;
        let newIndex = currentIndex + direction;

        if (newIndex >= totalSlides) {
            newIndex = 0;
        } else if (newIndex < 0) {
            newIndex = totalSlides - 1;
        }

        setCurrentIndex(newIndex);
    };

    return (
        <div className="relative w-full mx-auto h-full overflow-hidden">
            <div
                className="flex transition-transform duration-500 w-full h-full"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Slide ${index}`}
                        className="min-w-full h-full object-fill"
                    />
                ))}
            </div>

            <button
                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black text-white px-4 py-2 opacity-50 hover:opacity-100"
                onClick={() => moveSlide(-1)}
            >
                &#10094;
            </button>

            <button
                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black text-white px-4 py-2 opacity-50 hover:opacity-100"
                onClick={() => moveSlide(1)}
            >
                &#10095;
            </button>
        </div>
    );
};

export default ImageSlider;
