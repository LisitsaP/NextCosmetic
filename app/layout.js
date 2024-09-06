import MainHeader from '@/components/main-header/main-header';
import './globals.css';
import MainHeaderBackground from '@/components/main-header/main-header-background';


export const metadata = {
  title: 'NextLevel Cosmetic',
  description: 'Natural cosmetic, shared by community.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <MainHeaderBackground/>
    <MainHeader/>
        {children}
      </body>
    </html>
  );
}
