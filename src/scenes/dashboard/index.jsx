import { Box,Button,IconButton,Typography,useTheme } from '@mui/material'
import React, { useRef } from 'react'
import { mockTransactions } from '../../data/mockData'
import { tokens } from '../../theme'
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined"
import EmailIcon from "@mui/icons-material/Email"
import PointOfSaleIcon from "@mui/icons-material/PointOfSale"
import PersonAddIcon from "@mui/icons-material/PersonAdd"
import TrafficIcon from "@mui/icons-material/Traffic"
import StatBox from '../../components/StatBox'
import Header from '../../components/Header'
import LineChart from '../../components/LineChart'
import GeographyChart from '../../components/GeographyChart'
import BarChart from '../../components/BarChart'
import ProgressCircle from '../../components/ProgressCircle'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
import { generatePDF } from '../../components/pdf'

const Dashboard = () => {

  const theme=useTheme()
  const colors=tokens(theme.palette.mode)
  const dashboardRef=useRef()
  const lineChartRef=useRef()
  //function to download the dashboard as a pdf
  const handleDownload=async()=>{
 generatePDF(dashboardRef.current,'dashboard.pdf')
}

const handleDownloadLineChart=()=>{
  generatePDF(lineChartRef.current,'lineChart.pdf')
}

  return (
    <Box m='20px' ref={dashboardRef} >
      <Box display='flex' justifyContent='space-between' alignItems='center'>
        <Header title='DASHBOARD' subtitle='Welcome to your dashboard'></Header>

        <Box >
          <Button sx={{
            background: colors.blueAccent[700],
            color: colors.grey[100],
            fontSize: '14px',
            fontWeight: 'bold',
            padding: '10px 20px'
          }}
          onClick={handleDownload}
          >
            <DownloadOutlinedIcon sx={{ mr: '10px' }}></DownloadOutlinedIcon>
            Download Reports
          </Button>
        </Box>
      </Box>

      {/* grid chart */}

      <Box
        display='grid'
        gridTemplateColumns='repeat(12,1fr)'
        gridAutoColumns='140px'
        gap='20px'
        mt='20px'
      >

        {/* row1 */}
        <Box
          gridColumn='span 3'
          backgroundColor={colors.primary[400]}
          display='flex'
          alignItems='center'
          justifyContent='center'
          p='20px 0'>
          <StatBox
            title='12,361'
            subtitle='Email Sent'
            progress='0.75'
            increase='+14%'
            icon={<EmailIcon sx={{ color: colors.greenAccent[600], fontSize: '26px' }}></EmailIcon>}
          >
          </StatBox>
        </Box>

        <Box
          gridColumn='span 3'
          backgroundColor={colors.primary[400]}
          display='flex'
          alignItem='center'
          justifyContent='center'
          p='20px 0'>
          <StatBox
            title='431,225'
            subtitle='Sales Obtained'
            progress='0.55'
            increase='+21%'
            icon={<PointOfSaleIcon sx={{ color: colors.greenAccent[600], fontSize: '26px' }}></PointOfSaleIcon>}
          />

        </Box>

        <Box
          gridColumn='span 3'
          backgroundColor={colors.primary[400]}
          display='flex'
          alignItem='center'
          justifyContent='center'
          p='20px 0'>
          <StatBox
            title='32441'
            subtitle='New Clients'
            progress='0.38'
            increase='+5%'
            icon={<PersonAddIcon sx={{ color: colors.greenAccent[600], fontSize: '26px' }} />}
          >
          </StatBox>
        </Box>

        <Box
          gridColumn='span 3'
          backgroundColor={colors.primary[400]}
          display='flex'
          alignItem='center'
          justifyContent='center'
          p='20px 0'>
          <StatBox
            title='1,325,134'
            subtitle='Traffic Received'
            progress='0.8'
            increase='+45%'
            icon={<TrafficIcon sx={{ color: colors.greenAccent[600], fontSize: '26px' }} />}
          >
          </StatBox>
        </Box>


        {/* Row2 */}
        {/* {line chart} */}
        <Box
          gridColumn='span 8'
          gridRow='span 2'
          backgroundColor={colors.primary[400]}
          ref={lineChartRef}
          >
          <Box
            mt='25px'
            p='0 30px'
            display='flex'
            alignItem='center'
            justifyContent='space-between'
            >
            <Box>
              <Typography variant='h5' fontSize='600' color={colors.grey[100]}>Revenue Generated</Typography>
              <Typography variant='h3' fontWeight='bold' color={colors.greenAccent[500]}>$59,020.33</Typography>
            </Box>

            <Box>
              <IconButton onClick={handleDownloadLineChart}>
                <DownloadOutlinedIcon
                  sx={{ fontSize: '26px', color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>

          <Box height='250px' mt='-20px'>
            <LineChart isDashboard={true} />
          </Box>

        </Box>
        {/* {recent trans} */}
        <Box
          gridColumn='span 4'
          gridRow='span 2'
          backgroundColor={colors.primary[400]}
          height='300px'
          overflow="auto"
        >
          <Box display='flex'
            justifyContent='space-between'
            alignItems='center'
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p='15px'
          >
            <Typography color={colors.grey[100]} variant='h5' fontWeight='600'>
              Recent Transactions</Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display='flex'
              justifyContent='space-between'
              alignItems='center'
              borderBottom={`4px solid ${colors.primary[500]}`}
              p='15px'
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant='h5'
                  fontWeight='600'
                >{transaction.txId}</Typography>
                <Typography color={colors.grey[100]}>{transaction.user}</Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
              <Box backgroundColor={colors.greenAccent[500]}
                p='5px 10px' borderRadius='4px'
              >${transaction.cost}</Box>
            </Box>

          ))
          }

        </Box>

        {/* row3 */}
        <Box
          gridColumn='span 4'
          gridRow='span 2'
          backgroundColor={colors.primary[400]}
          p='30px'>
          <Typography variant='h5' fontWeight='600'>Campign</Typography>
          <Box display='flex' flexDirection='column' alignItems='center' mt='25px' >
            <ProgressCircle size='125' />
            <Typography variant='h5' color={colors.greenAccent[500]} sx={{ mt: '15px' }}>$48,325 revenue generated</Typography>
            <Typography>Includes extra misc expenditures and costs</Typography>
          </Box>
        </Box>

        <Box
          gridColumn='span 4'
          gridRow='span 2'
          backgroundColor={colors.primary[400]}>
          <Typography variant='h5' fontWeight='600' sx={{ padding: '30px 30px 0 30px' }}>Sales Quantity</Typography>
          <Box height='250px' mt='-20px'>
            <BarChart></BarChart>
          </Box>

        </Box>

        <Box
          gridColumn='span 4' gridRow='span 2' backgroundColor={colors.primary[400]} padding='30px'>
          <Typography variant='h5' fontWeight='600' sx={{ marginBottom: '15px' }}>Geogrophy Bases Traffic</Typography>
          <Box height='200px'>
            <GeographyChart></GeographyChart>
          </Box>
        </Box>




      </Box>




    </Box>
  )
}

export default Dashboard