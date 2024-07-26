import { auth } from '@/lib/auth';
import { LogoutButton } from '../AuthButtons';
import NavLink from './Navlink';

const Navbar = async () => {
  const session = await auth();

  return session?.user ? (
    <header className="flex sticky items-center top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex w-full h-14 container justify-between">
        <div className="mr-4 flex items-center">
          <nav className="flex items-end space-x-6 text-md font-medium">
            <NavLink href="/" name="Home" />
            <NavLink href="/boss" name="Boss" />
            <NavLink href="/talisman" name="Talismans" />
            <NavLink href="/armor" name="Armures" />
            <NavLink href="/spell" name="Sorts" />
            <NavLink href="/weapon" name="Armes" />
            <NavLink href="/shield" name="Boucliers" />
            <NavLink href="/asheOfWar" name="Cendres de guerre" />
            <NavLink href="/spiritAshe" name="Invocations" />
            <NavLink href="/cookBook" name="Manuels" />
            <NavLink href="/whetBlade" name="Other" />
          </nav>
        </div>
        <div className="flex items-center">
          <LogoutButton />
        </div>
      </div>
    </header>
  ) : null;
};

export default Navbar;
