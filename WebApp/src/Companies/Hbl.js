import React from 'react'
import Navigations from '../Navigations'
import Papa from 'papaparse';
import table from 'react-bootstrap'
import BarChart from '../BarChart'
import {Dropdown, Card,Button} from 'react-bootstrap'
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useHistory } from 'react-router-dom'

import Hbl_true from '../Datasets/true.csv'
import Hbl_pred from '../Datasets/pred.csv'

export default function HBL() {
    const history=useHistory()

    function Back()
    {
        history.push('./Dashboard')
    }
    return (
        <>

        
<div style={{display:'flex',justifyContent:"center", alignItems:"center",marginTop:"50px"}} >
    <Button onClick={Back}>Back to Dashboard</Button>    
    </div>
        <div style={{display:'flex',justifyContent:"center", alignItems:"center",marginTop:"50px"}} >
        <h2>
            Habib Bank Limited        
        </h2>
        
        </div>

            <div style={{display:'flex',justifyContent:"center", alignItems:"center",marginRight:"30px"}}>        
        
        <BarChart
        preds={Hbl_pred}
        true={Hbl_true}
        />

   
   


        </div>
        


        
        </>
    )
}

