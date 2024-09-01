import AppFooter from '@/components/app-footer';
import AppHeader from '@/components/app-header';
import BackgroundPattern from '@/components/background-pattern';
import React from 'react';

function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<BackgroundPattern />
			<div className='flex flex-col max-w-[1050px] mx-auto px-4 min-h-screen'>
				<AppHeader />
				{children}
				<AppFooter />
			</div>
		</>
	);
}

export default Layout;
// this layout goes also through the rootlayout
