import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SideGradient from '../Svgs/SideGradient';
import { useNavigate,useParams } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp, faMinus, faUserPlus } from '@fortawesome/free-solid-svg-icons'

function RegistrationForm(props) {
    const [number,setNumber]=useState(null);
    const [team,setTeam] = useState([]);
    const [teamLeader,setTeamLeader] = useState({phone_no:"",name:"",discord_id:"",email_id:"",college:"",address:"",district:"",state:"",pin_code:""});
    const [teamName,setTeamName]=useState("");
    const [err,setErr] = useState(false);
    const [selectedIndex,setSelectedIndex] = useState(-1);
    const [selectedLeader,setSelectedLeader] = useState(false);
    const navigate = useNavigate();
    const {registrationStatus} =useParams();

    const handleSubmit =  (e)=>{
        e.preventDefault();
        // const userStatus = await useUser();
        var i=0
        if ((team.length>0 && team.length<4) || teamName.length===0 || teamLeader.discord_id.length===0 || teamLeader.name.length===0 || teamLeader.phone_no.toString().length===0 || teamLeader.email_id.length===0 || teamLeader.college_name.length===0 || teamLeader.address.length===0 || teamLeader.state.length===0 || teamLeader.pin_code.length===0 || teamLeader.district.length===0)
            setErr(true)
        
        while(i<team.length){
            if (team[i].discord_id.length===0 || team[i].name.length===0 || team[i].phone_no.toString().length<10 || team[i].email_id.length===0 || team[i].college_name.length===0 || team.address.length===0 || team.state.length===0 || team.pin_code.length===0 || team.district.length===0)
                setErr(true)
            i++;
        }
        if (!err){


            // navigate('/registration/registration_payment');
        }
        


    };

    const handleChange = (e,index,key)=>{
        setTeam(team=>{
            let items = [...team];
            let item = {...items[index]};
            item[key]=e.target.value;
            items[index]=item;
            return items;
    })
    }
    const handleRemove = (index)=>{
        setTeam(team=>{
            let items = [...team];
            items.splice(index,1);
            return items;
    })
    }
    const handleChangeLeader = (e,key)=>{
        setTeamLeader(team=>{
            let item = team;
            item[key]=e.target.value;
            return item;
    })
    }

    return (
        <>
        <SideGradient />
        <div className="absolute top-20 w-full min-h-screen justify-center flex items-center">
            <div className="w-full flex flex-col px-2 md:px-20 md:w-2/4 bg-purpleC py-20 md:rounded-xl top-20 items-center">
                <div className="flex w-full flex-col h-full items-center justify-center">
                    <h4 className="text-xl font-semibold text-white">Registration</h4>
                    <div className="text-white py-5  justify-center w-full">
                        <div className="w-full mb-2">
                            <label className="text-grayC">Team</label>
                            <input 
                            value={teamName}
                            onChange={(e)=>{setErr(false);setTeamName(e.target.value)}}
                            className="bg-transparent border-2 p-1 border-grayC rounded w-full" />
                        </div>
                        <label className="text-grayC">Leader</label>
                        <div
                             className="w-full justify-between items-end flex text-white mb-2 p-2 border-2 border-grayC rounded">
                            {
                                selectedLeader===true ?
                                <div>
                                    <div className="flex flex-col items-start mt-5 text-white items-center p-1 ">
                                        <div className="mb-2 w-full">
                                            <label className="text-grayC">Mobile Number</label>
                                            <div className="flex w-full  items-start text-white items-center p-1 border-2 rounded-md border-grayC">
                                                <p>{"+91"}</p>
                                                <input 
                                                maxLength={10}
                                                value={number} onChange={e=>{if(e.target.value.length<=10)setNumber(e.target.value);setErr(false)}} className="ml-2 bg-transparent focus:outline-none w-full" type="number" max={10} />
                                            </div>
                                        </div>
                                        <div className="w-full mb-2">
                                            <label className="text-grayC">Name</label>
                                            <input 
                                                value={teamLeader.name}
                                                onChange={(e)=>{setErr(false);handleChangeLeader(e,"name")}} className="bg-transparent border-2 p-1 border-grayC rounded w-full" />
                                        </div>
                                        <div className="w-full mb-2">
                                            <label className="text-grayC">Discord Id</label>
                                            <input 
                                                value={teamLeader.discord_id}
                                                onChange={(e)=>{setErr(false);handleChangeLeader(e,"discord_id")}}
                                                className="bg-transparent border-2 p-1 border-grayC rounded w-full" />
                                        </div>
                                        <div className="w-full mb-2">
                                            <label className="text-grayC">Email Id</label>
                                            <input 
                                                value={teamLeader.email_id}
                                                onChange={(e)=>{setErr(false);handleChangeLeader(e,"email_id")}}
                                                className="bg-transparent border-2 p-1 border-grayC rounded w-full" />
                                        </div>
                                        <div className="w-full mb-2">
                                            <label className="text-grayC">College</label>
                                            <input 
                                                value={teamLeader.college_name}
                                                onChange={(e)=>{setErr(false);handleChangeLeader(e,"college_name")}}
                                                className="bg-transparent border-2 p-1 border-grayC rounded w-full" />
                                        </div>
                                        <div className="w-full mb-2">
                                            <label className="text-grayC">Address</label>
                                            <textarea 
                                                value={teamLeader.address}
                                                onChange={(e)=>{setErr(false);handleChangeLeader(e,"address")}}
                                                className="bg-transparent border-2 p-1 border-grayC rounded w-full" />
                                        </div>
                                        <div className="w-full mb-2">
                                            <label className="text-grayC">District</label>
                                            <input 
                                                value={teamLeader.district}
                                                onChange={(e)=>{setErr(false);handleChangeLeader(e,"district")}}
                                                className="bg-transparent border-2 p-1 border-grayC rounded w-full" />
                                        </div>
                                        <div className="w-full mb-2">
                                            <label className="text-grayC">State</label>
                                            <input 
                                                value={teamLeader.state}
                                                onChange={(e)=>{setErr(false);handleChangeLeader(e,"state")}}
                                                className="bg-transparent border-2 p-1 border-grayC rounded w-full" />
                                        </div>
                                        <div className="w-full mb-2">
                                            <label className="text-grayC">Pin Code</label>
                                            <input 
                                                value={teamLeader.pin_code}
                                                onChange={(e)=>{setErr(false);handleChangeLeader(e,"pin_code")}}
                                                className="bg-transparent border-2 p-1 border-grayC rounded w-full" />
                                        </div>
                                    </div>
                                </div>
                                :
                                <h5>{teamLeader.name}</h5>
                            }
                                        <button onClick={()=>{
                                        if(selectedLeader===true)
                                            setSelectedLeader(false)
                                        else
                                            setSelectedLeader(true)
                                        }} >
                                            <FontAwesomeIcon icon={selectedLeader?faAngleUp:faAngleDown} />
                                            
                                        </button>
                                    </div>
                            
                        <h5 className="mb-1 mt-5 font-bold">Members</h5>
                        {
                            team.map((member,index)=>{
                                return (
                                    <div className="w-full flex items-start justify-between mb-0">
                                    <div
                                        key={index} className={`w-11/12 justify-between items-center flex ${selectedIndex===index?"flex-col":"flex-row"} text-white  p-2 border-2 border-grayC rounded`}>
                
                                        {
                                            selectedIndex===index ?
                                            <div>
                                                <div className="flex flex-col items-start mt-1 text-white items-center p-1 pt-0">
                                                    <div className="flex w-full mb-2 items-start mt-2 text-white items-center p-1 border-2 rounded-md border-grayC">
                                                        <p>{"+91"}</p>
                                                        <input value={number} onChange={e=>{if(e.target.value.length<=10)handleChange(e,index,"phone_no");setErr(false);}} className="ml-2 bg-transparent focus:outline-none w-full" type="number" max={10} />
                                                    </div>
                                                    <div className="w-full mb-2">
                                                        <label className="text-grayC">Name</label>
                                                        <input 
                                                            value={team[index].name}
                                                            onChange={(e)=>{setErr(false);handleChange(e,index,"name")}} className="bg-transparent border-2 p-1 border-grayC rounded w-full" />
                                                    </div>
                                                    <div className="w-full mb-2">
                                                        <label className="text-grayC">Discord Id</label>
                                                        <input 
                                                            value={team[index].discord_id}
                                                            onChange={(e)=>{setErr(false);handleChange(e,index,"discord_id")}}
                                                         className="bg-transparent border-2 p-1 border-grayC rounded w-full" />
                                                    </div>
                                                    <div className="w-full mb-2">
                                                        <label className="text-grayC">Email Id</label>
                                                        <input 
                                                            value={team[index].email_id}
                                                            onChange={(e)=>{setErr(false);handleChange(e,index,"email_id")}}
                                                            className="bg-transparent border-2 p-1 border-grayC rounded w-full" />
                                                    </div>
                                                    <div className="w-full mb-2">
                                                        <label className="text-grayC">College</label>
                                                        <input 
                                                            value={team[index].college_name}
                                                            onChange={(e)=>{setErr(false);handleChange(e,index,"college_name")}}
                                                            className="bg-transparent border-2 p-1 border-grayC rounded w-full" />
                                                    </div>
                                                    <div className="w-full mb-2">
                                                        <label className="text-grayC">Address</label>
                                                        <textarea 
                                                            value={team[index].address}
                                                            onChange={(e)=>{setErr(false);handleChange(e,index,"address")}}
                                                            className="bg-transparent border-2 p-1 border-grayC rounded w-full" />
                                                    </div>
                                                    <div className="w-full mb-2">
                                                        <label className="text-grayC">District</label>
                                                        <input 
                                                            value={team[index].district}
                                                            onChange={(e)=>{setErr(false);handleChange(e,index,"district")}}
                                                            className="bg-transparent border-2 p-1 border-grayC rounded w-full" />
                                                    </div>
                                                    <div className="w-full mb-2">
                                                        <label className="text-grayC">State</label>
                                                        <input 
                                                            value={team[index].state}
                                                            onChange={(e)=>{setErr(false);handleChange(e,index,"state")}}
                                                            className="bg-transparent border-2 p-1 border-grayC rounded w-full" />
                                                    </div>
                                                    <div className="w-full mb-2">
                                                        <label className="text-grayC">College</label>
                                                        <input 
                                                            value={team[index].pin_code}
                                                            onChange={(e)=>{setErr(false);handleChange(e,index,"pin_code")}}
                                                            className="bg-transparent border-2 p-1 border-grayC rounded w-full" />
                                                    </div>
                                                </div>
                                            </div>
                                            :
                                            <h5>{member.name}</h5>
                                        }
                                        
                                        <button onClick={()=>{
                                        if(selectedIndex===index)
                                            setSelectedIndex(-1)
                                        else
                                            setSelectedIndex(index)
                                        }} >
                                            <FontAwesomeIcon icon={selectedIndex===index?faAngleUp:faAngleDown} />
                                            </button>
                                        </div>
                                        <button onClick={()=>handleRemove(index)} className="w-10 mb-20 text-white hover:text-grayC p-1"><FontAwesomeIcon  icon={faMinus} />
                                        </button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                {team.length<3 && 
                    <div className="w-full flex items-start">
                        <button onClick={()=>{if(team.length<4){setTeam(team=>[...team,{phone_no:"",name:"",discord_id:"",email_id:"",college:"",address:"",district:"",state:"",pin_code:""}]);setSelectedIndex(team.length)}}} className="w-10 mb-20 text-white hover:text-grayC p-1"><FontAwesomeIcon  icon={faUserPlus} />
                        </button>
                        </div>
                    }

                    {err &&<label className="text-red-500 text-sm mb-2">{team.length===0?"Minium 1 member required":"All fields are mandatory"}</label>}
                <button onClick={handleSubmit} className="border-blue-900 text-white border-2 px-3 py-1 rounded-3xl px-10">
                    <p className="text-white text-sm">submit</p>
                </button>
            </div>
            
            
        </div>
        </>
    );
}

export default RegistrationForm;