import React from 'react'
import { useState } from 'react';
import { FaTimes } from "react-icons/fa";
import { FaEdit } from 'react-icons/fa';

// truyền prop để xử lí: students là 1 mảng, onDeleteStudent là 1 hàm nhận tham số là index
const StudentList = ({ students, onDeleteStudent }) => {

  return (
    <div className='list-wrapper'>
      <table>
        <thead>
          <tr className='list-header'>
            <th className='name-bar'>
              <div>
                Họ và tên
              </div>
            </th>
            <th className='age-bar'>
              <div>
                Tuổi
              </div>
            </th>
            <th className='gender-bar'>
              <div>
                Giới tính
              </div>
            </th>
            <th className='delete-header-bar'></th>
          </tr>
        </thead>

        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td className='display-area'>
                <div className='display-flex'>
                  <div>
                    <input className='display-name' value={student.name}></input>
                  </div>
                </div>
              </td>
              <td className='display-area'>
                <div className='display-flex'>
                  <div>
                    <input className='display-age' value={student.age}></input>
                  </div> 
                </div>
              </td>
              <td className='display-area'>
                <div className='display-flex'>
                  <div>
                    <input className='display-gender' value={student.gender}></input>
                  </div>
                </div>
              </td>
              <td className='display-delete-area'>
                <button className='delete-button' onClick={() => onDeleteStudent(index)}><FaTimes className='delete-sign' /></button>
              </td>
              <td>
                <button className='edit-button'><FaEdit className='edit-sign' /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default StudentList
