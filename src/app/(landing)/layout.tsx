import { Metadata } from 'next';
import Footer from '@/components/ui/tempFooter';
import Navbar from '@/components/ui/tempNavbar';
import { Toaster } from '@/components/ui/tempToasts/toaster';
import { PropsWithChildren, Suspense } from 'react';
import { getURL } from '@/utils/helpers';

const title = 'Qwizard';
const description = 'Flashcards and studying powered by AI';

export const metadata: Metadata = {
  metadataBase: new URL(getURL()),
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description
  }
};

export default async function RootLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Navbar />
      <main
        id="skip"
        className="min-h-[calc(100dvh-4rem)] md:min-h[calc(100dvh-5rem)]"
      >
        {children}
      </main>
      <Footer />
      <Suspense>
        <Toaster />
      </Suspense>
    </>
  );
}
