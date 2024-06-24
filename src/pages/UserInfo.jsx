import * as Yup from 'yup';
import { Info } from '../assets';
import { Button, InputWithLabel } from '..';
import { countryCodes } from '../constants/data';
import { ErrorMessage, Field, Form, Formik } from 'formik';

const UserInfo = ({ setStep, userInfoSchema }) => {
	return (
		<div className="pt-12 pb-6">
			<Formik
				initialValues={{
					fullName: '',
					gender: '',
					phoneNo: '',
					birthday: '',
				}}
				validationSchema={userInfoSchema}
				onSubmit={(values, { setSubmitting }) => {
					setSubmitting(false);
					setStep(prevStep => prevStep + 1);
				}}
			>
				{({ setFieldValue, values }) => (
					<Form>
						<InputWithLabel
							placeholder="Full name"
							type="text"
							name="fullName"
						/>
						<div className="pt-5 pb-6">
							<div className="flex gap-3">
								<label htmlFor="gender">Gender:</label>
								<div className="flex gap-2">
									<label
										className="flex gap-1"
										htmlFor="male"
									>
										<Field
											type="radio"
											name="gender"
											value="male"
										/>
										Male
									</label>
									<label
										htmlFor="female"
										className="flex gap-1"
									>
										<Field
											type="radio"
											name="gender"
											value="female"
										/>
										Female
									</label>
								</div>
							</div>
							<ErrorMessage
								className="text-error text-sm pt-1"
								name="gender"
								component="p"
							/>
						</div>
						<p className="flex gap-2 text-sm text-black/65 font-bold">
							<img src={Info} alt="Info Icon" /> The phone number
							and birthday are only visible to you
						</p>
						<div className="flex gap-4">
							<div className="pt-5 min-w-24">
								<Field
									className="border-style px-3"
									as="select"
									name="countryCode"
								>
									{countryCodes.map(({ code }) => (
										<option
											key={code}
											label={code}
											value={code}
										/>
									))}
								</Field>
							</div>
							<div className="w-full">
								<InputWithLabel
									className="border-style px-3 mt-5"
									inputMode="numeric"
									name="phoneNo"
									type="number"
								/>
								<ErrorMessage
									className="text-error text-sm pt-1"
									name="phoneNo"
									component="p"
								/>
							</div>
						</div>
						<div className="pt-5">
							<div className='relative'>
								<Field name="birthday">
									{({ field }) => (
										<input
											type="text"
											{...field}
											className="input px-3 indent-0"
											placeholder="Birthday"
											onFocus={e =>
												(e.target.type = 'date')
											}
											onBlur={e => {
												if (!e.target.value)
													e.target.type = 'text';
											}}
											value={values.birthday}
											onChange={e =>
												setFieldValue(
													'birthday',
													e.target.value
												)
											}
										/>
									)}
								</Field>
								<p className='absolute top-3 right-10 text-black/65'>Optional</p>
								<ErrorMessage
									className="text-error text-sm pt-1"
									name="birthday"
									component="p"
								/>
							</div>
							<p className="text-sm text-black/65 pt-1">
								Let us know about your birthday so as not to
								miss a gift
							</p>
						</div>
						<div className="pt-9">
							<Button name="Save information" />
						</div>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default UserInfo;
