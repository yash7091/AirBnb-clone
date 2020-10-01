import React,{useState} from 'react'
import './Banner.css'
import {Button} from "@material-ui/core";
import {useHistory} from "react-router-dom"
import Search  from './Search';
function Banner() {
    const [showSearch,setshowSearch]=useState(false);
    const history = useHistory();
    return (
        <div className="banner">
            <div className="banner__search">
                {showSearch && <Search/>}
                <Button className="banner__searchButton"
                variant="outlined"
                onClick={()=>setshowSearch(!showSearch)}>{showSearch?"Hide":"Search Date"}</Button>
            </div>
            <div className="banner__info">
                {/* <img src="https://a0.muscache.com/im/pictures/18084f37-67e0-400f-bfd8-55eea0e89508.jpg?im_w=720" alt=""/> */}
                <h1>Get out and Stretch your imagination</h1>
                <h5>Plan a different gateway to uncover the hidden gems near you</h5>
                <Button onClick={()=>history.push("/search")} variant="outlined">Explor near by</Button>

            </div>
        </div>
    )
}

export default Banner
