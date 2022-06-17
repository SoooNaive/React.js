import React, {useState, useCallback} from 'react';

const numberRegExp = /^\d+$/;

/** счетчик  */

const Card = ({ calculateSum }) => {
	const [input, setInput] = useState('');
	const sendCount = (event) => {
		if (numberRegExp.test(event.target.value)) {
			setInput(event.target.value);
		} else if (event.target.value === '') {
			setInput('');
		}
		
	};

	const clearInput = useCallback(() => {
 		setInput('')
	}, []);

	return (
		<div>
		      <input type="text"  value={input} onChange={sendCount}/>
		      <button disabled={!input} onClick={calculateSum(input, clearInput)}>+</button>
		</div>
		)
}

export default Card; 