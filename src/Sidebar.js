import React from 'react'
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import './Sidebar.css'
import { Avatar, IconButton } from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';
import SidebarChat from './SidebarChat';

const Sidebar = () => {
    return (
        <div className="sidebar"> 
            <div className="sidebar-header">
                <Avatar src="data:image/jpeg;base64,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" />
                <div className="sidebar-header-right">
                    <IconButton>
                        <DonutLargeIcon/>
                    </IconButton>
                    <IconButton>
                        <ChatIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>
            <div className="sidebar-searchbar">
                <div className="sidebar-searchbar-container">
                    <SearchOutlined/>
                    <input placeholder="Search or start new chat" type="text" />
                </div>
            </div>
            <div className="sidebar-chats">
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
            </div>
        </div>
    )
}

export default Sidebar