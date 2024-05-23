import React, { useState } from 'react'
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from '@mui/material'
import { Link } from 'react-router-dom';
import 'react-pro-sidebar/dist/css/styles.css';

import { tokens } from '../../theme'
import HomeOutlineIcon from '@mui/icons-material/HomeOutlined'
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutlined'
import ContactsOutlineIcon from '@mui/icons-material/ContactsOutlined'
import ReceiptOutlineIcon from '@mui/icons-material/ReceiptOutlined'
import CalendarOutlineIcon from '@mui/icons-material/CalendarTodayOutlined'
import HelpOutlineIcon from '@mui/icons-material/HelpOutlined'
import BarChartOutlineIcon from '@mui/icons-material/BarChartOutlined'
import PieChartOutlineIcon from '@mui/icons-material/PieChartOutlined'
import TimelineOutlineIcon from '@mui/icons-material/TimelineOutlined'
import MenuOutlineIcon from '@mui/icons-material/MenuOutlined'
import MapOutlineIcon from '@mui/icons-material/MapOutlined'
import PersonOutlined from '@mui/icons-material/PersonOutlined';

const Item=({title, to, icon, selected,setSelected})=>{
  const theme=useTheme()
  const colors=tokens(theme.palette.mode)
  return (
    <MenuItem
    active={selected===title}
    style={{
      color:colors.grey[100]
    }}
    onClick={()=>setSelected(title)}
    icon={icon}>
      <Typography>{title}</Typography>
      <Link to={to}/>
    </MenuItem>
    

  )
}

const Sidebar = () => {

  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const [isCollapsed, setIscollapsed] = useState(false)
  const [selected, setSelected] = useState('Dashboard')

  return (
    <Box 
      sx={{
        '& .pro-sidebar-inner': {
          background: `${colors.primary[400]} !important`
        },
        '& .pro-icon-wrapper': {
          backgroundColor: 'transparent !important'
        },
        '& .pro-inner-item': {
          padding: '5px 35px 5px 20px !important'
        },
        '& .pro-inner-item:hover': {
          color: '#868dfb !important'
        },
        '& .pro-menu-item.active': {
          color: '#6870fa !important'
        },
      }}>

      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape='square'>
          {/* logo and menu icon */}

          <MenuItem
            onClick={() => setIscollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlineIcon /> : undefined}
            style={{
              margin: '10px 0 20px 0',
              color: colors.grey[100]
            }}
          >
            {!isCollapsed && (
              <Box
                display='flex'
                justifyContent='space-between'
                alignItems='center'
                ml='15px'>
                <Typography  variant='h3' color={colors.grey[100]}>
                  Admins
                </Typography >
                
                <IconButton 
                onClick={() => setIscollapsed(!isCollapsed)}
                >
                  <MenuOutlineIcon></MenuOutlineIcon>
                </IconButton>

              </Box>
            )}
          </MenuItem>

          {!isCollapsed&&(
            <Box mb='25px'>
             <Box display='flex' justifyContent='center' alignContent='center'>
             <img
                alt='profile-user'
                width='100px'
                height='100px'
                src={`../../assets/user.png`}
                style={{cursor:'pointer', borderRadius:'50%'}}
                ></img>
             </Box>

             <Box textAlign='center'>
                <Typography variant='h2' 
                color={colors.grey[100]}
                fontWeight='bold'
                sx={{m:'10px 0 0 0'}}
                >
                  Beth Hou
                </Typography>
                <Typography variant='h5' color={colors.greenAccent[500]}> 
                VP Admins
                </Typography>
             </Box>
              
            </Box>
          )}

          <Box paddingLeft={isCollapsed? undefined:'10%'}>
            <Item
              title='Dashboard'
              to='/'
              icon={<HomeOutlineIcon/>}
              selected={selected}
              setSelected={setSelected}
              ></Item>

              <Typography
              variant='h6'
              color={colors.grey[300]}
              sx={{m:'15px 0 5px 20px'}}
              >
                Data
              </Typography>

              <Item
              title='Manage Team'
              to='/team'
              icon={<PeopleOutlineIcon/>}
              selected={selected}
              setSelected={setSelected}
              ></Item>

            <Item
              title='Contacts Information'
              to='/contacts'
              icon={<ContactsOutlineIcon />}
              selected={selected}
              setSelected={setSelected}
            ></Item>

            <Item
              title='Invoices Balances'
              to='/invoices'
              icon={<ReceiptOutlineIcon/>}
              selected={selected}
              setSelected={setSelected}
              ></Item>

             <Typography
             variant='h6'
             color={colors.grey[300]}
             sx={{m:'15px 0 5px 20px'}}
             
             >Page</Typography>

<Item
              title='Profile Form'
              to='/form'
              icon={<PersonOutlined/>}
              selected={selected}
              setSelected={setSelected}
              ></Item>
<Item
              title='Calendar'
              to='/calendar'
              icon={<CalendarOutlineIcon/>}
              selected={selected}
              setSelected={setSelected}
              ></Item>

<Item
              title='FAQ Page'
              to='/faq'
              icon={<HelpOutlineIcon/>}
              selected={selected}
              setSelected={setSelected}
              ></Item>

<Typography
             variant='h6'
             color={colors.grey[300]}
             sx={{m:'15px 0 5px 20px'}}
             
             >Charts</Typography>

<Item
              title='Pie Charts'
              to='/pie'
              icon={<PieChartOutlineIcon/>}
              selected={selected}
              setSelected={setSelected}
              ></Item>

<Item
              title='Line Charts'
              to='/line'
              icon={<TimelineOutlineIcon/>}
              selected={selected}
              setSelected={setSelected}
              ></Item>
              <Item
              title='Geography Charts'
              to='/geography'
              icon={<MapOutlineIcon/>}
              selected={selected}
              setSelected={setSelected}
              ></Item>


            
          </Box>



        </Menu>

      </ProSidebar>

    </Box>

  )
}

export default Sidebar
