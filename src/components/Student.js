import { useState } from 'react'
import InputTag from './InputTag'

function Student({ studentInfo }) {
	const [toggleGrades, setToggleGrades] = useState(false)
	const grades = studentInfo.grades
	let total = 0

	for (let i = 0; i < grades.length; i++) {
		total += parseInt(grades[i], 10)
	}

	const avg = total / grades.length

	const toggleGradesHandler = () => {
		toggleGrades ? setToggleGrades(false) : setToggleGrades(true)
	}

	return (
		<div className='studentDiv'>
			<div className='imageDiv'>
				<img src={studentInfo.pic} alt='student pic' />
			</div>
			<div className='studentInfo'>
				<h1 className='title'>
					{studentInfo.firstName} {studentInfo.lastName}
				</h1>
				<div className='details'>
					<p>Email: {studentInfo.email}</p>
					<p>Company: {studentInfo.company}</p>
					<p>Skill: {studentInfo.skill}</p>
					<p>Average: {avg}%</p>
				</div>
				<div className='grades'>
					{toggleGrades &&
						grades.map((grade, i) => (
							<p>
								Test {i + 1}: <span>{grade}%</span>
							</p>
						))}
				</div>
				<InputTag />
				<hr />
			</div>

			<div className='collapseGrades'>
				<button onClick={toggleGradesHandler}>
					{toggleGrades ? '-' : '+'}
				</button>
			</div>
		</div>
	)
}

export default Student
