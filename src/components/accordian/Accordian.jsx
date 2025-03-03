import { useState } from 'react';
import { ChevronsUpDown } from 'lucide-react';
import { Triangle } from 'lucide-react';


const Accordian = ({ heading, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    function handleOpen() {
        setIsOpen(!isOpen)
    };

    return (
        <section>
            <div className='flex justify-between bg-blue-400 p-2 rounded text-white'>
                <span className='text-xl text-white'>{heading}</span>
                {
                    isOpen ? <Triangle onClick={handleOpen} /> : <ChevronsUpDown onClick={handleOpen} />
                }
            </div>

            {isOpen && children}
        </section>
    )
}

export default Accordian;