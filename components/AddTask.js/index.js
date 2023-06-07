import { useState } from 'react';
import getDate from '@/utils/getDate';

export default function AddTask({ handleSetNewTask }) {
	const [inputs, setInputs] = useState({
		task: '',
		description: '',
	});

	const handleChange = (value, inputType) => {
		setInputs((prev) => ({ ...prev, [inputType]: value }));
	};

	const handleSubmit = (e) => {
		const { task, description } = inputs;
		e.preventDefault();
		if (task === '' || description === '') return;
		handleSetNewTask({
			...inputs,
			date: getDate(),
			_id: Date.now().toString(),
		});
		setInputs({ task: '', description: '' });
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				value={inputs.task}
				onChange={(e) => handleChange(e.target.value, 'task')}
				type='text'
			/>
			<textarea
				value={inputs.description}
				onChange={(e) => handleChange(e.target.value, 'description')}
				cols='30'
				rows='10'></textarea>
			<button type='submit'>NEW TASK PREVIEW</button>
		</form>
	);
}
