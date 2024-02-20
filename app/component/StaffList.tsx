'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import backIcon from './back.png';
import clearIcon from './clear.png';
import successIcon from './Arrow.png'
import './Popup.css'

export default function StaffList(){
    interface StaffDetails {
        "staff_name":"",
        "pin_number":"",
        "company_id":"",
        "user_id":"",
    }
    const [staffList, setStaffList] = useState([
            {
                "staff_name":"Arun kumar",
                "pin_number":"7747",
                "company_id":0,
                "user_id":6974,
            },
            {
                "staff_name":"aswini S",
                "pin_number":"0000",
                "company_id":0,
                "user_id":3773,
            },
            {
                "staff_name":"Sona devi",
                "pin_number":"No clock_pin",
                "company_id":0,
                "user_id":5307,
            },
            {
                "staff_name":"Reuban d",
                "pin_number":"0000",
                "company_id":0,
                "user_id":5114,
            }]); 
    const [selectedStaffDetails, setSelectedStaffDetails] = useState<StaffDetails | null>(null);;
    const [staffSelected, setStaffSelected] = useState(false);
    const [isCorrectPin, setisCorrectPin] = useState(false);
    const handleOnClick = (val:any, evt:any) => {
        console.log("fg");
        setStaffSelected(true);
        setSelectedStaffDetails(val)
    };
    interface CustomPopupProps {
        message: string; // Specify the type of the message prop as string
        onClose: () => void; // Specify the type of the onClose prop as a function that doesn't take any arguments and returns void
    }
    interface ClockInPopupProps {
        popmessage: string; // Specify the type of the message prop as string
        poptime:string;
        onClose: () => void; // Specify the type of the onClose prop as a function that doesn't take any arguments and returns void
    }
    const CustomPopup: React.FC<CustomPopupProps> = ({ message, onClose }) => {
        return (
            <div className="modal">
            <div className="modal-content">
                <p className='pop-cont'>{message}</p>
                <button className='pop-btn' onClick={onClose}>OK</button>
            </div>
            </div>
        );
    };
    const ClockInPopup: React.FC<ClockInPopupProps> = ({ popmessage, poptime,onClose }) => {
        return (
            <div className="modal">
            <div className="modal-content success-pop-cont">
                <div className='row success-img'>
                    <Image className="success-icon" src={successIcon} alt="Success Icon" />
                </div>
                <p className='text-color text-3xl'>{popmessage}</p>
                <p className='text-color text-5xl'>{poptime}</p>
                <button className='success-btn' onClick={onClose}>Close</button>
            </div>
            </div>
        );
    };
    const handleClockIn =()=>{
        console.log("tester")
        setShowClockinModal(true);
        // setisCorrectPin(false);
    }
    const backToList =()=>{
        setisCorrectPin(false);
        setStaffSelected(false);
        setShowClockinModal(false);
        setPin('');
        console.log("back clicked sd");
    }
    const Clockin = () => {
        return (
            <div className="h-full w75">
                <div className="list-container">
                    <div className="back-btn">
                        <div className='back-b'  onClick={backToList}> <Image className='back-icon' src={backIcon} alt='Back Icon' /> Back</div>
                    </div>
                    <div className='clock-in-cont'>
                            {selectedStaffDetails && (
                                <div>
                                    <div className='text-2xl my-4'>
                                        Hello {selectedStaffDetails.staff_name}, your shift is from
                                    </div>
                                    <div className='text-5xl mb-7'>
                                        9:00 AM - 10:AM
                                    </div>
                                    <button className='clock-in-btn grn-btn' onClick={()=> {handleClockIn();}}>
                                       Clock in
                                    </button>
                                </div>
                            )}
                    </div>
                </div>
            </div>
        );
    };
    var password:any=[];
    const handleClockInClose =()=>{

    }
    const handlePassword = (val:any, evt:any) => {
        console.log(val);
        if(password.length <= 3)
        {
            password.push(val)
        }
        console.log(password.length);
    };
    const keypadbtn =[1,2,3,4,5,6,7,8,9,'*',0];
    const row1 =[1,2,3];
    const row2 =[4,5,6];
    const row3 =[7,8,9];
    const [pin, setPin] = useState('');

    const handleButtonClick = (value:any) => {
        if (pin.length < 4) {
        setPin(prevPin => prevPin + value);
        }
    };
    const [showModal, setShowModal] = useState(false);
    const [showClockinModal, setShowClockinModal] = useState(false);
    const handleCloseModal = () => {
        setShowModal(false);
        setPin('');
    };
    useEffect(() => {
        console.log('PIN state changed:', pin);
        if(pin.length == 4 ){
            if(pin == selectedStaffDetails?.pin_number){
                setisCorrectPin(true);
                console.log("crt")
            }
            else{
                setShowModal(true);
            }
        }
      }, [pin]); // Run this effect whenever pin state changes
    const handleClearButtonClick = () => {
        setPin('');
    };
    return (
        <>
            {showClockinModal && (<ClockInPopup popmessage="You’re all set! Clocked in at!" poptime="9:00 AM today" onClose={backToList} />)}
            {showModal && (<CustomPopup message="You have entered a wrong pin. Please try again!" onClose={handleCloseModal} />)}
            {isCorrectPin ? <Clockin /> : 
            <div className="h-full w75">
                { staffSelected ? 
                    <div className="list-container">
                        <div className="back-btn">
                            <div className='back-b'  onClick={backToList}> <Image className='back-icon' src={backIcon} alt='Back Icon' /> Back</div>
                        </div>
                        <div className="staff-cont">
                            {selectedStaffDetails && (
                            <div>
                                Hi, {selectedStaffDetails.staff_name}. Enter your pin:
                            </div>
                            )}
                        </div>
                        <div className="pin-display">
                            {[...Array(4)].map((_, index) => (
                            <div key={index} className={`pin-digit ${index < pin.length && 'filled'}`}></div>
                            ))}
                        </div>
                        <div className='key-pad-row'>
                            {keypadbtn.map((item,i) => {
                            return(
                                <button key={i} className={`key-btn ${item == '*' ? 'vis-hidden' : ''}`} onClick={() => {handleButtonClick(item);}}> {item}</button>
                            )})}
                            <button className="clear-btn-div" onClick={() => {handleClearButtonClick()}}>
                                <Image className="clear-btn" src={clearIcon} alt="Logo" />
                                </button>
                        </div>
                    </div> : <div className="list-container">
                        <div className="search-bar">
                            <input className="search-bar-input" placeholder="Search for a staff member" />
                        </div>
                        <div className="staff-list-cont">{staffList.map((item,i) => {
                            return(
                                <div key={i} className="staff-name"  onClick={(evt) => {handleOnClick(item, evt);}}> {item.staff_name}</div>
                            )})} 
                        </div>
                    </div>
                }
            </div>
        }    
        </>
    );
};

// export default StaffList;