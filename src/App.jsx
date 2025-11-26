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
   (judul + link dokumen)
======================= */
const notes = [
  { title: "everything has many sides", link: "/notes/notes1.pdf" },
];

export default function App() {
  const [page, setPage] = useState("gallery");
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  // state untuk modal dokumen
  const [docOpen, setDocOpen] = useState(false);
  const [currentDoc, setCurrentDoc] = useState("");

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
        <div style={{ maxWidth: "500px", margin: "auto" }}>
          <h1 style={{ textAlign: "center" }}>My Notes</h1>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {notes.map((note, i) => (
              <li key={i} style={{ marginBottom: "15px" }}>
                <button
                  onClick={() => { setCurrentDoc(note.link); setDocOpen(true); }}
                  style={{
                    width: "100%",
                    textAlign: "left",
                    padding: "10px 15px",
                    borderRadius: "5px",
                    border: "none",
                    background: "#f4f4f4",
                    cursor: "pointer",
                    transition: "0.3s"
                  }}
                  onMouseOver={e => e.currentTarget.style.background = "#ddd"}
                  onMouseOut={e => e.currentTarget.style.background = "#f4f4f4"}
                >
                  {note.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* ========== MODAL DOKUMEN ========== */}
      {docOpen && (
        <div style={{
          position: "fixed",
          top: 0, left: 0, right: 0, bottom: 0,
          background: "rgba(0,0,0,0.7)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 9999
        }}>
          <div style={{
            width: "80%",
            height: "80%",
            background: "#fff",
            borderRadius: "8px",
            position: "relative",
            padding: "10px"
          }}>
            <button 
              onClick={() => setDocOpen(false)}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                background: "#333",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                padding: "5px 10px",
                cursor: "pointer"
              }}
            >
              Close
            </button>
            <iframe 
              src={currentDoc} 
              style={{ width: "100%", height: "100%", border: "none", borderRadius: "5px" }}
              title="Document Viewer"
            />
          </div>
        </div>
      )}
    </div>
  );
}

