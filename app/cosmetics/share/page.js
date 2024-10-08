'use client'
import ImagePicker from '@/components/cosmetics/image-picker';
import { useFormState } from 'react-dom'
import classes from './page.module.css';
import { shareRecipe } from '@/lib/actions';
import RecipeFormSubmit from '@/components/cosmetics/recipe-form-submit';

export default function ShareCosmeticPage() {
   const [state, formAction]= useFormState( shareRecipe, {message: null});
  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite cosmetic recipe</span>
        </h1>
        <p>Or any other recipe you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={formAction}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </p>
         <ImagePicker label="Your image" name="image"/>
         {state.message && <p>{state.message}</p>}
          <p className={classes.actions}>
            <RecipeFormSubmit type='submit'/>

          </p>
        </form>
      </main>
    </>
  );
}