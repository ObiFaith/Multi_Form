import { Address, Button, FormHeader, Login, Signup, Tabs, UserInfo } from '..';
import { Remove, Saly_10 } from '../assets';
import { useState } from 'react';
import * as Yup from 'yup'

const Home = () => {
	const [formData, setFormData] = useState({
		login: {},
		signup: {},
		userInfo: {},
		userAddr: {},
	})
	const [step, setStep] = useState(3);
	const [activeTab, setActiveTab] = useState(0);
	const LoginSchema = Yup.object().shape({
		email: Yup.string()
			.email('Invalid email')
			.required('Email address is required'),
		password: Yup.string()
			.min(8, '8+ characters')
			.required('Password is required'),
		newsLetter: Yup.boolean(),
	})

	const SignupSchema = Yup.object().shape({
		newsLetter: Yup.boolean(),
		password: Yup.string().min(8, '8+ characters').required('Password is required'),
		email: Yup.string().email('Invalid email').required('Email address is required'),
	});

	const UserInfoSchema = Yup.object().shape({
		countryCode: Yup.string(),
		gender: Yup.string().required('Select a gender'),
		fullName: Yup.string().required('Full name is required'),
		birthday: Yup.date().max(new Date(), 'Birthday cannot be in the future').typeError('Invalid date'),
		phoneNo: Yup.string().required('Phone number is required').matches(/^\d+$/, 'Invalid phone number'),
	})

	const UserAddrSchema = Yup.object().shape({
		apartment: Yup.string(),
		city: Yup.string().required('City is required'),
		state: Yup.string().required('State is required'),
		zipCode: Yup.string().required('Zip code is required'),
		stressAddr: Yup.string().required('Address is required'),
	})

	return (
		<div className="px-5">
			<div className={`container rounded-3xl shadow-lg max-w-[500px] w-full bg-white ${step !== 4 ? 'pt-4 pb-6 px-6 lg:px-11' : ''}`}>
				{step === 1 && (
					<Tabs activeTab={activeTab} setActiveTab={setActiveTab} imgSrc={Remove}
						config={[
							{ header: 'Register', component: <Signup SignupSchema={SignupSchema} setStep={setStep} /> },
							{ header: 'Login', component: <Login LoginSchema={LoginSchema} /> },
						]}
					/>
				)}
				{step === 2 && (
					<>
						<FormHeader setStep={setStep} header="Personal information" step={step} />
						<UserInfo setStep={setStep} UserInfoSchema={UserInfoSchema} />
					</>
				)}
				{step === 3 && (
					<>
						<FormHeader setStep={setStep} header="Add address" step={step} />
						<Address UserAddrSchema={UserAddrSchema} setStep={setStep} />
					</>
				)}
				{step === 4 && (
					<>
						<div className='relative'>
              <div className="py-36 rounded-t-3xl"  style={{background: `rgba(239, 73, 143, .15) url(${Saly_10}) no-repeat center`}}></div>
							<img className='absolute top-8 right-8 cursor-pointer' src={Remove} alt="Remove Icon" onClick={() => setStep(prevStep => prevStep - 1)} />
						</div>
						<div className="px-[44px] py-12">
              <h1 className="text-3xl font-bold pb-6 md:text-4xl">
                You are successfully registered!
              </h1>
              <div className="" onClick={() => {setActiveTab(1); setStep(1)}}><Button name="Go to Login" /></div>
            </div>
					</>
				)}
			</div>
		</div>
	);
};

export default Home;
