import { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

const page = {
    Step1: 1,
    Step2: 2,
    Step3: 3,
};

const FINAL_STEP = page.Step3;

const MultiStepForm = ({ onSubmit = () => { }, onCancel = () => { } }) => {
    const [currentStep, setCurrentStep] = useState(page.Step1);

    const [inputs, setInputs] = useState({
        step1: {
            name: "",
            email: ""
        },
        step2: {
            phone: "",
            city: ""
        },
        step3: {
            sallery: "",
            bank: ""
        },
    });

    const Steps = {
        [page.Step1]: Step1,
        [page.Step2]: Step2,
        [page.Step3]: Step3,
    };

    const Component = Steps[currentStep];

    const submitButtonText = FINAL_STEP === currentStep ? "Save" : "Next";


    // HANDLE NEXT FUNCTION
    function handleNext(e) {
        e.preventDefault();
        if (currentStep === page.Step1) {
            setCurrentStep(currentStep + 1)
        } else if (currentStep === page.Step2) {
            setCurrentStep(currentStep + 1)
        } else {
            console.log("Submit Data");
            onSubmit(inputs)
        }
    };

    // HANDLE PREVIOUS FUNCTION
    function handlePrev() {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    // HANDLE INPUT CHANGE
    function handleInputChange({ stepKey, value, inputKey }) {
        const oldInput = structuredClone(inputs);
        oldInput[stepKey][inputKey] = value;
        setInputs(oldInput);
    };

    const inputToSend = inputs[`step${currentStep}`];
    console.log(inputToSend);

    return (
        <section className='flex justify-center items-center'>
            <form action="" className='w-[500px]'>
                <Component
                    stepKey={`step${currentStep}`}
                    onChange={handleInputChange}
                    inputs={inputToSend} />

                <div className='flex justify-between items-center space-x-4 py-6'>

                    {
                        currentStep > page.Step1 ? <ChevronLeft
                            onClick={handlePrev}
                            className='cursor-pointer bg-blue-500 p-0.5 rounded-full text-white text-lg' />
                            :
                            <ChevronLeft
                                onClick={handlePrev}
                                disabled
                                className="bg-slate-300 p-0.5 rounded-full text-white text-lg" />
                    }

                    <div className='space-x-4'>
                        <button
                            onClick={onCancel}
                            type='button'
                            className='bg-blue-500 rounded px-4 py-2 text-white font-semibold text-lg active:bg-blue-600'>
                            Cancel
                        </button>

                        <button
                            onClick={handleNext}
                            type='button'
                            className='bg-blue-500 rounded px-4 py-2 text-white font-semibold text-lg active:bg-blue-600'>
                            {submitButtonText}
                        </button>
                    </div>
                </div>
            </form>
        </section>
    )
};

export default MultiStepForm;