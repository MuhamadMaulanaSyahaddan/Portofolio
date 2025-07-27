import DataImage from "./data.js";
import { listTools, listProyek } from "./data.js";

function App() {
  return (
    <>
      <div className="hero grid md:grid-cols-2 grid-cols-1 items-center pt-10 xl:gap-0 gap-6">
        <div className="animate__animated animate__fadeInUp animate__delay-2s">
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-2 rounded-2xl">
            <img
              src={DataImage.HeroImage}
              alt="HeroImage"
              className="w-10 rounded-md"
              loading="lazy"
            />
            <q>
              "Teknologi selalu berubah — dan saya senang jadi bagian dari
              perubahan itu😁"
            </q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">
            Hi, Saya Muhamad Maulana Syahaddan
          </h1>
          <p className="text-base/loose mb-6 opacity-50">
            <strong>Lulusan Informatika</strong> yang memiliki pengalaman di
            bidang <strong>IT</strong>, dengan fokus pada{" "}
            <strong>implementasi dan dukungan teknis sistem ERP (Odoo)</strong>,{" "}
            <strong>jaringan komputer (Networking)</strong>, serta{" "}
            <strong>IT Support</strong> untuk troubleshooting perangkat keras
            dan lunak. Terbiasa bekerja secara{" "}
            <strong>tim maupun mandiri</strong>, dan memiliki semangat belajar
            tinggi dalam mengikuti perkembangan teknologi terkini.
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a
              href="#"
              className="bg-blue-800 p-4 rounded-2xl hover:bg-blue-700"
            >
              Download CV <i className="ri-download-line ri-lg"></i>
            </a>
            <a
              href="#proyek"
              className="bg-blue-800 p-4 rounded-2xl hover:bg-blue-700"
            >
              Karya & Pencapaian <i className="ri-arrow-down-line ri-lg"></i>
            </a>
          </div>
        </div>
        <img
          src={DataImage.HeroImage}
          alt="HeroImage"
          className="w-[500px] md:ml-auto rounded-3xl animate__animated animate__fadeInUp animate__delay-2s"
          loading="lazy"
        />
      </div>
      {/* Tentang */}
      <div className="tentang mt-32 py-10" id="tentang">
        <div
          className="xl:w-2/3 lg:2-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <img
            src={DataImage.HeroImage}
            alt="Image"
            className="w-12 rounded-md mb-5 sm:hidden"
            loading="lazy"
          />
          <p className="text-base/loose mb-10">
            Hi, saya <strong>Muhamad Maulana Syahaddan</strong>, lulusan{" "}
            <strong>Informatika</strong> yang saat ini bekerja di bidang{" "}
            <strong>IT</strong>. Saya memiliki ketertarikan besar pada dunia{" "}
            <strong>teknologi</strong>, khususnya di bidang{" "}
            <strong>Networking</strong> dan{" "}
            <strong>Internet of Things (IoT)</strong>.
            <br />
            Saya aktif mempelajari teknologi baru, dan saat ini fokus mendalami{" "}
            <strong>ERP Odoo</strong>. Saya telah menangani modul{" "}
            <strong>Purchasing</strong>, <strong>Inventory</strong>, dan{" "}
            <strong>Manufacturing</strong>, serta mampu melakukan{" "}
            <strong>modifikasi alur Odoo</strong> sesuai kebutuhan operasional,
            dan <strong>customize laporan</strong> agar sesuai dengan kebutuhan.
            <br />
            Saya senang bekerja dalam <strong>tim</strong>, karena pengembangan
            teknologi seperti Networking dan IoT memerlukan kolaborasi yang
            kuat. Namun, saya juga terbiasa bekerja secara{" "}
            <strong>mandiri</strong> dengan tanggung jawab penuh saat
            dibutuhkan.
          </p>
          <div className="flex items-center justify-between">
            <img
              src={DataImage.HeroImage}
              alt="Image"
              className="w-12 rounded-md sm:block hidden"
              loading="lazy"
            />
            <div className="flex item-center gap-6">
              <div>
                <h1 className="text-4xl mb-1">
                  4<span className="text-blue-700">+</span>
                </h1>
                <p>Proyek Selesai</p>
              </div>
              <div>
                <h1 className="text-4xl mb-1">
                  1<span className="text-blue-700">+</span>
                </h1>
                <p>Tahun Pengalaman</p>
              </div>
            </div>
          </div>
        </div>
        {/* Tools */}
        <div className="tools mt-32">
          <h1
            className="text-4xl/snug font-bold mb-4 "
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Tools yang dipakai
          </h1>
          <p
            className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-once="true"
          >
            Berikut Tools yang saya pakai untuk Networking, IoT, ERP
          </p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listTools.map((tool) => (
              <div
                className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md
             hover:bg-zinc-800 group"
                key={tool.id}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={tool.dad}
                data-aos-once="true"
              >
                <img
                  src={tool.gambar}
                  alt="tools-box"
                  className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-bold">{tool.nama}</h4>
                  <p className="opacity-50">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Tools */}
      </div>
      {/* Tentang */}
      {/* Proyek */}
      <div className="proyek mt-32 py-10" id="proyek">
        <h1
          className="text-center text-4xl font-bold mb-2"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-once="true"
        >
          Karya & Pencapaian
        </h1>
        <p
          className="text-base/loose text-center opacity-50"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-once="true"
        >
          Beberapa dokumentasi karya, proyek, dan pengalaman yang telah saya
          raih
        </p>
        <div className="proyek-box mt-14 grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listProyek.map((proyek) => (
            <div
              key={proyek.id}
              className="p-4 bg-zinc-800 rounded-md"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={proyek.dad}
              data-aos-once="true"
            >
              {proyek.gambar && (
                <img
                  src={proyek.gambar}
                  alt="Proyek Image"
                  loading="lazy"
                  className="mb-4"
                />
              )}
              <div>
                <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
                <p className="text-base/loose mb-4">{proyek.desk}</p>
                {proyek.tools && proyek.tools.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {proyek.tools.map((tool, index) => (
                      <p
                        className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold"
                        key={index}
                      >
                        {tool}
                      </p>
                    ))}
                  </div>
                )}
                <div className="mt-8 text-center">
                  {proyek.url && (
                    <a
                      href={proyek.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-800 p-3 rounded-lg block border border-zinc-600 hover:bg-blue-700"
                    >
                      Link Website <i className="ri-arrow-right-line"></i>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Proyek */}
      {/* Kontak */}
      <div className="kontak mt-32 sm:p-10 p-0" id="kontak">
        <h1
          className="text-4xl mb-2 font-bold text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-once="true"
        >
          Kontak
        </h1>
        <p
          className="text-base/loose text-center mb-10 opacity-50"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-once="true"
        >
          Isi formulir di bawah ini untuk menghubungi saya secara langsung
        </p>
        <form
          action="https://formsubmit.co/muhamadmaulanasyahaddan@maulanatech.com"
          method="POST"
          className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md"
          autoComplete="off"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
          data-aos-once="true"
        >
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Nama Lengkap</label>
              <input
                type="text"
                name="nama"
                placeholder="Masukkan Nama..."
                required
                className="border border-zinc-500 p-2 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Masukkan Email..."
                required
                className="border border-zinc-500 p-2 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="pesan" className="font-semibold">
                Pesan
              </label>
              <textarea
                name="pesan"
                id="pesan"
                cols="45"
                rows="8"
                placeholder="Masukkan Pesan..."
                className="border border-zinc-500 p-2 rounded-md"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-800 p-3 rounded-lg w-full cursor-pointer border border-zinc-700 hover:bg-blue-700"
              >
                Kirim Pesan
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* Kontak */}
    </>
  );
}

export default App;
