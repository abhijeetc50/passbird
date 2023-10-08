import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import logo from '../images/MetaKeep.png';

import DashboardContent from './DashboardContent';

const Sidebar = () => {
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#000" backgroundColor="#fbf2ec">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
            <img src={logo} alt="Logo" />
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink style={{ textColor :"#000" }}  exact to="/dashboard" activeClassName="activeClicked">
              <CDBSidebarMenuItem textColor="#000" icon="columns">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/tables" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Table Data</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
      
      <DashboardContent />
    </div>
  );
};

export default Sidebar;