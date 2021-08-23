import React from 'react'
import { useHistory } from 'react-router-dom'
import Navigations from '../Navigations'
import Papa from 'papaparse';
import table from 'react-bootstrap'
import BarChart from '../BarChart'
import {Dropdown, Card,Button} from 'react-bootstrap'
import DropdownButton from 'react-bootstrap/DropdownButton';
import Mbl_true from '../Datasets/JSBL_true.csv'
import Mbl_pred from '../Datasets/JSBL_pred.csv'


export default function Jsbl() {

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
                JSBL
        </h2>
        
        </div>

            <div style={{display:'flex',justifyContent:"center", alignItems:"center",marginRight:"30px"}}>        
        
        <BarChart preds={Mbl_pred}true={Mbl_true}/>


   
   

        </div>
        
        </>
    
    )
}
