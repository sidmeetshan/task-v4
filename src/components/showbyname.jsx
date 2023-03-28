
import React, { useState } from 'react';
import Axios from '../config/axios';
import Card from './shared/card';

const Showbyname = () => {
    const [data, setData] = useState()
    const [name, setName] = useState("")
    const [success, setSuccess] = useState(true)

    const ShowRequest = async () => {
        setData()
        setSuccess(false)
        const resp = await Axios.get(`getServer/byName/${name}`)
        console.log(resp.data)
        setData(resp.data)
        setSuccess(resp.data.success)
    }
    return (
        <div>
            <h1>Show by Name</h1>
            <input placeholder='Enter Name' value={name} onChange={(e) => setName(e.target.value)} />
            <button type='Submit' onClick={ShowRequest} disabled={name ? false : true} >Get Data by Name</button>
            
            <div className="container">
                {data ?
                    <Card id={data.data.id} name={data.data.name} language={data.data.language} framework={data.data.framework} /> :
                    <>
                        {success ? "" : "Fields cannot be empty"}
                    </>
                }
            </div>
        </div>
    )
}

export default Showbyname