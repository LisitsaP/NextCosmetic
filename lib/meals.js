import fs from 'node:fs';

import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';


const db =sql('recipes.db');

export async function getRecipe(){
    await new Promise((resolve)=> setTimeout(resolve, 2000));
    // throw new Error('Loading meals failed')
    return db.prepare('SELECT * FROM recipes').all();
}

export function getRecipes(slug){
    return db.prepare('SELECT * FROM recipes WHERE slug = ?').get(slug);
}

export async function saveRecipe(recipe){
recipe.slug = slugify(recipe.title, {lower: true});
recipe.instructions = xss(recipe.instructions);

const extension = recipe.image.name.split('.').pop();
const fileName = `${recipe.slug}.${extension}`;

const stream = fs.createWriteStream(`public/images/${fileName}`)
const bufferedImage = await recipe.image.arrayBuffer();

stream.write(Buffer.from(bufferedImage), (error)=> {
    if(error){
        throw new Error('Saving image failed');
    }
});

    recipe.image = `/images/${fileName}`

    db.prepare(`
    INSERT INTO recipes
    (title, summary, instructions, creator, creator_email, image, slug)
    VALUES(
        @title,
        @summary,
        @instructions,
        @creator,
        @creator_email,
        @image,
        @slug
    )
    `).run(recipe);
}