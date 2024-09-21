"use client"

import { MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { resolvedTheme: currentTheme, setTheme } = useTheme();

  return (
    <Button className="absolute" variant="outline" size="icon" onClick={() => setTheme(currentTheme === "light" ? "dark" : "light")}>
      <SunIcon className="absolute scale-100 dark:scale-0" />
      <MoonIcon className="absolute scale-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
