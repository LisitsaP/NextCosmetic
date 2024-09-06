import Image from "next/image"
import cls from "./page.module.css"
import { getRecipes } from "@/lib/cosmetics"
import { notFound } from "next/navigation"

export default function RecipeDetailsPage({params}) {

  const recipe = getRecipes(params.recipeSlug)
  if(!recipe){
    notFound();
  }
  recipe.instructions = recipe.instructions.replace(/\n/g, '<br/>');
  return (
    <>
   <header className={cls.header}>
    <div className={cls.image}>
      <Image fill alt="image" src={recipe.image}/>
    </div>
    <div className={cls.headerText}>
      <h1>
      {recipe.title}
      </h1>
      <p className={cls.creator}>
        by <a href={`mailto:${'recipe.creator_email'}`}>{recipe.creator}</a>
        </p>
        <p className={cls.summary}>{recipe.summary}</p>
    </div>
   </header>
   <main>
    <p className={cls.instructions} dangerouslySetInnerHTML={{__html: recipe.instructions,}}></p>
   </main>
    </>

  )
}
