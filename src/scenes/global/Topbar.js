import {Box,IconButton} from '@mui/material'
import { useTheme } from '@mui/material/styles';
import { useContext } from 'react'
import {ColorModeContext,tokens} from '../../theme'

import InputBase from '@mui/material/InputBase'
import LightModeOutlineIcon from '@mui/icons-material/LightModeOutlined'
import DarkModeOutlineIcon from '@mui/icons-material/DarkModeOutlined'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import SettingsOutlineIcon from '@mui/icons-material/SettingsOutlined'
import PersonOutlineIcon from '@mui/icons-material/PersonOutlined'
import SearchIcon from '@mui/icons-material/Search'
// import styled from '@emotion/styled'

const Topbar = () => {
    const theme=useTheme()
    const colors=tokens(theme.palette.mode)
    const colorMode=useContext(ColorModeContext)

    // const styledbox=styled(Box)
  return (
    <Box display='flex' justifyContent='space-between' p={2}>
        
    <Box 
    display='flex' 
    backgroundColor={colors.primary[400]}
    borderRadius='3px'>
        <InputBase sx={{ml:2, flex:10}} placeholder='Search'></InputBase>
        <IconButton type='button' sx={{p:1}}>
            <SearchIcon></SearchIcon>
        </IconButton>
    </Box>

    <Box display='flex'>
    <IconButton onClick={colorMode.toggleColorMode}>
        {theme.palette.mode==='dark'?(
            <DarkModeOutlineIcon/>
        ):(
            <LightModeOutlineIcon/>
        )}
        
    </IconButton>
    
    <IconButton ><NotificationsOutlinedIcon></NotificationsOutlinedIcon></IconButton>
    <IconButton ><SettingsOutlineIcon></SettingsOutlineIcon></IconButton>
    <IconButton ><PersonOutlineIcon></PersonOutlineIcon></IconButton>

    </Box>
    </Box>
  )
}

export default Topbar