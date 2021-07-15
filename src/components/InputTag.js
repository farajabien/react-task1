import { useState } from 'react'

function InputTag() {
	const [tags, setTags] = useState([])
	const inputKeyDown = (e) => {
		const value = e.target.value
		if (e.key === 'Enter' && value) {
			setTags([...tags, value])
			e.target.value = null
		}
	}
	return (
		<div onKeyDown={inputKeyDown}>
			<ul className='tagList'>
				{tags.length > 0 && tags.map((tag, i) => <li key={i}>{tag}</li>)}
			</ul>
			<input type='text' placeholder='Add A Tag' />
		</div>
	)
}

export default InputTag
