import React from 'react';
import { Button } from "@/components/ui/button"
import { ModeToggle } from './ModeToggle';

export default function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">InvestTrack</h1>
        <div>
          <Button variant="outline" className="mr-2">Sign Up</Button>
          <Button>Log In</Button>
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}