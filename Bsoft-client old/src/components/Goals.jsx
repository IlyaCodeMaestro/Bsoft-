import { goalsList } from './Constants';

const Goals = () => {
	return (
		<section className='goals container-full xl:container mx-auto transition-all duration-300 flex md:flex-row gap-10 p-2 md:p-10 lg:flex-nowrap flex-wrap'>
			{goalsList.map((item, index) => (
				<div
					key={index}
					className='relative flex flex-col p-10 gap-4 bg-center bg-cover hover:-translate-y-5 transition-all duration-700 hover:shadow-white shadow-lg'
					style={{ backgroundImage: `url(${item.img})` }}
				>
					<h4 className='font-bold text-2xl'>{item.title}</h4>
					<p className='text-sm'>{item.text}</p>
				</div>
			))}
		</section>
	);
};

export default Goals;
