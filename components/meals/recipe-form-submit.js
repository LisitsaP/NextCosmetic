'use client';
import {useFormStatus} from 'react-dom';

export default function RecipeFormSubmit(){
    const {pending} = useFormStatus();

    return <button disabled={pending}>
        {pending ? "Submitting...": "Share recipe"}
    </button>
}