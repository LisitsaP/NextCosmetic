import Link from 'next/link';
import Image from 'next/image';

import cls from './meal-item.module.css';

export default function MealItem({ title, slug, image, summary, creator }) {
  return (
    <article className={cls.meal}>
      <header>
        <div className={cls.image}>
          <Image src={image} alt={title} fill />
        </div>
        <div className={cls.headerText}>
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>
      <div className={cls.content}>
        <p className={cls.summary}>{summary}</p>
        <div className={cls.actions}>
          <Link href={`/meals/${slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
}