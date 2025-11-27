import { useState, useRef } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

/* =======================
   DATA GALERI
======================= */
const images = [
  { src: "/gallery/karya1.jpg", title: "ABox Eyes" },
  { src: "/gallery/karya2.jpg", title: "Fareza" },
  { src: "/gallery/karya3.jpg", title: "I'm Gonna Grow" },
  { src: "/gallery/karya4.jpg", title: "People Go and Go" },
  { src: "/gallery/karya5.jpg", title: "Abel" },
  { src: "/gallery/karya6.jpg", title: "Pusing" },
  { src: "/gallery/karya7.jpg", title: "Lukis date" },
  { src: "/gallery/karya8.jpg", title: "Selow" },
];


/* =======================
   DATA NOTES
======================= */
const notes = [
  {
    title: "Masa kecil bagai pisau",
    content: "Masa kecil itu seharusnya seperti halaman pertama buku yang wangi dan bersih, tetapi terkadang justru tergores sejak awal. Ada tawa yang terdengar, namun di baliknya tersimpan kebingungan yang tak sempat diberi nama. Ada pelukan yang seharusnya menghangatkan, tetapi entah mengapa terasa hampa. Sejak saat itu, dunia kecil tersebut belajar mengenal sunyi lebih cepat daripada seharusnya. Waktu kemudian berjalan seperti kereta yang tak mau menunggu. Tubuh bertumbuh, suara berubah, dan langkah menjadi lebih yakin, tetapi bayang-bayang lama masih ikut menempel di tumit. Hal-hal sederhana bisa tiba-tiba terasa menakutkan, kata-kata biasa kadang menjelma menjadi luka. Seolah masa lalu punya cara halus untuk menyelinap ke masa kini, mengaduk rasa tanpa permisi. Di usia dewasa, topeng menjadi hal yang mahir dikenakan. Senyum dipelajari, tawa dilatih, dan ketegaran diumumkan kepada dunia. Namun di ruang-ruang sepi, ada gemetar kecil yang tak terlihat orang. Ada capek yang bukan dari kerja, ada sedih yang bukan dari hari ini. Semua terkumpul seperti hujan lama yang belum sempat kering. Anehnya, hidup selalu punya cara halus untuk mempertemukan luka dengan cahaya. Bisa lewat sebuah buku yang kebetulan dibaca, lagu yang tiba-tiba mengerti, atau orang asing yang hadir seperti jendela terbuka. Sedikit demi sedikit, ada keberanian untuk menengok ke belakang, bukan untuk menyalahkan, melainkan untuk memahami. Ternyata luka tidak selalu meminta diskriminasi, kadang hanya ingin diakui. Perlahan, benang kusut itu mulai diurai. Air mata yang dulu ditahan akhirnya jatuh tanpa rasa malu. Kata-kata yang lama dipendam belajar keluar, meski terbata. Dari sana, ada ruang yang mengembang di dada, seperti paru-paru yang baru pertama kali menghirup udara paling bersih. Menyadari bahwa masa lalu memang bagian dari cerita, namun tidak berhak menguasai halaman berikutnya. Dan pada suatu hari yang tenang, ada senyum yang lahir tanpa paksaan. Bukan senyum yang menutupi, melainkan yang merayakan. Menurutku trauma tidak mungkin bisa lenyap begitu saja, tetapi perlahan pasti berubah menjadi guru yang lembut. Ia mengajarkan betapa kuatnya hati, betapa berharganya damai, dan betapa masa depan selalu memberi tempat bagi cerita yang berani sembuh."
  },
  {
    title: "Dewasa",
    content: "Kehidupan dewasa sering dibayangkan seperti panggung megah dengan lampu sorot yang ramah, tetapi kenyataannya lebih mirip lorong panjang dengan cahaya yang tak selalu terang. Dahulu ada angan-angan tentang hari yang mapan, pekerjaan yang membanggakan, dan kebahagiaan yang datang tepat waktu. Namun saat usia bertambah, yang hadir justru keraguan yang diam-diam menumpuk, seperti debu di rak yang jarang disentuh. Setiap pagi seolah menjadi lomba antara harapan dan kenyataan. Jam berdetak tanpa kompromi, sementara rencana sering tersesat di tengah jalan. Ada usaha yang telah dicurahkan sepenuh tenaga, tetapi hasilnya tak selalu sebanding. Dalam kelelahan semacam itu, dewasa terasa seperti menyimpan banyak pertanyaan tanpa sempat mencari jawaban. Di tengah hiruk-pikuk itu, hati belajar berdamai dengan kekecewaan kecil yang sering datang bertamu. Ada mimpi yang harus mengecil agar muat dalam kenyataan, ada ambisi yang ditunda sampai waktu yang belum tentu. Bukan karena kurang keberanian, melainkan karena hidup ternyata tidak selalu berjalan lurus. Belokan-belokan tak terduga menjadi bagian dari rute. Meski demikian, hidup bukan semata-mata tentang kegagalan yang disorot lampu. Ada hal-hal kecil yang diam-diam setia menemani: secangkir minuman hangat di sore hari, tawa singkat yang mencuri lelah, atau langit sore yang menyapa lembut. Dari situ, makna mulai berubah bentuk. Bahagia tidak lagi dipaksa seragam dengan impian lama, tetapi menemukan wujud baru yang lebih jujur. Perlahan, kesadaran tumbuh bahwa tidak semua target mesti dicapai agar hidup layak dirayakan. Ada keberanian baru untuk memaafkan diri sendiri atas rencana yang tidak terwujud. Ada kelembutan yang lahir dari menerima bahwa jatuh bukan akhir, melainkan jeda untuk menata langkah. Hati pun belajar bahwa cukup sering kali lebih berharga daripada sempurna. Pada akhirnya, dewasa memang tidak selalu seperti poster impian yang dulu ditempel rapi. Namun ia menawarkan hadiah lain: kebijaksanaan yang tak bisa dibeli, ketangguhan yang lahir dari bertahan, dan kedamaian yang perlahan disusun. Kehidupan mungkin melenceng dari peta awal, tetapi justru di sanalah ditemukan arah yang lebih manusiawi—tempat lelah bertemu harap, dan kecewa berakhir menjadi tenang..."
  },
  {
    title: "Yatim pasif",
    content: "Hidup tanpa pembimbing terasa seperti berjalan di malam berkabut tanpa lentera. Setiap langkah diambil dengan ragu, setiap arah tampak serupa. Dahulu ada hari-hari yang diisi pertanyaan, tetapi tidak selalu menemukan tempat bertanya. Di sanalah sunyi mulai akrab, bukan sebagai musuh, melainkan sebagai teman yang memaksa seseorang belajar mendengar gema dirinya sendiri. Seiring waktu, keputusan-keputusan kecil harus dibuat tanpa peta. Kesalahan datang sebagai guru yang keras, sementara keberhasilan hadir sebagai kejutan yang tak disangka. Ada pintu yang tertutup sebelum sempat diketuk, ada jalan yang berujung buntu. Namun dari semua itu, tumbuh satu hal yang tak mudah diukur: keberanian untuk tetap melangkah, meski dunia tidak menawarkan petunjuk. Kadang muncul iri yang samar ketika melihat mereka yang berjalan dengan tangan dituntun. Perasaan itu datang bukan untuk membandingkan, melainkan mengingatkan bahwa kebutuhan akan arah adalah fitrah. Hati sempat goyah, bertanya apakah hidup memang selalu sesunyi ini. Tetapi pertanyaan itu pelan-pelan berubah menjadi doa yang tak diucap, harapan yang disimpan rapi di dada. Di tengah kesendirian, ternyata alam sering menjadi penasehat paling setia. Angin mengajarkan tentang bergerak tanpa terlihat, hujan mengingatkan bahwa jatuh pun punya suara yang indah, dan matahari datang setiap pagi tanpa pernah diminta. Dari sana, pelajaran sederhana dipetik: hidup terus berjalan, sekalipun tanpa tepuk tangan. Pelan-pelan, sosok pembimbing baru lahir dari dalam. Ia tidak berwajah, tidak bersuara lantang, namun setia mengingatkan untuk bangkit. Setiap luka menjadi halaman catatan, setiap kecewa menjadi tanda arah. Ternyata, kehilangan penuntun bukan berarti kehilangan tujuan; terkadang justru menemukan peta di dalam diri sendiri. Dan pada suatu sore yang tenang, ada kelegaan yang jatuh seperti embun. Hidup tanpa pembimbing tidak lagi terasa sebagai kutukan, melainkan perjalanan sunyi yang menempa. Luka-luka berubah menjadi cahaya kecil, cukup untuk menerangi langkah berikutnya. Dari sanalah tumbuh percaya: meski dilahirkan tanpa petunjuk, hati mampu merajut arah, dan esok selalu bersedia menyambut dengan ruang harap..."
  },
  {
    title: "Semangat baru",
    content: "Pernah ada masa ketika hidup terasa seperti ruangan tanpa jendela, pengap, penuh napas yang tertahan. Hari-hari berlalu dengan warna yang sama, abu-abu yang menempel di mata dan dada. Senyum hadir sekadarnya, tawa mampir sebentar, lalu pergi meninggalkan lengang. Di sanalah lelah bertumpuk, bukan di otot, melainkan di harapan. Setiap bangun terasa seperti mengangkat beban yang tak terlihat. Dunia berjalan seperti biasa, namun jiwa tertatih mengejarnya. Rencana-rencana lama tergeletak di sudut pikiran, berdebu dan nyaris terlupa. Ada rindu pada gairah yang dulu terang, seolah sinarnya pernah ada, tapi kini tinggal cerita. Namun hidup selalu menyelipkan keajaiban kecil di sela keputusasaan. Bisa lewat langit pagi yang mendadak biru, aroma hujan di sore sunyi, atau lagu lama yang mendadak terdengar lebih jujur. Dari hal-hal sepele itu, jantung mulai berdetak sedikit lebih keras. Tanda-tanda kecil bahwa rasa masih hidup, belum benar-benar padam. Pelan-pelan, keberanian merangkak kembali. Bukan dalam bentuk lompatan besar, melainkan langkah-langkah ringan yang nyaris tak terasa. Ada janji-janji sederhana yang dibuat untuk diri sendiri: tidur yang lebih jujur, makan yang lebih peduli, dan berhenti menghakimi luka. Dari sana, ruang dalam dada mulai longgar. Hari demi hari, semangat baru lahir seperti matahari setelah badai. Tidak menyilaukan, tapi hangat. Keinginan kembali tumbuh, mungkin belum sebesar dulu, namun cukup untuk menyalakan api. Dan api kecil pun lebih berharga daripada kegelapan yang dibiarkan menang. Pada akhirnya, membuat semangat baru bukan tentang menghapus masa lalu, melainkan merangkulnya tanpa takut. Luka tetap ada, cerita lama masih berbisik, tetapi kini tidak lagi memerintah. Hidup kembali dipeluk dengan cara yang lebih lembut. Dan dari situlah harap menemukan rumah barunya, sederhana, jujur, dan bertahan..."
  },
  {
    title: "coomin soon",
    content: "Rindu adalah rasa yang enggan pulang. Ia tumbuh diam-diam, mengakar tanpa suara..."
  }
];

export default function App() {
  const [page, setPage] = useState("about"); 
  const [menu, setMenu] = useState(false);

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const [currentNote, setCurrentNote] = useState(null);

  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  function toggleMusic() {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  }

  return (
    <div style={{
  fontFamily: "Georgia, serif",
  background: "linear-gradient(to bottom, #fafafa, #f0f0f0)",
  minHeight: "100vh",
  color: "#1a1a1a"
}}>


      {/* AUDIO BACKGROUND */}
      <audio ref={audioRef} loop>
        <source src="/music/music1.mp3" type="audio/mpeg" />
      </audio>

      {/* TOMBOL MUSIK */}
      <button
        onClick={toggleMusic}
        style={{
          position: "fixed",
          bottom: 15,
          left: 15,
          background: "#000",
          color: "#fff",
          borderRadius: "50%",
          width: "45px",
          height: "45px",
          border: "none",
          cursor: "pointer",
          zIndex: 9999
        }}
      >
        {playing ? "❚❚" : "▶"}
      </button>

      {/* MENU TITIK TIGA */}
      <div style={{ position: "fixed", top: 15, right: 15, zIndex: 9999 }}>
  <button 
    onClick={() => setMenu(!menu)}
    style={{
      fontSize: "22px",
      width: "42px",
      height: "42px",
      borderRadius: "50%",
      background: "#111",
      color: "#fff",
      border: "none",
      cursor: "pointer",
      boxShadow: "0 4px 12px rgba(0,0,0,.3)"
    }}
  >
    ⋮
  </button>

        {menu && (
          <div style={{
            position: "absolute",
            right: 0,
            top: "50px",
            background: "#111",
            color: "#fff",
            boxShadow: "0 10px 25px rgba(0,0,0,0.4)",
            borderRadius: "12px",
            overflow: "hidden",
            minWidth: "140px"
          }}>


            {["about","gallery","notes"].map((p,i) => (
              <div
                key={i}
                onClick={() => { setPage(p); setMenu(false); setCurrentNote(null); }}
                style={{
                  <div
                    key={i}
                    style={{
                      padding: "12px 18px",
                      cursor: "pointer",
                      borderBottom: i < 2 ? "1px solid rgba(255,255,255,.15)" : "none",
                      transition: ".3s"
                   }}
                 >
                {p === "about" && "About Me"}
                {p === "gallery" && "My Works"}
                {p === "notes" && "My Notes"}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ================= ABOUT ME ================= */}
      {page === "about" && (
        <div style={{ padding: "60px 20px", textAlign: "center" }}>
          <h1 style={{ fontSize: "44px" }}>About Me</h1>

          <div style={{
            margin: "25px auto",
            width: "140px",
            height: "140px",
            borderRadius: "50%",
            overflow: "hidden",
            boxShadow: "0 10px 25px rgba(0,0,0,.2)"
          }}>
            <img src="/gallery/karya0.jpg" alt="profile" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>

          <p style={{ maxWidth: "520px", margin: "30px auto", lineHeight: "1.9" }}>
            Haloo, nama gua syahrul budi ramadhan, biasa dipanggil arul atau beberapa yang deket biasa memanggil abox(Arul Boxing) dan kadang juga ndut haha.
            Gua lahir di bekasi tanggal 05 Oktober 2005 dan sempet menetap di jogja juga pas kecil.
            <br/><br/>
            Kesibukan gua saat ini adalah bekerja di dealer motor yamaha sebagai Head Marketing, dan kadang ada kegiatan lainnya saat luang kaya ngeband, jadi MC wedding, Nulis buku atau puisi, DLL deh kalo luang.
            <br/><br/>
            Website ini adalah tempat dimana gua menaruh karya-karya kecil gua dan tentunya berharap semoga bisa membawa pengaruh baik untuk kalian juga hahaha. ENJOY GUYYSS!!!
          </p>

          <p style={{ fontStyle: "italic", opacity: 0.7 }}>
            "Some people write to be heard, I write to breathe."
          </p>
        </div>
      )}

      {/* ================= GALLERY ================= */}
      {page === "gallery" && (
        <div style={{ padding: "30px" }}>
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
                style={{ borderRadius: "8px", cursor: "pointer" }}
                onClick={() => { setIndex(i); setOpen(true); }}
              />
            ))}
          </div>

          <Lightbox open={open} close={() => setOpen(false)} index={index} slides={images}/>
        </div>
      )}

      {/* ================= NOTES LIST ================= */}
      {page === "notes" && currentNote === null && (
        <div style={{ padding: "40px", maxWidth: "500px", margin: "auto" }}>
          <h1 style={{ textAlign: "center" }}>My Notes</h1>

          {notes.map((note, i) => (
            <div
              key={i}
              onClick={() => setCurrentNote(note)}
              style={{
                padding: "12px",
                marginBottom: "15px",
                borderRadius: "8px",
                background: "#ffffff",
                color: "#222",
                cursor: "pointer"
              }}
             >
              {note.title}
            </div>
          ))}
        </div>
      )}

      {/* ================= NOTES DETAIL ================= */}
      {page === "notes" && currentNote && (
        <div style={{ padding: "40px", maxWidth: "600px", margin: "auto" }}>
          <button onClick={() => setCurrentNote(null)}>← kembali</button>
          <h1 style={{ color: "#111" }}>{currentNote.title}</h1>
          <p style={{ marginTop: "20px", lineHeight: "1.8", color: "#333" }}>
            {currentNote.content}
          </p>
        </div>
      )}

    </div>
  );
}
