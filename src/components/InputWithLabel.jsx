import { ErrorMessage, Field, useFormikContext } from 'formik';
import { useRef, useState } from 'react';

const InputWithLabel = ({ label = '', type, name, placeholder, className, optional }) => {
	const inputRef = useRef(null);
	const { values, touched } = useFormikContext();
	const [isFocused, setIsFocused] = useState(false);

	const handleLabelClick = () => {
		setIsFocused(true);
		inputRef.current.focus();
	};

	return (
		<>
			{label ? (
				<div className="flex flex-col pt-5">
					{label && (
						<label
							htmlFor={name}
							className={`text-black/65 absolute z-10 pl-4 ${
								touched[name] || isFocused || values[name]
									? 'pt-2.5 text-[13px]'
									: 'pt-4'
							}`}
							onClick={handleLabelClick}
						>
							{label}
						</label>
					)}
					<Field
						innerRef={inputRef}
						type={type}
						name={name}
						onFocus={() => setIsFocused(true)}
						onBlur={() => setIsFocused(false)}
						className={`input relative pt-6 ${
							isFocused ? 'border-primary border-2' : ''
						} ${className}`}
					/>
				</div>
			) : (
				<div className='relative'>
					<Field
						placeholder={placeholder}
						type={type}
						className={`input mt-2 pb-3 focus:border-primary focus:border-2 ${className}`}
						name={name}
						onFocus={() => optional ? setIsFocused(true) : ''}
						onBlur={() => optional ? setIsFocused(false) : ''}
					/>
					{(optional && !isFocused) && <p className='absolute top-5 right-4 text-black/65'>Optional</p>}
				</div>
			)}
			<ErrorMessage
				className="text-error text-sm pt-1"
				name={name}
				component="p"
			/>
		</>
	);
};

export default InputWithLabel;
