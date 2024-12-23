import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { ButtonSingInSocialMedia } from "@/components/dashboard/buttonsSingInSocialMedia/page"
import { FormsSingIn } from "@/components/dashboard/forms/formsSingIn/page"

const SignIn = () => {
  return (
    <main className="m-auto flex min-h-screen items-center justify-center">
      <Card className="w-full max-w-md text-white">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Login</CardTitle>
          <CardDescription>
            Entre com sua conta para acessar o sistema
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <FormsSingIn />
          <Separator className="my-4" />
          <ButtonSingInSocialMedia />
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-gray-400">
            Não tem uma conta?{" "}
            <Link
              href="/auth/signUp"
              className="text-[#FFDF90] hover:underline"
            >
              Cadastre-se
            </Link>
          </p>
        </CardFooter>
      </Card>
    </main>
  )
}

export default SignIn
