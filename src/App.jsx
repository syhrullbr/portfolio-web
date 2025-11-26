import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

/* =======================
   DATA GALERI
======================= */
const images = [
  { src: "/gallery/karya1.jpg", title: "abox eyes" },
  { src: "/gallery/karya2.jpg", title: "fareza" },
  { src: "/gallery/karya3.jpg", title: "i am gonna growing" },
  { src: "/gallery/karya4.jpg", title: "people go and go" },
];

/* =======================
   DATA NOTES
======================= */
const notes = [
  {
    title: "Tentang Sunyi",
    content: "Sunyi adalah bahasa yang tidak semua orang mampu mengerti."
  },
  {
    title: "Menjadi Tenang",
    content: "Aku belajar tenang bukan karena hidup mudah, tapi karena lelah berperang."
  },
  {
    title: "Rindu",
    content: "Rindu adalah jarak yang tumbuh diam-diam di dalam dada."
  }
];

export default function App() {
  const [page, setPage] = useState("gallery");
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      
      {/* NAVIGATION */}
      <nav style={{ display: "flex", justifyContent: "center", gap: "20px", marginBottom: "30px" }}>
        <button 
          onClick={() => setPage("gallery")}
          style={{
            padding: "10px 20px",
            cursor: "pointer",
            borderRadius: "5px",
            border: "1px solid #333",
            background: page === "gallery" ? "#333" : "#fff",
            color: page === "gallery" ? "#fff" : "#333"
          }}
        >
          Galeri
        </button>
        <button 
          onClick={() => setPage("notes")}
          style={{
            padding: "10px 20px",
            cursor: "pointer",
            borderRadius: "5px",
            border: "1px solid #333",
            background: page === "notes" ? "#333" : "#fff",
            color: page === "notes" ? "#fff" : "#333"
          }}
        >
          Notes
        </button>
      </nav>

      {/* ========== GALERI ========== */}
      {page === "gallery" && (
        <>
          <h1 style={{ textAlign: "center" }}>My Art Gallery</h1>
          <p style={{ textAlign: "center" }}>Klik gambar untuk melihat versi besar.</p>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "12px",
            marginTop: "20px"
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
                onClick={() => { setIndex(i); setOpen(true); }}
              />
            ))}
          </div>

          <Lightbox
            open={open}
            close={() => setOpen(false)}
            index={index}
            slides={images}
          />
        </>
      )}

      {/* ========== NOTES ========== */}
      {page === "notes" && (
        <div style={{ maxWidth: "700px", margin: "auto" }}>
          <h1 style={{ textAlign: "center" }}>My Notes</h1>
          {notes.map((note, i) => (
            <div key={i} style={{
              marginBottom: "20px",
              padding: "15px",
              borderRadius: "8px",
              background: "#f4f4f4"
            }}>
              <h3>{note.title}</h3>
              <p>{note.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
