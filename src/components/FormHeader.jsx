import { Remove } from "../assets"

const FormHeader = ({step, header, setStep}) => {
  return (
  <div className="flex justify-between items-center">
    <div className="flex gap-6 items-center">
      <h2>{header}</h2>
      <p className='font-bold text-success'>{step} of 3</p>
    </div>
    <div className='cursor-pointer'>
      <img  onClick={() => setStep(prevStep => prevStep - 1)} src={Remove} alt="Remove Icon" />
    </div>
  </div>
  )
}

export default FormHeader