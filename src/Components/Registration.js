import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SideGradient from '../Svgs/SideGradient';
import { useNavigate } from 'react-router-dom';
import getRegistrationStatus from '../apis/getRegistrationStatus';
import LoadingScreen from './LoadingScreen';

function Registration() {

    const [number,setNumber]=useState(undefined);
    const [err,setErr] = useState(false);
    const [loading,setLoading]=useState(false);
    const navigate = useNavigate();
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (number?.length===10)
        {
            setLoading(true);
            const response =await getRegistrationStatus("+91"+number.toString());
            setLoading(false);

            setNumber("");
            if (response.status===204)
                navigate('/registration/new_registration');
            else if (response.status===200)
                navigate('/registration/registration_completed');
            else if (response.status===206)
                navigate('/registration/registration_payment')
        // const userStatus = await useUser();
        }
        else{
            setErr(true);  
        }


    }
    return (
        <>
        <SideGradient />
        {/* <div className="absolute top-0 w-screen h-screen justify-center flex items-center">
        </div> */}
        {!loading ?
            <div className="absolute top-0 w-full h-screen justify-center flex items-center">
            <div className="w-full md:w-3/4 lg:w-2/4 flex flex-col md:px-20 md:w-2/4 bg-purpleC py-20 md:rounded-xl top-20">
                <div className="flex w-full flex-col h-full items-center justify-center">
                    <h4 className="text-xl font-semibold text-white">Registration</h4>
                    <form onSubmit={handleSubmit} className="text-white py-5  justify-center w-full">
                        <div className="flex flex-col h-full items-center justify-center">
                            <div className=" p-5 px-10 justify-center">
                                <label className="text-grayC">Your phone number</label>
                                <div className="flex mt-2 text-white items-center p-1 border-2 rounded-md border-grayC">
                                    <p>+91</p>
                                    <input value={number} onChange={e=>{if(e.target.value.length<=10)setNumber(e.target.value);setErr(false)}} className="bg-transparent focus:outline-none ml-2 w-full" type="number" maxLength={10} />
                                </div>
                            </div>
                            {err &&<label className="text-red-500 text-sm mb-2">Enter a valid phone number</label>}
                            
                                <button onSubmit={handleSubmit} className="hover:bg-gradient-to-br hover:from-blueC hover:via-pinkC3 hover:to-pinkC2 bg-gradient-to-br from-pinkC2 via-pinkC3 to-blueC border-blue-900 border-2 p-0.5 rounded-3xl">
                                    <div className="bg-purpleC p-1 rounded-3xl px-10">
                                        <p className="text-white text-sm font-semibold">submit</p>
                                    </div>
                                </button>
                        </div>
                    </form>
                </div>
                {/* <button onClick={()=>{if(team.length<3){setTeam(team=>[...team,{}]);setSelectedIndex(team.length)}}} className="w-10 mb-20 text-white border-2 border-white rounded p-1">{"+"}</button>
                <button onClick={handleSubmit} className="border-blue-900 border-2 px-3 py-1 rounded-3xl px-10">
                            <p className="text-white text-sm">submit</p>
                        </button> */}
            </div>
            
            
        </div>
        :
        <LoadingScreen />
        }
        </>
    );
}

export default Registration;