import React, {useState, useCallback} from 'react';
import Card from './Card';

/** результирующий компонент */

const Result = ({ value, setValue }) => {
	const clearResult = useCallback(() => {
 		setValue(0)
	}, []);
	return (
		<div>
		    <span>Результат: {value}</span>
		    <br />
		    <button onClick={clearResult}>Clear</button>
		</div>
		)
}

export default Result; 