import './styles.css'
import data from "./data";
import { useState } from "react"
export default function Accordian() {

    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([])
    function handleSelection(getCurrentId) {
        setSelected(getCurrentId === selected ? null : getCurrentId);
    }
    function handleMultiSelection(getCurrentId) {
        let copyMultiple=[...multiple]
        const findIndexofCurrentId=copyMultiple.indexOf(getCurrentId)
        console.log(findIndexofCurrentId);
        if(findIndexofCurrentId===-1) copyMultiple.push(getCurrentId)
        else copyMultiple.splice(findIndexofCurrentId,1)
        setMultiple(copyMultiple)
    }
    console.log(selected,multiple)

    return <div className="wrapper">
        <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>Enable Multi Selection</button>
        <div className="accordian">
            {
                data && data.length > 0 ?
                    data.map(dataItem => <div className="item">
                        <div onClick={enableMultiSelection ?()=>handleMultiSelection(dataItem.id): 
                        ()=>handleSelection(dataItem.id)}
                         className="title">
                        <h3>{dataItem.question}</h3>
                        <span>+</span>
                    </div>
                        {
                            selected=== dataItem.id || multiple.indexOf(dataItem.id)!==-1 ?
                            <div className="content">{dataItem.answer}</div>
                            : null
                        }
        </div>)
        : <div>No data found!</div>
            }

    </div>
    </div >
}