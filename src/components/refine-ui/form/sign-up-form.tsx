"use client";

import { useState } from "react";

import { InputPassword } from "@/components/refine-ui/form/input-password";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import {
  useLink,
  useNotification,
  useRefineOptions,
  useRegister,
} from "@refinedev/core";

import UploadWidget from "@/components/upload-widget";
import { UploadWidgetValue } from "@/types";

export const SignUpForm = () => {
  const [name, setName] = useState(""); // ✅ NEW
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("student"); // ✅ NEW
  const [image, setImage] = useState<UploadWidgetValue | null>(null);
  const { open } = useNotification();
  const Link = useLink();
  const { title } = useRefineOptions();
  const { mutate: register } = useRegister();

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      open?.({
        type: "error",
        message: "Passwords don't match",
        description:
          "Please make sure both password fields contain the same value.",
      });
      return;
    }

    register({
      name, // ✅ REQUIRED
      email,
      password,
      role, // ✅ matches backend additionalFields
      imageCldPubId: image?.publicId || null, // ✅ IMPORTANT
    });
  };

  const handleSignUpWithGoogle = () => {
    register({
      providerName: "google",
    });
  };

  const handleSignUpWithGitHub = () => {
    register({
      providerName: "github",
    });
  };

  return (
    <div
      className={cn(
        "flex",
        "flex-col",
        "items-center",
        "justify-center",
        "px-6",
        "py-8",
        "min-h-svh",
      )}
    >
      <div className={cn("flex", "items-center", "justify-center", "gap-2")}>
        {title.icon && (
          <img
            src="/favicon.ico"
            alt="EduManager Logo"
            className="w-52 h-36 object-contain"
          />
        )}
      </div>

      <Card className={cn("sm:w-[456px]", "p-12", "mt-6")}>
        <CardHeader className={cn("px-0")}>
          <CardTitle
            className={cn(
              "text-green-600",
              "dark:text-green-400",
              "text-3xl",
              "font-semibold",
            )}
          >
            Sign up
          </CardTitle>
          <CardDescription
            className={cn("text-muted-foreground", "font-medium")}
          >
            Welcome to EduManager
          </CardDescription>
        </CardHeader>

        <Separator />

        <CardContent className={cn("px-0")}>
          <form onSubmit={handleSignUp}>
            {/* ✅ NAME */}
            <div className={cn("flex", "flex-col", "gap-2")}>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* ✅ EMAIL */}
            <div className={cn("flex", "flex-col", "gap-2", "mt-6")}>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* ✅ ROLE */}
            <div className={cn("flex", "flex-col", "gap-2", "mt-6")}>
              <Label htmlFor="role">Role</Label>
              <select
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="border p-2 rounded bg-background"
              >
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
                <option value="admin">Admin</option>
              </select>
            </div>

            {/* PASSWORD */}
            <div
              className={cn("relative", "flex", "flex-col", "gap-2", "mt-6")}
            >
              <Label htmlFor="password">Password</Label>
              <InputPassword
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* CONFIRM PASSWORD */}
            <div
              className={cn("relative", "flex", "flex-col", "gap-2", "mt-6")}
            >
              <Label htmlFor="confirmPassword">Confirm password</Label>
              <InputPassword
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            {/* ✅ PROFILE IMAGE */}
            <div className={cn("flex", "flex-col", "gap-2", "mt-6")}>
              <Label>Profile Image</Label>
              <UploadWidget
                value={image}
                onChange={(value) => setImage(value)}
              />
            </div>

            {/* SUBMIT */}
            <Button
              type="submit"
              size="lg"
              className={cn(
                "w-full",
                "mt-6",
                "bg-green-600",
                "hover:bg-green-700",
                "text-white",
              )}
            >
              Sign up
            </Button>

            {/* OR */}
            <div className={cn("flex", "items-center", "gap-4", "mt-6")}>
              <Separator className={cn("flex-1")} />
              <span className={cn("text-sm", "text-muted-foreground")}>or</span>
              <Separator className={cn("flex-1")} />
            </div>

            {/* SOCIAL LOGIN */}
            <div className={cn("flex", "flex-col", "gap-4", "mt-6")}>
              <div className={cn("grid grid-cols-2", "gap-6")}>
                <Button
                  variant="outline"
                  onClick={handleSignUpWithGoogle}
                  type="button"
                >
                  Google
                </Button>
                <Button
                  variant="outline"
                  onClick={handleSignUpWithGitHub}
                  type="button"
                >
                  GitHub
                </Button>
              </div>
            </div>
          </form>
        </CardContent>

        <Separator />

        <CardFooter>
          <div className={cn("w-full", "text-center text-sm")}>
            <span className={cn("text-muted-foreground")}>
              Have an account?{" "}
            </span>
            <Link to="/login" className="text-blue-600 font-semibold underline">
              Sign in
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

SignUpForm.displayName = "SignUpForm";
