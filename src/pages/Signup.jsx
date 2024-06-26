import { Field, Form, Formik } from 'formik';
import { Authenticate, Button, InputWithLabel } from '..';
import { useAuth } from '../contexts/auth';

const Signup = ({ setStep, SignupSchema }) => {
	const {signup, isLoading} = useAuth()

	return (<>
		<div>
			<Authenticate />
			<div>
				<p className="text-black/40">or register with email</p>
				<Formik
					initialValues={{ email: '', password: '', newsLetter: false }}
					validationSchema={SignupSchema}
					onSubmit={(values, { setSubmitting }) => {
						signup(values.email, values.password)
						setSubmitting(false);
						if (isLoading) setStep(prevStep => prevStep + 1);
					}}
				>
					{({isSubmitting}) => (
						<Form>
							<InputWithLabel label="Email address" type="email" name="email" />
							<InputWithLabel label="Password" type="password" name="password" />
							<Button name={isSubmitting ? 'Create account...' : 'Create account'} />
							<div className="pt-4">
								<Field name="newsLetter" type="checkbox" />
								<label htmlFor="newsLetter" className="pl-3">Send me news and promotions</label>
							</div>
						</Form>
					)}
				</Formik>
				<p className="text-black/40 text-sm pt-10 max-md:text-xs text-center mx-auto w-3/4">
					By continuing I agree with the<span className="text-primary/80">Terms & Conditions, Privacy Policy</span>
				</p>
			</div>
		</div>
	</>);
};

export default Signup;