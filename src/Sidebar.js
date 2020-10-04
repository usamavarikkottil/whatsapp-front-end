import React from 'react';
import "./Sidebar.css";
import { ChatRounded, DonutLargeRounded, MoreVert, SearchOutlined } from '@material-ui/icons';
import { Avatar, IconButton } from '@material-ui/core';
import SidebarChat from './SidebarChat';

function Sidebar() {
    return (
        <div className="sidebar">

            <div className="sidebar__header">
                <Avatar src="https://www.uokpl.rs/fpng/d/547-5470867_round-avatar-image.png" />
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeRounded />
                    </IconButton>
                    <IconButton>
                        <ChatRounded />
                    </IconButton>

                    <IconButton>
                        <MoreVert />
                    </IconButton>

                </div>
            </div>

            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined />
                    <input placeholder="Search or start a new chat" />
                </div>
            </div>

            <div className="sidebar__chats">
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>
        </div>
    );
}

export default Sidebar;
