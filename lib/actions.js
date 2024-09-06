'use server';

import { redirect } from "next/navigation";
import { saveRecipe } from "./meals";
import { revalidatePath } from 'next/cache';
function isInvalidText(text) {
return !text || text.trim() === '';
}
export async function shareRecipe(prevState, formData){
    const recipe = {
        title: formData.get("title"),
        summary: formData.get("summary"),
        instructions: formData.get("instructions"),
        image: formData.get("image"),
        creator: formData.get("name"),
        creator_email: formData.get("email"),
    };

    if(
        isInvalidText(recipe.title) ||
        isInvalidText(recipe.summary) ||
        isInvalidText(recipe.instructions) ||
        isInvalidText(recipe.creator) ||
        isInvalidText(recipe.creator_email) ||
        !recipe.creator_email.includes('@')||
        !recipe.image ||
        recipe.image.size === 0
    ){
    return {
            message: 'Invalid input'
        };
    }
    await saveRecipe(recipe);
    revalidatePath('/meals');
    redirect('/meals')
}