import { Field, Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { Authenticate, Button, InputWithLabel } from '..';

const Login = ({LoginSchema}) => {
	const navigate = useNavigate();
	/* Handle Error for Login */

	return (
		<>
		<div>
			<Authenticate />
			<div>
				<p className="text-black/40">or login with email</p>
				<Formik
					initialValues={{ email: '', password: '', newsLetter: false,}}
					validationSchema={LoginSchema}
					onSubmit={async (values, { setSubmitting }) => {
						setSubmitting(false);
						navigate('/dashboard');
					}}
				>
					{() => (
						<Form className="pb-20">
							<InputWithLabel label="Email address" type="email" name="email" />
							<InputWithLabel label="Password" type="password" name="password" />
							<Button name="Login to Dashboard" />
							<div className="pt-4">
								<Field name="newsLetter" type="checkbox" />
								<label htmlFor="newsLetter" className="pl-3">Remember me</label>
							</div>
						</Form>
					)}
				</Formik>
			</div>
		</div>
		</>
	);
};

export default Login;
