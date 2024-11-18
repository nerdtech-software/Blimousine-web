import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const Marquee = () => {
      const [slideIndex, setSlideIndex] = useState(0);
    
      // Reviews content
      const slides = [
        {
          heading: "Review 1",
          text: "This is an excellent product! I've been using it for a week now, and I couldn't be happier with the results.",
          numberText: "",
        },
        {
          heading: "Review 2",
          text: "Great value for the price. Customer service was responsive and helpful in answering all my questions.",
          numberText: "",
        },
        {
          heading: "Review 3",
          text: "I've tried many similar products, but this one stands out. Highly recommend to anyone looking for quality!",
          numberText: "",
        },
      ];
    
      useEffect(() => {
        const interval = setInterval(() => {
          setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 2000); // Change slide every 2 seconds
    
        return () => clearInterval(interval);
      }, [slides.length]);
    
      return (
        <div>
        <div className="max-w-4xl relative mx-auto mt-8 p-4 bg-[#022626] rounded-lg shadow-md">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`mySlides fade ${index === slideIndex ? "block" : "hidden"}`}
            >
              
              <div className="text-center p-4">
                <h3 className="text-xl font-semibold mb-2 text-white">{slide.heading}</h3>
                <p className="text-white">{slide.text}</p>
              </div>
            </div>
          ))}
    
          <div className="flex justify-center mt-4 space-x-2">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`dot h-4 w-4 rounded-full cursor-pointer transition duration-300 ${
                  index === slideIndex ? "bg-gray-800" : "bg-gray-400"
                }`}
                onClick={() => setSlideIndex(index)}
              ></span>
            ))}
          </div>
          </div>
          <div className="flex justify-center items-center">
    <Link to="/review"><button className="inline py-3 mt-10 px-10 border border-[#ff004f] text-white rounded-lg transition-colors duration-500 hover:bg-[#ff004f]">
          Show More
        </button></Link>
      </div>
      <hr className="mt-16  border-gray-200" />
  
          
        </div>
      );
    };
    
 

export default Marquee
