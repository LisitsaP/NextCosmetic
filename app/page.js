import Link from "next/link";
import cls from "./page.module.css"
import ImageSlideshow from "@/components/images/image-slideshow";

export default function Home() {
  return (
    <>
      <header className={cls.header}>
        <div className={cls.slideshow}>
          <ImageSlideshow/>
        </div>
        <div>
          <div className={cls.hero}>
            <h1>Next level cosmetic for NextLevel care</h1>
            <p>Taste & share cosmetic recipes from all over the world</p>
          </div>
          <div className={cls.cta}>
            <Link href='/community'>Join the Community</Link>
            <Link href="/cosmetics">Explore Recipes</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={cls.section}>
          <h2>How it works</h2>
          <p>
            NextLevel Cosmetic is a platform for people who want to share their favorite
            cosmetics recipes with the world. It&apos;s a place to discover new recipes, and to
            connect with other natural cosmetics lovers.
          </p>
          <p>
            NextLevel Cosmetic is a place to discover new recipes, and to connect
            with other cosmetic creators.
          </p>
        </section>

        <section className={cls.section}>
          <h2>Why NextLevel Cosmetic?</h2>
          <p>
          The world has changed and many ingredients that previously could only be found by large cosmetic companies are now available to everyone.
          </p>
          <p>
          However, by creating your own cosmetics you can improve its quality and avoid adding unnecessary preservatives and dyes.
          </p>
        </section>
      </main>
  
    </>
  );
}
