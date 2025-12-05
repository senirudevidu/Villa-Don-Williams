import "./VisualTour.css";

const images = import.meta.glob(
  "/src/assets/PhotoGallery/*.{jpg,jpeg,png,webp,JPEG}",
  { eager: true }
);

const allImages = Object.values(images).map((img) => img.default);

function VisualTour() {
  return (
    <section className="visual-tour-section" id="gallery">
      <h2 className="visual-tour-title">Visual Tour</h2>
      <p className="visual-tour-desc">See the place as guesrs experience it</p>
      <div className="gallery">
        {allImages.map((src, index) => (
          <div className="img">
            <img key={index} src={src} alt={`gallery-${index}`} />
          </div>
        ))}
      </div>
    </section>
  );
}
export default VisualTour;
