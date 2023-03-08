import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack'

export default function Header() {

  return (

      <Stack
      component='span'
      sx={{ 
        flexGrow: 1,
        Height: 300,
        width: '100%',
      }}
      >

        <Box
          sx={{
            mt:13,
            display:'flex',
            justifyContent:'center',
            flexDirection:'column',
            alignItems:'center',
          }}
        >
          <Typography  
            variant="subtitle2" 
            align='center' 
            display='inline'  
            color='#FFFFFF'
            sx={{ fontSize: 18, fontFamily: 'inherit'}}
          >
            Start shining.<br/>
            Start earning.<br/>
            With your beloved shots. 
          </Typography>
          <br/>
          <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, mb: 13}}
          >

            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search..."
              inputProps={{ 'aria-label': 'search google maps' }}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
            </IconButton>

          </Paper>
        </Box>
      </Stack>

  )
}
