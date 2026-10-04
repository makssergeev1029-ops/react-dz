import { useState } from 'react'

const DataShowing77 = () => {
	const initNotes = [
		{
			id: 1,
			name: 'name1',
			desc: 'long description 1',
			show: false,
		},
		{
			id: 2,
			name: 'name2',
			desc: 'long description 2',
			show: false,
		},
		{
			id: 3,
			name: 'name3',
			desc: 'long description 3',
			show: false,
		},
	];

	const [notes, setNotes] = useState(initNotes);

	const handleClick = (id) => {
		const redShow = notes.map(note => {
			if (note.id === id) {
				return { ...note, show: !note.show };
			}
			return note;
		});
		setNotes(redShow);
	};

	const result = notes.map(note => {
		return <div key={note.id}>
			<p>
				{note.name}
				<button onClick={() => handleClick(note.id)}>подробнее</button>
			</p>
			{note.show && <p>{note.desc}</p>}
		</div>;
	});

	return <div>
		{result}
	</div>;
}

export default DataShowing77;
