import {useState} from 'react'

const DataObjectsArrayAdding75 = () => {
	const arr = [
		{
		id: 'GYi9G_uC4gBF1e2SixDvu',
		name: 'Анастасия',
		surname: 'Бородина',
		age: '16',
	},
	{
		id: 'IWSpfBPSV3SXgRF87uO74',
		name: 'Сергей',
		surname: 'Половников',
		age: '28',
	},
	{
		id: 'JAmjRlfQT8rLTm5tG2m1L',
		name: 'Денис',
		surname: 'Петров',
		age: '36',
	},
	]

	const [notes, setNotes] = useState(arr);
	const [inputName, setInputname] = useState('');
	const [inputSurname, setInputSurname] = useState('');
	const [inputAge, setInputAge] = useState('');
	const [editId, setEditId] = useState(null);

	const handleClick = () => {
		const newUser = {
			id: crypto.randomUUID(),
			name: inputName,
			surname: inputSurname,
			age: Number(inputAge)
		}

		setNotes([...notes, newUser]);

		setInputname('');
		setInputSurname('');
		setInputAge('');
	}

	const handleEditClick = (note) => {
		setInputname(note.name);
		setInputSurname(note.surname);
		setInputAge(note.age.toString());
		setEditId(note.id);
	}

	const handleSave = () => {
		const update = notes.map(note => {
			if (note.id === editId) {
				return {
					...note,
					name: inputName,
					surname: inputSurname,
					age: Number(inputAge)
				};
			}
			return note;
		})
		setNotes(update);
		setInputname('');
		setInputSurname('');
		setInputAge('');
		setEditId(null);
	}

	const deleteUser = (idToDelete) => {
		const filterUsers = notes.filter(notes => notes.id !== idToDelete);
		setNotes(filterUsers);

		if (editId === idToDelete) {
			setEditId(null);
			setInputname('');
			setInputSurname('');
			setInputAge('');
		}
	}

	const result = notes.map(note => {
		return <li key={note.id}>
			<span onClick={() => handleEditClick(note)}>
				<span> {note.name}</span>
				<span> {note.surname}</span>
				<span> {note.age}</span>
			</ span>
			<button onClick={() => deleteUser(note.id)} >Удалить</button>
		</li>
	})

	return <>
		<input value={inputName} placeholder='Имя' onChange={(e) => setInputname(e.target.value)}></input>
		<br/>
		<input value={inputSurname} placeholder='Фамилия' onChange={(e) => setInputSurname(e.target.value)}></input>
		<br/>
		<input value={inputAge} placeholder='Возраст' onChange={(e) => setInputAge(e.target.value)}></input>
		<br/>{
			editId ? (
		<button onClick={handleSave} >Сохранить изменения</button>
			) : (
				<button onClick={handleClick}>Добавить пользоввателя</ button>
			)
		}<br/>
		<p>Список пользователей</p>

		<ul>
			{result}
		</ul>
	</>
}

export default DataObjectsArrayAdding75