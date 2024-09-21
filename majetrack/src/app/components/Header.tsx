import React from "react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./ModeToggle";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function Header() {
  const { user } = useUser();

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center center-normal">
        <h1 className="text-2xl font-bold">InvestTrack</h1>
        {user && <p>{user.name}</p>}
        <div>
            <Button asChild className="mr-2">
            {user ? <a href="/api/auth/logout">Logout</a> : <a href="/api/auth/login">Log In</a>}
            </Button>
          <ModeToggle/>
        </div>
      </div>
    </header>
  );
}
