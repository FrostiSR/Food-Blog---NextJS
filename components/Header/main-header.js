import Link from "next/link"
import logoImg from '@/assets/logo.png'
import classes from './main-header.module.css'
import Image from "next/image"
import MainHeaderBG from "./main-header-bg"
import NavLink from "./nav-link"

export default function MainHeader() {
  return (
    <>
    <MainHeaderBG />
     <header className={classes.header}>
      <Link className={classes.logo} href="/">
        <Image src={logoImg} alt='a plate with food' priority/>
        NextLevel Food
      </Link>

      <nav className={classes.nav}>
        <ul>
        <li>
            <NavLink href={"/meals"}>Browse Meals</NavLink>
        </li>
        <li>
          <NavLink href={"/community"}>Foodies Community</NavLink> 
        </li>
        </ul>
    </nav>
    </header>
    
    </>
   
  )
}
