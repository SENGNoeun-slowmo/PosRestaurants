import { useEffect, useState } from "react";
import "../styles/home-page.css";
import Ifo_left from "../components/Ifo_left";
import Slide from "../components/Slide";

const SLIDE_IMAGES = [
  { id: 1, img: "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg" },
  { id: 2, img: "https://images.pexels.com/photos/26443457/pexels-photo-26443457.jpeg" },
  { id: 3, img: "https://images.pexels.com/photos/27971672/pexels-photo-27971672.jpeg" },
];
const list_categories = [
  { id: 1, title: "Electronics" },
  { id: 2, title: "Fashion" },
  { id: 3, title: "Home & Garden" },
  { id: 4, title: "Sports" },
  { id: 5, title: "Toys" },
];
function HomePage() {
  const [slideImages] = useState(SLIDE_IMAGES);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slideImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slideImages.length]);

  const nextSlide = () =>
    setIndex((prev) => (prev + 1) % slideImages.length);

  const prevSlide = () =>
    setIndex((prev) =>
      prev === 0 ? slideImages.length - 1 : prev - 1
    );

  return (
    <div className="container-fluid home-page">
      <div className="row slide-container align-items-center col-xl-12 col-lg-12 col-md-12 col-sm-12">
        <Ifo_left list_categories={list_categories} />
        <Slide
          index={index}
          slide_image={slideImages}
          prevSlide={prevSlide}
          nextSlide={nextSlide}
        />
      </div>
    </div>
  );
}

export default HomePage;
