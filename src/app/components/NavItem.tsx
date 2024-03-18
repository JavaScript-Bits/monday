interface NavItemProps {
    children: React.ReactNode;
  }
  
  const NavItem: React.FC<NavItemProps> = ({ children }) => (
    <li>{children}</li>
  );
  
  export default NavItem;
  