import FooterLandingPage from "@/components/landingPage/layout/footer"
import HeaderLandingPage from "@/components/landingPage/layout/header"
import MainLandingPage from "@/components/landingPage/layout/main"

export default function Home() {
  return (
    <div className="m-auto h-full w-full overflow-hidden">
      <HeaderLandingPage />
      <MainLandingPage />
      <FooterLandingPage />
    </div>
  )
}
