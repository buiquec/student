import React, { useEffect } from 'react'
import { useState } from 'react'

const EditStudentForm = ({ student, onSaveEdit, onCancelEdit }) => {
  const [newName, setNewName] = useState(student.name);
  const [newAge, setNewAge] = useState(student.age);
  const [newGender, setNewGender] = useState(student.gender);

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleAgeChange = (event) => {
    setNewAge(event.target.value);
  };

  const handleGenderChange = (event) => {
    setNewGender(event.target.value);
  };

  const handleSaveClick = () => {
    const updatedStudent = {
      name: newName,
      age: newAge,
      gender: newGender
    }
    onSaveEdit(updatedStudent)
  }
  
  return (<>
  <div>
    <input className='edit-name-input' type='text' value={student.name} onChange={handleNameChange}></input>
    <input className='edit-age-input' type='text' value={student.age} onChange={handleAgeChange}></input>

    <input className='edit-gender-input' type='radio' name='edit-gender'
    value={student.gender} checked={newGender === 'Nam'} onChange={handleGenderChange}></input>
    <label className='edit-gender-label' htmlFor='male'>Nam</label>
    <input className='edit-gender-input' type="radio" name='edit-gender' 
    value={student.gender} checked={newGender === 'Nữ'} onChange={handleGenderChange}></input>
    <label className='add-gender-label' htmlFor='female'>Nữ</label>

    <button className='save-edit-button' onClick={handleSaveClick}>Lưu</button>
    <button className='cancel-edit-button' onClick={onCancelEdit}>Hủy</button>
  </div>
  </>)
}

export default EditStudentForm
