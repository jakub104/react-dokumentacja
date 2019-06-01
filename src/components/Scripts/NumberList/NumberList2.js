import React from 'react'

function ListItem(props) {
	const value = props.value;
	return (
		<li>{value}</li>
	)
}

// function NumberList(props) {
// 	const numbers = props.numbers;
// 	const listItems = numbers.map((number) => 
// 		<ListItem
// 			key={number.toString()}
// 			value={number}
// 		/>
// 	);

// 	return (
// 		<ul>
// 			{listItems}
// 		</ul>
// 	)
// }

function NumberList(props) {
	const numbers = props.numbers;

	return (
		<ul>
			{numbers.map((number) => 
				<ListItem
					key={number.toString()}
					value={number}
				/>
			)}
		</ul>
	)
}

export default NumberList