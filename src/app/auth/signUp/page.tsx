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
import { FormsSingUp } from "@/components/dashboard/forms/formsSingUp/page"

export default function SignUp() {
  return (
    <div className="m-auto flex min-h-screen items-center justify-center">
      <Card className="w-full max-w-md text-white">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Criar uma conta</CardTitle>
          <CardDescription>
            Preencha os dados abaixo para se cadastrar
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <FormsSingUp />

          <Separator className="my-4" />

          <ButtonSingInSocialMedia />
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-gray-400">
            Já tem uma conta?{" "}
            <Link
              href="/auth/signIn"
              className="text-[#FFDF90] hover:underline"
            >
              Faça login
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}
