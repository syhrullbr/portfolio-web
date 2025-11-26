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
   DATA NOTES (DOCUMENT)
======================= */
const notes = [
  { title: "everything has many sides", link: "/notes/notes1.pdf" },
];


export default function App() {
  const [page, setPage] = useState("about"); // halaman awal About Me
  const [menu, setMenu] = useState(false);

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const [docOpen, setDocOpen] = useState(false);
  const [currentDoc, setCurrentDoc] = useState("");

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>

      {/* MENU TITIK TIGA */}
      <div style={{ position: "fixed", top: 15, right: 15, zIndex: 9999 }}>
        <button 
          onClick={() => setMenu(!menu)}
          style={{
            fontSize: "24px",
            background: "none",
            border: "none",
            cursor: "pointer"
          }}
        >⋮</button>

        {menu && (
          <div style={{
            position: "absolute",
            right: 0,
            top: "35px",
            background: "#fff",
            boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
            borderRadius: "8px",
            overflow: "hidden"
          }}>
            {["about","gallery","notes"].map((p,i) => (
              <div
                key={i}
                onClick={() => { setPage(p); setMenu(false); }}
                style={{
                  padding: "10px 15px",
                  cursor: "pointer",
                  borderBottom: i < 2 ? "1px solid #eee" : "none"
                }}
              >
                {p === "about" && "About Me"}
                {p === "gallery" && "Karya"}
                {p === "notes" && "Notes"}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ================= ABOUT ME ================= */}
      {page === "about" && (
        <div style={{ padding: "40px", textAlign: "center" }}>
          <h1>About Me</h1>
          <img 
            src="/profile.jpg" 
            alt="profile"
            style={{
              width: "140px",
              height: "140px",
              borderRadius: "50%",
              objectFit: "cover",
              margin: "20px 0"
            }}
          />
          <p style={{ maxWidth: "500px", margin: "auto", lineHeight: "1.8" }}>
            Haloo!! Nama gua Syahrul budi ramadhan,biasa dipanggil Arul, atau beberapa orang yang deet biasa manggil Abox(Arul Boxing)atau Ndut juga kadang.Gua lahir di Bekasi tanggal 05 Oktober 2005 dan sempat menetap di Jogja pas kecil. Utuk sekarang, kesibukan ua adalah bekerja di salah satu dealer motor yang logonya kunci sebagai Head marketing dan ada beberapa kesibukan lainnya saat luang seperti jadi MC wedding, ngeband,Nulis buku ,DLL deh kalo luang.
            Website ini adalah ruang kecil gua untuk menumpahkan sedikit karya dan tulisan gua yang sebelumnya bingung mau dituangin kemana hahaha. Jadi, gua harap gua bisa membawa engaruh baik lewat karya kecil gua ini di hidup kalian. enjoy guys!!
          </p>
        </div>
      )}

      {/* ================= GALLERY ================= */}
      {page === "gallery" && (
        <div style={{ padding: "20px" }}>
          <h1 style={{ textAlign: "center" }}>My Works</h1>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))",
            gap: "12px"
          }}>
            {images.map((img, i) => (
              <img
                key={i}
                src={img.src}
                alt={img.title}
                style={{ width: "100%", borderRadius: "8px", cursor: "pointer" }}
                onClick={() => { setIndex(i); setOpen(true); }}
              />
            ))}
          </div>

          <Lightbox open={open} close={() => setOpen(false)} index={index} slides={images}/>
        </div>
      )}

      {/* ================= NOTES ================= */}
      {page === "notes" && (
        <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
          <h1 style={{ textAlign: "center" }}>My Notes</h1>

          {notes.map((note, i) => (
            <button
              key={i}
              onClick={() => { setCurrentDoc(note.link); setDocOpen(true); }}
              style={{
                marginBottom: "12px",
                width: "100%",
                textAlign: "left",
                padding: "10px",
                borderRadius: "5px",
                border: "none",
                background: "#f1f1f1",
                cursor: "pointer"
              }}
            >
              {note.title}
            </button>
          ))}
        </div>
      )}

      {/* ================= MODAL DOCUMENT ================= */}
      {docOpen && (
        <div style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,.7)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 9999
        }}>
          <div style={{
            width: "85%",
            height: "85%",
            background: "#fff",
            borderRadius: "8px",
            position: "relative"
          }}>
            <button
              onClick={() => setDocOpen(false)}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                background: "#000",
                color: "#fff",
                border: "none",
                padding: "5px 10px",
                borderRadius: "5px"
              }}
            >
              Close
            </button>
            <iframe
              src={currentDoc}
              style={{ width: "100%", height: "100%", border: "none" }}
              title="Document"
            />
          </div>
        </div>
      )}

    </div>
  );
}
