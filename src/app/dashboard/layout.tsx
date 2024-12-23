import { FooterDashboard } from "@/components/dashboard/layout/footer"
import HeaderDashboard from "@/components/dashboard/layout/header"
import AppSideBar from "@/components/dashboard/sideBar/page"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <AppSideBar />
      <div className="m-auto h-full w-full overflow-hidden">
        <HeaderDashboard />
        {children}
        <FooterDashboard />
      </div>
    </>
  )
}
