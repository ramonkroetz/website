import ProfileSection from '@/components/Home/ProfileSection'
import PicturesSection from '@/components/Home/PicturesSection'
import HrBranch from '@/components/Home/HrBranch'
import SpotifySection from '@/components/Home/SpotifySection'

export const metadata = {
  icons: {
    icon: '../assets/images/ramon.jpg',
  },
}

export default async function Home() {
  return (
    <>
      <ProfileSection />
      <HrBranch />
      <PicturesSection />
      {/* @ts-expect-error Server Component */}
      <SpotifySection />
    </>
  )
}
