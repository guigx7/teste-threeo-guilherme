/**
 * v0 by Vercel.
 * @see https://v0.dev/t/YQUhX5uYNSV
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Register() {
  return (
    <div className="flex items-center justify-center min-h-[100dvh] px-4 py-12">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">Register</h2>
        </div>
        <form className="space-y-4">
          <div>
            <Label htmlFor="name">Username</Label>
            <Input id="name" placeholder="Enter your username" required type="text" />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="Enter your email" required type="email" />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input id="password" placeholder="Enter your password" required type="password" />
          </div>
          <Button className="w-full" type="submit">
            Register
          </Button>
          <div className="text-center text-sm text-gray-600 dark:text-gray-400">
            <span>Already have an account? </span>
            <a className="font-medium text-blue-600 hover:underline dark:text-blue-500" href="#">
              Sign in
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}