'use client';

import { useState } from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

export default function Navbar() {
  // State to manage mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the visibility of the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <NavigationMenu className="text-foreground bg-background">
      <NavigationMenuList className="w-full rounded-md flex flex-col md:flex-row justify-between items-center p-4 bg-popover text-popover-foreground">
        {/* Menu item for mobile, typically a hamburger icon */}
        <NavigationMenuItem className="md:hidden">
          <NavigationMenuTrigger
            onClick={toggleMenu}
            className="cursor-pointer hover:bg-primary"
          >
            <span className="material-icons p-4">menu</span>
          </NavigationMenuTrigger>
        </NavigationMenuItem>

        {/* Dropdown for mobile */}
        {isMenuOpen && (
          <div className="flex flex-col md:hidden bg-card rounded-lg shadow-md mt-4">
            {renderMenuItems()}
          </div>
        )}

        {/* Visible on larger screens */}
        <div className="hidden md:flex space-x-4">{renderMenuItems()}</div>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

// Helper function to render menu items consistently
function renderMenuItems() {
  return (
    <>
      <NavigationMenuItem>
        <NavigationMenuTrigger className="hover:bg-secondary rounded py-2 px-4">
          Form
        </NavigationMenuTrigger>
        <NavigationMenuContent className="bg-card shadow-lg rounded-md py-4 px-4 mt-1 border border-border min-w-max">
          <NavigationMenuLink
            href="/Form"
            className="block py-2 px-4 hover:bg-accent rounded-md text-accent-foreground transition duration-150 ease-in-out whitespace-nowrap"
          >
            Form 1
          </NavigationMenuLink>
          <NavigationMenuLink
            href="/feature2"
            className="block py-2 px-4 hover:bg-accent rounded-md text-accent-foreground transition duration-150 ease-in-out whitespace-nowrap"
          >
            Feature 2
          </NavigationMenuLink>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuTrigger className="hover:bg-secondary rounded py-2 px-4">
          Pricing
        </NavigationMenuTrigger>
        <NavigationMenuContent className="bg-card shadow-lg rounded-md py-4 px-4 mt-1 border border-border min-w-max">
          <NavigationMenuLink
            href="/pricing"
            className="block py-2 px-4 hover:bg-accent rounded-md text-accent-foreground transition duration-150 ease-in-out whitespace-nowrap"
          >
            View Pricing
          </NavigationMenuLink>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuTrigger className="hover:bg-secondary rounded py-2 px-4">
          About
        </NavigationMenuTrigger>
        <NavigationMenuContent className="bg-card shadow-lg rounded-md py-4 px-4 mt-1 border border-border min-w-max">
          <NavigationMenuLink
            href="/about"
            className="block py-2 px-4 hover:bg-accent rounded-md text-accent-foreground transition duration-150 ease-in-out whitespace-nowrap"
          >
            Learn More
          </NavigationMenuLink>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </>
  );
}
