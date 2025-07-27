import HeroImage from "/assets/hero-img.webp";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/Mikrotik.svg";
import Tools2 from "/assets/tools/Odoo.svg";
import Tools3 from "/assets/tools/Arduino IDE.svg";
import Tools4 from "/assets/tools/Firebase.svg";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Mikrotik",
    ket: "Networking",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "Odoo",
    ket: "Enterprise Resource Planning",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Arduino IDE",
    ket: "Code Editor",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Firebase",
    ket: "Database",
    dad: "300",
  },
];

import Proyek1 from "/assets/proyek/Proyek1.PNG";
import Proyek2 from "/assets/proyek/hak cipta.png";
import Proyek3 from "/assets/proyek/Mikrotik.svg";
import Proyek4 from "/assets/proyek/Odoo.svg";
import Proyek5 from "/assets/proyek/asdosjarkom.png";
export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Sistem Pemantauan Sawah Mobile Berbasis Internet of Things",
    desk: "Prototype Sistem Monitoring Sawah seperti mengontrol irigasi, kelembapan tanah, ketinggian air, dan pengusir hama tikus",
    tools: ["Arduino IDE", "Android Studio", "Firebase"],
    dad: "200",
    url: "https://djournals.com/klik/article/view/1275",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Hak Cipta",
    desk: "Hak Cipta untuk Program Komputer Sistem Pemantauan Sawah Padi Berbasis Internet Of Things",
    tools: [],
    dad: "300",
    url: "https://drive.google.com/file/d/19jbKun0ktUXwgSmWpeUwAnMeFNTHC_hQ/view?usp=sharing",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Mikrotik",
    desk: "Konfigurasi Kebutuhan Internet sesuai kebutuhan setiap karyawan dengan metode login setiap user. user memiliki akun berbeda sesuai tingkatannya",
    tools: ["Routerboard", "Winbox"],
    dad: "400",
  },
  {
    id: 4,
    gambar: Proyek4,
    nama: "Odoo",
    desk: "Melakukan konfigurasi Odoo sesuai kebutuhan operasional perusahaan manufaktur, dengan fokus pada modul Manufacturing untuk mendukung proses produksi secara efisien. Konfigurasi mencakup pengaturan Bill of Materials, Work Centers, dan alur produksi.",
    tools: [
      "Approval",
      "Custom Report",
      "Custom Rules",
      "Inventory",
      "Manufacture",
      "Purchase",
    ],
    dad: "500",
  },
  {
    id: 5,
    gambar: Proyek4,
    nama: "Odoo",
    desk: "Melakukan konfigurasi Odoo sesuai kebutuhan operasional yang bergerak di bidang distribusi ban. Fokus implementasi mencakup modul Sales, Purchase, Inventory, dan akuntansi dasar, serta penyesuaian workflow dan laporan untuk mendukung proses distribusi secara efektif.",
    tools: [
      "Accounting",
      "Approval",
      "Custom Report",
      "Inventory",
      "Purchase",
      "Sales",
    ],
    dad: "600",
  },
  {
    id: 6,
    gambar: Proyek5,
    nama: "Asisten Dosen Jaringan Komputer",
    desk: "Pernah menjadi asisten dosen untuk membantu pelajaran dalam mengenal networking dan memegang 3 kelas",
    tools: ["Cisco", "Dasar Jaringan", "Mikrotik", "VirtualBox"],
    dad: "700",
    url: "https://drive.google.com/file/d/178Cw-Y4NFSoE4PVbegW3pWUvkpCNKAFH/view?usp=sharing",
  },
];
