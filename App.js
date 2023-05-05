import './App.css';
import { useEffect, useState } from 'react';
import SearchBar from './components/SearchBar';
import StudentList from './components/StudentList';
import AddStudentForm from './components/AddStudentForm';
import { FaPlus } from "react-icons/fa";
import EditStudentForm from './components/EditStudentForm';

function App() {
  const [show, setShow] = useState(false);

  // tạo state học sinh trả về 1 mảng gồm nhiều học sinh
  const [students, setStudents] = useState([]);

  useEffect(() => {

  },[students])
  
  // cập nhật lại mảng students sau khi thêm
  const handleAddStudent = (student) => {// student là 1 object, setStudents trả về 1 mảng gồm các objs học sinh
    setStudents([...students, student])
  }

  // cập nhật lại mảng students sau khi xóa
  const handleDeleteStudent = (index) => {
    const updatedStudents = [...students]
    updatedStudents.splice(index, 1);
    setStudents(updatedStudents)
  }

  const handleEditStudent = (index, editedStudent) => {
    const updatedStudents = [...students]
    updatedStudents.splice(index, 1 ,editedStudent);
    setStudents(updatedStudents)
  }


  // cập nhật lại mảng students sau khi tìm kiếm
  const handleSearchStudents = (keyword) => {
    const filteredStudents = students.filter(student => student.name.toLowerCase().includes(keyword.toLowerCase()));
    if(filteredStudents.length === 0){
      alert("Không tìm thấy học sinh!")
    } else {
      setStudents(filteredStudents)
    }   
  }

  return (
    <div className='root-wrapper'>
      <div className='program-wrapper'>
        <div className='first-wrapper'>
          <h3>Quản lí học sinh</h3>
        </div>
        <div className='second-wrapper'> 
          <div className='nav-bar'>
            <SearchBar onSearch={handleSearchStudents}/>
            <button className='add' onClick={() => {setShow(!show)}}><FaPlus className='plus-icon'/>Add</button>
          </div>
        </div>
        <div className='third-wrapper'>
          {show && <>
            <AddStudentForm 
              onAddStudent={handleAddStudent}/>
          </>}
          {
          
          }
        </div>
        <div className='fourth-wrapper'>
          <StudentList 
            students={students} 
            onDeleteStudent={handleDeleteStudent}
            />
        </div>
      </div>     
    </div>
  );
}

export default App;
