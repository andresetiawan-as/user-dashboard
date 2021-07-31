import React, {Fragment, useState, useEffect} from 'react'
import Table from './Table'

const Home = (props) => {
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
        <Fragment>
            <Table
                userList={userList}
                handleDelete={(id) => handleDelete(id)}
            />
        </Fragment>
    )
}

export default Home
