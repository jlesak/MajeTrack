import React from "react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./ModeToggle";
import { Claims } from "@auth0/nextjs-auth0";

export default function Header({ user }: Claims) {
  console.log(user);

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center center-normal">
        <h1 className="text-2xl font-bold">InvestTrack</h1>
        <p>{user.name}</p>
        <div>
          <Button asChild className="mr-2">
            <a href="/api/auth/logout">Logout</a>
          </Button>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
