import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const images = [
  { src: "/gallery/karya1.jpg", title: "Artwork 1" },
  { src: "/gallery/karya2.jpg", title: "Artwork 2" },
  { src: "/gallery/karya3.jpg", title: "Artwork 3" },
  { src: "/gallery/karya4.jpg", title: "Artwork 4" },
];

export default function App() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>My Art Gallery</h1>
      <p>Klik gambar untuk melihat versi besar.</p>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "12px"
      }}>
        {images.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={img.title}
            style={{
              width: "100%",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "0.3s",
            }}
            onMouseOver={e => e.target.style.transform = "scale(1.05)"}
            onMouseOut={e => e.target.style.transform = "scale(1)"}
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
          />
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={images}
        index={index}
      />
    </div>
  );
}
