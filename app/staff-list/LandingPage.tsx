import React from 'react';
import Navbar from '../component/Navbar';
import Timebar from '../component/Timebar';
import StaffList from '../component/StaffList';
const LandingPage = () => {
  return (
    <div  style={{width: '100%',height: 'calc(100vh - 50px)'}}>
      <section className='flex-column' style={{height: '100%'}}>
				<Navbar/>
				<div className='flex-column flex-strech' style={{overflow: 'hidden', height: '100%'}}>
					<section className='page-container flex-row' style={{height: '100%',display: 'flex'}}>
						<Timebar />
						<StaffList />
					</section>
				</div>
			</section>
    </div>
  );
};

export default LandingPage;