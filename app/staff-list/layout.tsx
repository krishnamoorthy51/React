import Timebar from '../component/Timebar';
import Navbar from '../component/Navbar';
export default function UserPanelLayout({children}: {children: React.ReactNode}) {
	
	const toggleSubmenuVariant = () => {
		console.log('Clicked');
	}

	return (
		<>
			<section className='flex-column' style={{height: '100%'}}>
				<Navbar/>
				<div className='flex-column flex-strech' style={{overflow: 'hidden', height: '100%'}}>
					<section className='page-container flex-row'>
						<Timebar />
						<div className='page-content flex-row'>{children}</div>
					</section>
				</div>
			</section>
			
		</>
		
	)
}