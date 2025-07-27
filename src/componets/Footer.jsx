const Footer = () => {
  return (
    <div className="mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center">
      <h1 className="text-2xl font-bold">Portofolio</h1>
      <div className="flex gap-7">
        <a href="#beranda">Beranda</a>
        <a href="#tentang">Tentang</a>
        <a href="#proyek">Karya & Pencapaian</a>
      </div>
      <div className="flex items-center gap-3">
        {/* <a href="https://wa.me/62082257781853">
          <i className="ri-whatsapp-fill ri-2x"></i>
        </a> */}
        <a href="www.facebook.com/adan.comu">
          <i className="ri-facebook-fill ri-2x"></i>
        </a>
        <a href="https://www.instagram.com/m.maulana.20?igsh=MW5qaDViaGFlaDV4ZA==">
          <i className="ri-instagram-fill ri-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
