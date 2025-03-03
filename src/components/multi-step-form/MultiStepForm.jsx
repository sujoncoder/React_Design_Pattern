import React from 'react'
import PersonalInfo from './PersonalInfo';
import ContactInfo from './ContactInfo';
import FinancialInformation from './FinancialInformation';

const MultiStepForm = () => {
    return (
        <section>
            <form action="">
                <PersonalInfo />
                <ContactInfo />
                <FinancialInformation />
            </form>

            <div className='flex justify-center items-center space-x-4 py-10'>
                <button className='bg-blue-500 rounded px-4 py-2 text-white'>Cancel</button>
                <button className='bg-blue-500 rounded px-4 py-2 text-white'>Submit</button>
            </div>
        </section>
    )
};

export default MultiStepForm