import {FaTiktok, FaPhoneAlt, FaLinkedin, FaMapMarkerAlt} from "react-icons/fa";
import {RiInstagramFill} from "react-icons/ri";
import {MdEmail} from "react-icons/md";
import CopyEmail from "../form/CopyEmail";

function Footer() {
  return (
    <footer className="bg-(--primary)/10 text-(--highemphasis) py-10 px-8 mx-auto md:px-12">
      <div className="max-w-7xl ">
        
        {/* Konten Utama */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10">
          
          {/* Kolom Brand & Deskripsi (Lebih lebar) */}
          <div className="md:col-span-4">
            <h2 className="text-xl font-bold mb-4">Hubungi Kami</h2>
            <p className="text-xs sm:text-sm leading-relaxed max-w-sm mb-6 text-justify opacity-90">
              Punya pertanyaan, saran, atau membutuhkan bantuan? Tim Ebook.com siap membantu Anda menikmati pengalaman membaca digital yang lebih mudah dan nyaman.
            </p>
            <CopyEmail />
            {/* Slot Icon Sosmed Custom */}
            <div className="flex gap-6 mx-auto">
              <div ><a href="https://www.instagram.com/wav.ecreative/?utm_source=ig_web_button_share_sheet" className="hover:opacity-70"><RiInstagramFill size={24}/></a></div>
              <div ><a href="#" className="hover:opacity-70"><FaTiktok size={24}/></a></div> 
              <div ><a href="#" className="hover:opacity-70"><FaLinkedin size={24}/></a></div> 
            </div>
          </div>
          
          {/* Kolom Navigasi: Beranda */}
          <div className="md:col-span-2">
            <h3 className="font-bold mb-4">Ebook.com</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:opacity-70">Beranda</a></li>
              <li><a href="#" className="hover:opacity-70">FlashSale</a></li>
              <li><a href="#" className="hover:opacity-70">Audiobook</a></li>
              <li><a href="#" className="hover:opacity-70">FAQ</a></li>
            </ul>
          </div>

          {/* Kolom Navigasi: Sosmed */}
          <div className="md:col-span-2">
            <h3 className="font-bold mb-4">Sosial Media</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:opacity-70">Youtube</a></li>
              <li><a href="#" className="hover:opacity-70">Tiktok</a></li>
              <li><a href="https://www.instagram.com/wav.ecreative/?utm_source=ig_web_button_share_sheet" className="hover:opacity-70">Instagram</a></li>
              <li><a href="#" className="hover:opacity-70">Linkedin</a></li>
            </ul>
          </div>

          {/* Kolom Navigasi: Kontak */}
          <div className="md:col-span-3">
            <h3 className="font-bold mb-4">Kontak</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-end gap-2">
                <span className="mt-1"> <FaPhoneAlt size={16} /> </span>
                <span>+62 851 2488 7102</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1"> <MdEmail size={16} /> </span>
                <span className="break-all">wav.enterprisecreative@gmail.com</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1"> <FaMapMarkerAlt size={16} /> </span>
                <span>Lampung, Indonesia</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-(--border) flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="opacity-70">© {new Date().getFullYear()}{" "} Wave Creative. All rights reserved.</p>
          <p className="mb-2 md:mb-0">Tim Developer Wave Creative</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
