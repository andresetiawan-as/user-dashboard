import React, {Fragment, useState} from 'react'
import Table from './Table'

const Home = (props) => {
    const [status, setStatus] = useState("add")

    return (
        <Fragment>
            <div className="content-header">
                <h2>Header 1</h2>
                <h3>Header 2</h3>
            </div>
            <Table/>
        </Fragment>
    )
}

export default Home
