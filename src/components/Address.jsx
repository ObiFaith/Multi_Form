import { useState } from 'react';
import { Form, Formik } from 'formik';
import { BtnSm, Button, InputWithLabel } from '..';
import { Dollar, Pin, search, Time, Users } from '../assets';

const Address = ({ setStep, UserAddrSchema }) => {
	const [addManual, setAddManual] = useState(false);

	return (
		<div className="pt-12 pb-10">
			{!addManual ? (
				<>
					<Formik>
						{() => (
							<Form>
								<div className="relative">
									<img className="absolute top-5 left-4 z-10" src={search} alt="Search Icon" />
									<InputWithLabel className="pl-8" placeholder="Search for address" type="text" name="searchAddr" />
								</div>
								<p className="text-[13px] text-black/65 pt-1">Your address is not visible to other users</p>
							</Form>
						)}
					</Formik>
					<div className="flex max-sm:flex-col gap-2 pt-8 pb-32">
						<div><BtnSm name="Use current location" icon={Pin} /></div>
						<div onClick={() => setAddManual(!addManual)}><BtnSm name="Add manually" /></div>
					</div>
					<div>
						<h3 className="text-xl text-black/85 font-bold pb-4">Sharing your address shows:</h3>
						<div className="grid gap-3">
							<div className="flex gap-2">
								<img src={Users} alt="Users Icon" />
								<span className="text-black/65">People near you</span>
							</div>
							<div className="flex gap-2">
								<img src={Time} alt="Time Icon" />
								<span className="text-black/65">Estimated delivery time</span>
							</div>
							<div className="flex gap-2">
								<img src={Dollar} alt="Dollar Icon" />
								<span className="text-black/65">Estimate shipping costs</span>
							</div>
						</div>
					</div>
				</>
			) : (
				<div>
					<Formik
						initialValues={{ state: '', city: '', zipCode: '', stressAddr: '' }}
						validationSchema={UserAddrSchema}
						onSubmit={(values, { setSubmitting }) => {
							setSubmitting(false);
							setStep(prevStep => prevStep + 1);
						}}
					>
						{() => (
							<Form>
								<InputWithLabel label="Street adress" type="text" name="stressAddr" />
								<InputWithLabel type="text" name="apartment" optional={true} placeholder='Apartment' />
								<InputWithLabel label="City" type="text" name="city" />
								<div className="flex gap-4 *:w-full">
									<div><InputWithLabel label="State" type="text" name="state"/></div>
									<div><InputWithLabel label="Zip code" type="number" name="zipCode"/></div>
								</div>
								<Button name="Save information" />
							</Form>
						)}
					</Formik>
				</div>
			)}
		</div>
	);
};

export default Address;