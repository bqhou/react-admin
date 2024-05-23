import { useTheme } from '@emotion/react'
import React from 'react'
import { tokens } from '../../theme'
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material'
import Header from '../../components/Header'

const FAQ = () => {

    const theme=useTheme()
    const colors=tokens(theme.palette.mode)

  return (
  <Box m='20px'>
    <Header title='FAQ' subtitle='Frequently Asked Questions page'></Header>

    <Accordion defaultExpanded>
        <AccordionSummary>
            <Typography color={colors.greenAccent[500]} variant='h5'>
                An Important Question
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
        </AccordionDetails>
    </Accordion>
    <Accordion defaultExpanded>
        <AccordionSummary>
            <Typography color={colors.greenAccent[500]} variant='h5'>
                An Important Question
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
        </AccordionDetails>
    </Accordion>
    <Accordion defaultExpanded>
        <AccordionSummary>
            <Typography color={colors.greenAccent[500]} variant='h5'>
                An Important Question
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
        </AccordionDetails>
    </Accordion>
    <Accordion defaultExpanded>
        <AccordionSummary>
            <Typography color={colors.greenAccent[500]} variant='h5'>
                An Important Question
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
        </AccordionDetails>
    </Accordion>
    <Accordion defaultExpanded>
        <AccordionSummary>
            <Typography color={colors.greenAccent[500]} variant='h5'>
                An Important Question
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
        </AccordionDetails>
    </Accordion>
  </Box>
  )
}

export default FAQ