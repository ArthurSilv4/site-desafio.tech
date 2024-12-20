import { SidebarProvider } from "@/components/ui/sidebar"
import { AuthProvider } from "./auth/AuthContext"
import { ProfileProvaider } from "./profile/ProfileContext"
import { ChallengeProvider } from "./challenge/ChallengeContext"

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthProvider>
      <ProfileProvaider>
        <ChallengeProvider>
          <SidebarProvider>{children}</SidebarProvider>
        </ChallengeProvider>
      </ProfileProvaider>
    </AuthProvider>
  )
}
