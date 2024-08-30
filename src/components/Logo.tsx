import Image from 'next/image';
import Link from "next/link";
import logo from "../../public/logo.svg";
function Logo() {
  return (
    <Link href="/">
    <Image src={logo} alt="PetSoft logo"/>
    </Link>
)};

export default Logo;
