import { auth } from '@/lib/auth';
import { LogoutButton } from '../AuthButtons';
import { pages } from '../pages';
import NavLink from './Navlink';

const Navbar = async () => {
  const session = await auth();

  return session?.user ? (
    <header className="flex sticky items-center top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex w-full h-14 container justify-between">
        <div className="mr-4 flex items-center">
          <nav className="flex items-end space-x-6 text-md font-medium">
            {pages.map((page) => (
              <NavLink key={page.path} href={page.path} name={page.name} />
            ))}
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
