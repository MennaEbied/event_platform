import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" py-8 mt-20">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 px-4">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/icons/logo.png" alt="logo" width={24} height={24} />
          <p className="font-bold text-xl">DevEvent</p>
        </Link>

        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} DevEvent. All rights reserved.
        </p>

        <div className="flex gap-6 text-sm text-gray-600">
          <Link href="#" className="hover:text-white">
            About
          </Link>
          <Link href="#" className="hover:text-white">
            Privacy
          </Link>
          <Link href="#" className="hover:text-white">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
