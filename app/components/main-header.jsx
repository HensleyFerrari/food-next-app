import Link from 'next/link';
import classes from './main-header.module.css'
import LogoImg from '@/assets/logo.png'
import Image from 'next/image';

function MainHeader() {
  return (
    <header className={classes.header}>
        <Link className={classes.logo} href="/">
            <Image src={LogoImg} alt="A plate with food on it" priority />
            NextLevel Food
        </Link>

        <nav className={classes.nav}>
            <ul>
                <li>
                    <Link href="/meals">Browse Meals</Link>
                </li>
                <li>
                    <Link href="/community">Foodies Community</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default MainHeader