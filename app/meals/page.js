import Link from 'next/link';
import cls from './page.module.css';
import MealsGrid from '@/components/meals/meals-grid';
import { getRecipe } from '@/lib/meals';
import { Suspense } from 'react';

async function Recipes(){
    const meals = await getRecipe();
    return <MealsGrid meals={meals}/>
}



export default function MealsPage() {
  return (
    <>
    <header className={cls.header}>
        <h1>
            Natural cosmetic, created <span className={cls.highlight}>by you</span>
        </h1>
        <p>Choose your favorite recipe and cook it yourself. It is easy and fun!</p>
        <p className={cls.cta}>
            <Link href="/meals/share">
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
