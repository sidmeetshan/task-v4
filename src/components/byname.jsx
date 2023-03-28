
import React, { useState } from 'react';
import Axios from '../config/axios';
import Card from './shared/card';

const ByName = () => {
    const [data, setData] = useState([])
    const [dataId, setId] = useState(null)
    const [success, setSuccess] = useState(true)

    const ShowRequest = async () => {
        setData()
        setSuccess(false)
        const resp = await Axios.get(`getServer/byName/${dataId}`)
        // console.log(resp.data)
        setData(resp.data.data)
        console.log(data)
        setSuccess(resp.data.success)
    }
    return (
        <div>
            <h1>Show by Name</h1>
            <input placeholder='Enter Name' value={dataId} onChange={(e) => setId(e.target.value)} />
            <button type='Submit' onClick={ShowRequest} disabled={dataId ? false : true} >Get Data by Name</button>

            <div className="container">
                {data ?
                    <>
                        { data.map((obj) => <Card id={obj.id} name={obj.name} language={obj.language} framework={obj.framework} />)}
                         
                    </>
                    
                    :
                    <>
                        { success ? "" : "Server Object Not Found by the given id"}
                    </>
                }
            </div>
        </div>
    )
}

export default ByName;