import Link from 'next/link';
import cls from './page.module.css';
import { getRecipe } from '@/lib/cosmetics';
import { Suspense } from 'react';
import CosmeticGrid from '@/components/cosmetics/cosmetic-grid';

async function Recipes(){
    const cosmetics = await getRecipe();
    return <CosmeticGrid cosmetics={cosmetics}/>
}



export default function CosmeticsPage() {
  return (
    <>
    <header className={cls.header}>
        <h1>
            Natural cosmetic, created <span className={cls.highlight}>by you</span>
        </h1>
        <p>Choose your favorite recipe and make it yourself. It is easy and fun!</p>
        <p className={cls.cta}>
            <Link href="/cosmetics/share">
                Share Your Favorite Recipe
            </Link>
        </p>
    </header>
    <main className={cls.main}>
        <Suspense fallback={<p className={cls.loading}>Loading recipes...</p>}>

        <Recipes/>
        </Suspense>
    </main>
    </>
  )
}
