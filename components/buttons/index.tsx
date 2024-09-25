"use client";

import { AuthButtonProps, ProviderButtonProps } from "@/types";
import { auth } from "@/auth";
import { handleSignOut } from "@/actions/sign-out";
import { useRouter } from "next/navigation";

const AuthButton = ({ text, type, loading }: AuthButtonProps) => {
  return (
    <button className="auth-button" type={type}>
      {text}
      {loading && <div className="loader">loading</div>}
    </button>
  );
};

const LogOutButton = async () => {
  const session = await auth();
  return (
    <div>
      <form
        action={async () => {
          await handleSignOut();
        }}
        className="nav-button"
      >
        <button type="submit" className="nav-button-border">
          Log Out
        </button>
      </form>
    </div>
  );
};

const SignInButton = () => {
  const router = useRouter();
  return (
    <div className="nav-button">
      <button
        onClick={() => router.push("/auth/signin")}
        className="nav-button-border"
      >
        Sign In
      </button>
    </div>
  );
};

const ProviderButton = ({ name, handleClick }: ProviderButtonProps) => {
  return (
    <button onClick={handleClick} className="provider-button">
      Continue with {name}
    </button>
  );
};

export { AuthButton, LogOutButton, ProviderButton, SignInButton };
