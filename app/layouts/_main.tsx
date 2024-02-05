import { Link } from '@remix-run/react';
import { ROUTES } from '~/utils/constants';

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <header className="bg-white sticky top-0 px-4 z-50">
        <nav className="container flex justify-between items-center py-4">
          <h1 className="text-2xl font-bold">Starter</h1>
          <ul className="flex space-x-8">
            <li>
              <Link
                to={ROUTES.HOME}
                className="text-black hover:text-purple-900 transition-colors font-normal"
              >
                Home
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="h-[100vh] p-4">{children}</main>
      <hr className="mt-8 container" />
      <footer className="container flex justify-between items-center p-4">
        <p className="text-center text-gray-600">
          Starter &copy; {new Date().getFullYear()}
        </p>
      </footer>
    </>
  );
};

export default MainLayout;
