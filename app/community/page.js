import Image from 'next/image';

import cosmeticIcon from '@/assets/icons/cosmetic.png';
import communityIcon from '@/assets/icons/community.png';
import eventsIcon from '@/assets/icons/events.png';
import cls from './page.module.css';

export default function CommunityPage() {
  return (
    <>
    <header className={cls.header}>
      <h1>
        One shared passion: <span className={cls.highlight}>Natural cosmetic</span>
      </h1>
      <p>Join our community and share your favorite cosmetic recipes!</p>
    </header>
    <main className={cls.main}>
      <h2>Community Perks</h2>

      <ul className={cls.perks}>
        <li>
          <Image src={cosmeticIcon} alt="Cosmetic" />
          <p>Share & discover recipes</p>
        </li>
        <li>
          <Image src={communityIcon} alt="A crowd of people" />
          <p>Find new friends & like-minded people</p>
        </li>
        <li>
          <Image
            src={eventsIcon}
            alt="A crowd of people"
          />
          <p>Participate in exclusive events</p>
        </li>
      </ul>
    </main>
  </>
  )
}
