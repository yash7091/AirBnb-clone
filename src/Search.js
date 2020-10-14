import React,{useState} from 'react'
import "./Search.css"
import { DateRangePicker } from 'react-date-range';
import {useHistory} from "react-router-dom"
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import  PeopleIcon  from '@material-ui/icons/People';
import { Button } from '@material-ui/core';
function Search() {
    const [startDate,setStartDate]=useState();
    const [endDate,setEndDate] = useState(new Date());
    const history =useHistory();
    const selectionRange = {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
      }
      function handleSelect(ranges){
          setStartDate(ranges.selection.startDate);
          setEndDate(ranges.selection.endDate);
      }
    return (
        <div className="search">
            <DateRangePicker className="search__date"
        ranges={[selectionRange]}
        onChange={handleSelect}
      />
        <h2>
            Number of Guest
            <PeopleIcon/>
        </h2>
        <input min={0} defaultValue={2} type="number"/>
        <Button onClick={()=>history.push("/search")} >Search Guests</Button>
        </div>
    )
}

export default Search
