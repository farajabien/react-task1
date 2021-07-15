import axios from 'axios'
import { useState, useEffect } from 'react'
import './App.css'
import Student from './components/Student'

function App() {
	const url = 'https://api.hatchways.io/assessment/students'
	const [studentsData, setStudentsData] = useState(null)
	const [searchTerm, setSearchTerm] = useState('')

	useEffect(() => {
		axios.get(url).then((response) => {
			setStudentsData(response.data.students)
		})
	}, [url])

	return (
		<div className='App'>
			<h1>Bienvenu Faraja</h1>
			{studentsData ? (
				<div className='studentList'>
					<input
						type='text'
						placeholder='Search by name'
						onChange={(e) => {
							setSearchTerm(e.target.value)
						}}
					/>
					<hr />
					{studentsData
						.filter((student) =>
							searchTerm === ''
								? student
								: student.firstName
										.toLowerCase()
										.includes(searchTerm.toLowerCase()) ||
								  student.lastName
										.toLowerCase()
										.includes(searchTerm.toLowerCase())
						)
						.map((student) => (
							<Student studentInfo={student} key={student.id} />
						))}
				</div>
			) : (
				<div>
					<h1>Loading...</h1>
				</div>
			)}
		</div>
	)
}

export default App
