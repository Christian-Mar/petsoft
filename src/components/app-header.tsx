"use client";
import Link from 'next/link';
import Logo from './Logo';
import { usePathname } from 'next/navigation';

const routes = [
	{
		label: 'Dashboard',
		path: '/app/dashboard',
	},
	{
		label: 'Account',
		path: '/app/account',
	},
];

function AppHeader() {
  const activePathname = usePathname();
	return (
		<header className='flex justify-between items-center border-b border-white/10'>
			<Logo />
			<nav>
				<ul className='flex gap-2 text-xs'>
					{routes.map(route => (
						<li key={route.path}>
							<Link href={route.path} className={cn("text-white/70  rounded-smpx-2 py-1 hover:text-white focus:text-white transition", {"bg-black/10 text-white": route.path === activePathname, })}>{route.label}</Link>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
}

export default AppHeader;
