import ContentBlock from '@/components/content-block';
import PetDetails from '@/components/pet-details';
import PetList from '@/components/pet-list';
import SearchForm from '@/components/search-form';
import React from 'react';

export default async function Page() {

  
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
			<div className='grid md:grid-cols-3 md:grid-rows-[45px_1fr] grid-rows-[45px_300px_500px] gap-4 md:h-[600px]'>
				<div className='md:row-start-1 md:row-span-1 md:col-start-1 md:col-span-1'>
					<SearchForm />
				</div>
				<div className='md:row-start-2 md:row-span-full md:col-start-1 md:col-span-1'>
					<ContentBlock>
						<PetList />
					</ContentBlock>
				</div>
				<div className='md:row-start-1 md:row-span-full md:col-start-2 md:col-span-full'>
					<ContentBlock>
						<PetDetails />
					</ContentBlock>
				</div>
			</div>
		</main>
	);
}


