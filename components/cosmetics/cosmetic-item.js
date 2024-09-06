import Link from 'next/link';
import Image from 'next/image';

import cls from './cosmetic-item.module.css';

export default function CosmeticItem({ title, slug, image, summary, creator }) {
  return (
    <article className={cls.cosmetic}>
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
          <Link href={`/cosmetics/${slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
}