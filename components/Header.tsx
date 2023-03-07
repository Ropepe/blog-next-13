import Image from "next/image"
import Link from "next/link"

const Header = () => {
  return (
    <header className="flex items-center justify-between space-x-2
    font-bold px-10 py-5">
      <div className="flex items-center   space-x-2">
        <Link href="/">
          <Image
            className="rounded-full"
            width={40}
            height={40}
            src="https://img.icons8.com/bubbles/256/duolingo-logo.png"
            alt="brand logo"
          />
        </Link>
        <Link href="/">PERICA blog</Link>
      </div>
      <div>
        <Link href="https://www.maskarada.rs"
          className="px-5 py-3 text-sm md:text-base bg-gray-800 text-[#179cef] flex items-center rounded-full text-center hover:text-[#77adcf] transition-all">
          Maskarada band promo
        </Link>
      </div>
    </header>
  )
}

export default Header