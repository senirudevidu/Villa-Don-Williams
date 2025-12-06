import { useEffect, useRef } from "react";
import "./VisualTour.css";

const images = import.meta.glob(
  "/src/assets/PhotoGallery/*.{jpg,jpeg,png,webp,JPEG}",
  { eager: true }
);

const allImages = Object.values(images).map((img) => img.default);

function VisualTour() {
  const sectionRef = useRef(null);
  const imageRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          } else {
            entry.target.classList.remove("animate-in");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    // Observe the section title and description
    if (sectionRef.current) {
      const title = sectionRef.current.querySelector(".visual-tour-title");
      const desc = sectionRef.current.querySelector(".visual-tour-desc");
      if (title) observer.observe(title);
      if (desc) observer.observe(desc);
    }

    // Observe each image
    imageRefs.current.forEach((img) => {
      if (img) observer.observe(img);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="visual-tour-section" id="gallery" ref={sectionRef}>
      <h2 className="visual-tour-title">Visual Tour</h2>
      <p className="visual-tour-desc">See the place as guesrs experience it</p>
      <div className="gallery">
        {allImages.map((src, index) => (
          <div
            className="img"
            key={index}
            ref={(el) => (imageRefs.current[index] = el)}
            style={{ transitionDelay: `${index * 0.1}s` }}
          >
            <img src={src} alt={`gallery-${index}`} />
          </div>
        ))}
      </div>
    </section>
  );
}
export default VisualTour;
