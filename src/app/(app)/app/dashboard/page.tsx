import ContentBlock from '@/components/content-block';
import PetDetails from '@/components/pet-details';
import PetList from '@/components/pet-list';
import SearchForm from '@/components/search-form';
import React from 'react';

function page() {
	return (
		<main>
			<div className='flex items-center justify-between text-white py-8'>
				<section>
					<h1 className='font-medium text-2xl leading-6'>
						Pet<span className='font-semibold'>Soft</span>
					</h1>
					<p className='text-lg opacity-80'>
						Manage your pet daycare with ease
					</p>
				</section>
				<section className='text-center'>
					<p className='text-2xl font-bold leading-6'>2</p>
					<p className='opacity-80'>current guests</p>
				</section>
			</div>
			<div className='grid grid-cols-3 grid-rows-[45px_1fr] gap-4 h-[600px]'>
				<div className='row-start-1 row-span-1 col-start-1 col-span-1'>
					<SearchForm />
				</div>
				<div className='row-start-2 row-span-full col-start-1 col-span-1'>
					<ContentBlock>
						<PetList />
					</ContentBlock>
				</div>
				<div className='row-start-1 row-span-full col-start-2 col-span-full'>
					<ContentBlock>
						<PetDetails />
					</ContentBlock>
				</div>
			</div>
		</main>
	);
}

export default page;
