import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

const Table = (props) => {
    const [isChange, setIsChange] = useState([])
    let userList = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : []

    useEffect(() => {
        setIsChange(userList)
    }, [])

    useEffect(() => {
        userList = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : []
    }, [isChange])

    const handleDelete = (id) => {
        let filterUser = userList.filter(e => e.id !== id)
        localStorage.setItem('user', JSON.stringify(filterUser));
        setIsChange(filterUser)
        alert("Delete Success")
    }

    return (
        <div>
            <div>
                <Link to="/add">
                    <button>Add User</button>
                </Link>
            </div>
            <table id="customers">
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
                                        <td>{data.tanggalLahir}</td>
                                        <td>
                                            <div>
                                                <button onClick={() => handleDelete(data.id)}>Delete</button>
                                                <Link to={`/update/${data.id}`}>
                                                    <button>Update</button>
                                                </Link>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                        : 
                            <tr>
                                <td colSpan="6">No Data</td>
                            </tr>
                    }
                </tbody>
            </table>
            
        </div>
    )
}

export default Table
