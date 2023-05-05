import { useState } from 'react'

// truyền prop để thêm học sinh
const AddStudentForm = ({ onAddStudent }) => {

  // học sinh có 3 thuộc tính
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  // xử lí việc thêm học sinh
  const handleSubmit = (e) => {
    e.preventDefault();
    //validate
    if (name.length === 0 || age.length === 0 || gender.length === 0) {
      alert("Vui lòng điền đủ thông tin!")
    } else {
      //trả về một object
      onAddStudent({ name, age, gender });
      setName("");
      setAge("");
      setGender("");
    }
  }

  // const validateSubmit = () => {
 
  // }

  return (
    <div className='form-wrapper'>
      <div className='add-form-header'>
        <h3>Thêm học sinh</h3>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <div className='add-table'>
          <table>
            <tbody>
              <tr>
                <td>
                  <label className='add-form-label'>Họ và tên</label>
                </td>
                <td>
                  <input onChange={event => setName(event.target.value)}
                    type="text" className='add-input' value={name}></input>
                </td>
              </tr>
              <tr>

                <td>
                  <label className='add-form-label'>Tuổi</label>
                </td>
                <td>
                  <input type="text" onChange={event => setAge(event.target.value)} value={age}
                    className='add-input'></input>
                </td>

              </tr>
              <tr>

                <td>
                  <label className='add-form-label'>Giới tính</label>
                </td>
                <td>
                  <input type="radio" id='gender-male' name='add-gender' value='Nam'
                    checked={gender === 'Nam'} onChange={() => setGender("Nam")}></input>
                  <label className='add-gender-label' htmlFor='male'>Nam</label>
                  <input type="radio" id='gender-female' name='add-gender' value='Nữ'
                    checked={gender === 'Nữ'} onChange={() => setGender("Nữ")}></input>
                  <label className='add-gender-label' htmlFor='female'>Nữ</label>
                </td>
              </tr>
            </tbody>
          </table>
          <div className='add-student-button-area'>
            <button type='submit' className='add-student-button'>Lưu</button>
          </div>
          
        </div>
      </form>
    </div>
  )
}

export default AddStudentForm;
