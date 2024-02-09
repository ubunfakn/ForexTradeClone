import React, { useState } from 'react'
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import '../CSS/Sidebar.css'

export default function Sidebar() {
    const [showTradeOPtion, setShowTradeOption] = useState(false);
    const [showFundOption,setShowFundOPtion] = useState(false);
    const [showTerminalDownloadLink, setShowTerminalDownloadLink] = useState(false);
    return (
        <div className="sidebar">
            <div className="sidebar-logo mt-3">
                <img src={logo} alt="Logo" style={{width:"150px", height:"30px"}} />
            </div>
            <div id='link_div' className="mt-4">
                <div className='d-flex p-3 hover_links' id="dashboard_link">
                    <i className="fa-solid fa-house mt-1"></i>
                    <h6 className='ml-3'>Dashboard</h6>
                </div>
                <div className='d-flex p-3 hover_links mt-1' id="my_profile_link">
                    <i className="fa-regular fa-user mt-1" style={{ fontSize: "1vw" }}></i>
                    <h6 className='ml-3'>My Profile</h6>
                </div>
                <div className='d-flex p-3 hover_links mt-1' id="manage_account_link">
                    <i className="fa-solid fa-gear mt-1" style={{ fontSize: "0.9vw" }}></i>
                    <h6 className='ml-3'>Manage Accounts</h6>
                </div>
                <div onClick={()=>setShowTradeOption(!showTradeOPtion)} className='d-flex p-3 hover_links mt-1' id="all_trades_link">
                    <i className="fa-solid fa-chart-simple mt-1" style={{ fontSize: "1vw" }}></i>
                    <h6 className='ml-3'>All Trades</h6>
                    <i
                        style={{ marginLeft: "47%", cursor: "pointer", transition: "transform 0.3s" }}
                        className={`fa-solid fa-chevron-down ${showTradeOPtion ? 'rotate' : ''}`}
                    ></i>
                </div>
                <div className={`ml-3 trade-options ${showTradeOPtion ? 'show' : ''}`}>
                    <div className='d-flex p-3 mt-1' id="live_trades_link">
                        <h6 className='ml-3'>Live Trades</h6>
                    </div>
                    <div className='d-flex p-3 mt-1' id="demo_trades_link">
                        <h6 className='ml-3'>Demo Trades</h6>
                    </div>
                </div>
                <div className='d-flex p-3 hover_links mt-1' id="ibrequest_link">
                    <i className="fa-solid fa-sliders mt-1" style={{ fontSize: "0.8vw" }}></i>
                    <h6 className='ml-3'>IB Requests</h6>
                </div>
                <div className='d-flex p-3 hover_links mt-1' id="wallet_transaction_link">
                    <i className="fa-solid fa-dollar-sign mt-1" style={{ fontSize: "0.8vw" }}></i>
                    <h6 className='ml-3'>Wallet Transactions</h6>
                </div>
                <div onClick={()=>setShowFundOPtion(!showFundOption)} className='d-flex p-3 hover_links mt-1' id="my_fund_link">
                    <i className="fa-solid fa-dollar-sign mt-1" style={{ fontSize: "0.8vw" }}></i>
                    <h6 className='ml-3'>My Fund</h6>
                    <i
                        style={{ marginLeft: "54%", cursor: "pointer", transition: "transform 0.3s" }}
                        className={`fa-solid fa-chevron-down ${showFundOption ? 'rotate' : ''}`}
                    ></i>
                </div>
                <div className={`ml-3 trade-options ${showFundOption ? 'show' : ''}`}>
                    <div className='d-flex p-3 mt-1' id="deposit_link">
                        <h6 className='ml-3'>Deposit</h6>
                    </div>
                    <div className='d-flex p-3 mt-1' id="withdraw_link">
                        <h6 className='ml-3'>Withdraw</h6>
                    </div>
                    <div className='d-flex p-3 mt-1' id="internal_transfer_link">
                        <h6 className='ml-3'>Internal Transfer</h6>
                    </div>
                </div>
                <div onClick={()=>setShowTerminalDownloadLink(!showTerminalDownloadLink)} className='d-flex p-2 hover_links mt-2' id="terminal_download_link">
                    <i className="fa-solid fa-link mt-1" style={{ fontSize: "0.8vw" }}></i>
                    <h6 className='ml-2'>Terminal Download Link</h6>
                    <i
                        style={{ marginLeft: "10%", cursor: "pointer", transition: "transform 0.3s" }}
                        className={`fa-solid fa-chevron-down ${showTerminalDownloadLink ? 'rotate' : ''}`}
                    ></i>
                </div>
                <div className={`ml-3 trade-options ${showTerminalDownloadLink ? 'show' : ''}`}>
                    <div className='d-flex p-3' id="wlm_link">
                        <h6 style={{fontSize:"15px"}} className='ml-3'>Windows | Linux | MacOS</h6>
                    </div>
                    <div className='d-flex p-3' id="ios_link">
                        <h6 style={{fontSize:"15px"}} className='ml-3'>IOS</h6>
                    </div>
                    <div className='d-flex p-3 mt-1' id="android_link">
                        <h6 style={{fontSize:"15px"}} className='ml-3'>Android</h6>
                    </div>
                </div>
                <div className='d-flex p-2 hover_links mt-2' id="my_tickets_link">
                    <i className="fa-solid fa-ticket mt-2" style={{ fontSize: "0.8vw" }}></i>
                    <h6 className='ml-2 p-1'>My Tickets</h6>
                </div>
                <div className='d-flex p-2 hover_links mt-2' id="my_tickets_link">
                    <i className="fa-solid fa-right-from-bracket mt-2" style={{ fontSize: "1vw" }}></i>
                    <h6 className='ml-2 p-1'>logout</h6>
                </div>
            </div>

        </div >
    )
}
