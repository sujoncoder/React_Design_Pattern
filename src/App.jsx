import IndexAccordian from './components/accordian/IndexAccordian';
import Button from './components/button/Button';
import MultiStepForm from './components/multi-step-form/MultiStepForm';
import Wrapper from './components/Wrapper';


const App = () => {

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
        <MultiStepForm />
      </div>
    </section>
  )
}

export default App