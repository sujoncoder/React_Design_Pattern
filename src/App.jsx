import { useState } from 'react';
import IndexAccordian from './components/accordian/IndexAccordian';
import Button from './components/button/Button';
import MultiStepForm from './components/multi-step-form/MultiStepForm';


const App = () => {
  const [formSubmited, setFormSubmited] = useState(false);
  const [cancel, setCancel] = useState(false);

  // HANDLE SUBMIT FUNCTION
  function onSubmit(data) {
    setFormSubmited(true)
  };

  // HANDLE CANCEL FUNCTION
  function onCancel(data) {
    setCancel(true)
  };

  return (
    <section className='bg-slate-100'>

      <h1 className='text-4xl font-bold text-center py-10 text-cyan-500'>
        Frontend System Design
      </h1>


      <Button
        label={"Click Me"}
        disabled={false}
        loading={false}
        onClick={() => console.log("Clicked")}>
        Touch Me
      </Button>

      {/* Accordian */}
      <div className='py-10'>
        <IndexAccordian />
      </div>


      {/* Multi Step Form */}
      <div className='py-10'>
        {formSubmited && <h1 className='text-center text-2xl font-bold text-green-500'>Form Submited Successfully.😎</h1>}

        {!formSubmited && <MultiStepForm onSubmit={onSubmit} onCancel={onCancel} />}

        {cancel && <h1 className='text-center text-2xl font-bold text-red-500'>User want,s to cancel.🔥</h1>}

      </div>
    </section>
  )
}

export default App