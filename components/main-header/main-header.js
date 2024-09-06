import Link from "next/link";
import logoImg from '@/assets/logo.png'
import cls from './main-header.module.css';
import Image from "next/image";
import NavLink from "../nav-link/nav-link";

export default function MainHeader() {
  return (
    <header className={cls.header}>
        <Link className={cls.logo} href="/">
            <Image src={logoImg} alt="logo" property/>
            NextLevel Cosmetic
        </Link>
        <nav className={cls.nav}>
            <ul>
                <li>
                    <NavLink href="/meals">Recipes</NavLink>
                </li>
                <li>
                    <NavLink href="/community">Community</NavLink>
                </li>
            </ul>
        </nav>
        
    </header>
  )
}
