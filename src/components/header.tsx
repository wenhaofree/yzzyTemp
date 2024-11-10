import Link from 'next/link';
import type { Route } from 'next';

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href={'/' as Route} className="text-xl font-bold">
            Your Logo
          </Link>
          <ul className="flex items-center gap-6">
            <li>
              <Link href={'/' as Route} className="hover:text-gray-600">
                Home
              </Link>
            </li>
            <li>
              <Link href={'/about' as Route} className="hover:text-gray-600">
                About
              </Link>
            </li>
            <li>
              <Link href={'/contact' as Route} className="hover:text-gray-600">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
} 