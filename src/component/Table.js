import React from 'react'
import { Link } from 'react-router-dom';
import './index.css'

const Table = (props) => {
    const { userList, handleDelete } = props

    const formatDate = (d) => {
        let date = new Date(d)
        let dd = date.getDate();
        let month = date.toLocaleString('default', { month: 'long' });
        let yyyy = date.getFullYear();
        
        let result = dd + ' ' + month + ' ' + yyyy
        return result
    }

    return (
        <div>
            <div>
                <Link to="/add">
                    <button className="btn btn-primary">Add User</button>
                </Link>
            </div>
            <table id="user">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Nama</th>
                        <th>Pekerjaan</th>
                        <th>Alamat</th>
                        <th>Tanggal Lahir</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userList.length !== 0 ? 
                            userList.map((data, idx) => {
                                return(
                                    <tr key={idx+1}>
                                        <td>{idx+1}</td>
                                        <td>{data.nama}</td>
                                        <td>{data.pekerjaan}</td>
                                        <td>{data.alamat}</td>
                                        <td>{formatDate(data.tanggalLahir)}</td>
                                        <td>
                                            <div>
                                                <button className="btn btn-delete" onClick={() => handleDelete(data.id)}>Delete</button>
                                                <Link to={`/update/${data.id}`}>
                                                    <button className="btn btn-update">Update</button>
                                                </Link>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                        : 
                            <tr>
                                <td colSpan="6" className="no-data">No Data</td>
                            </tr>
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table
