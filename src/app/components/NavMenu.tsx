import React from 'react';

// Define an interface for the NavMenu props
interface NavMenuProps {
  isNavOpen: boolean;
  navItems: string[];
}
interface NavItemProps {
    itemName: string;
  }
  
  // Use the interface with the component's function signature
  const NavItem: React.FC<NavItemProps> = ({ itemName }) => {
    // Implementation of NavItem...
    return <li>{itemName}</li>;
  };
  

// Use the interface with the component's function signature
const NavMenu: React.FC<NavMenuProps> = ({ isNavOpen, navItems }) => {
  return (
    <nav className={`${isNavOpen ? 'block' : 'hidden'} md:block transition-transform duration-1000 ease-in-out transform ${isNavOpen ? "translate-x-0" : "-translate-x-full"}`}>
      <ul className="flex flex-col gap-4 border md:border-none p-4 md:p-0 md:flex-row w-full items-center md:bg-none md:gap-6 text-lg">
        {navItems.map(item => (
          // Ensure NavItem also accepts a prop named itemName of type string
          <NavItem key={item} itemName={item} />
        ))}
      </ul>
    </nav>
  );
};

export default NavMenu;
