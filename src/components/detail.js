import { Typography } from '@mui/material';
import { Stack } from '@mui/system';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Detail = ({list , data, isLight}) => {
    
    
  return (
    <div>
            <Typography variant="h5" textAlign="center" mb={2}> results for {data?.data?.city?.name} </Typography>
       <Stack spacing={3}  alignItems="center" mb={3}>
            <Box sx={{ width: '60%' }}>
            <Grid container rowSpacing={3} columnSpacing={{ xs: 5, sm: 5, md: 5 }}>
       {list.map((elem,idx)=>{
          return(

              <Grid item xs={3} key={idx}>
                 <Item className={isLight === true ? "card": "dark-card"}>
                      <Typography variant='h6'>Date : {elem.dt_txt}</Typography>
                      <Typography variant='h6'>{Math.floor(elem.main.temp-273)}&deg;C</Typography>
                      <Typography variant='h6'>Humidity : {elem.main.humidity} %</Typography>
                      <Typography variant='h6'>{elem.weather[0].description}</Typography>
                      <Box width="10rem">
                      <img  src={Math.floor(elem.main.temp-273) > 25 ? ("https://cdn-icons-png.flaticon.com/512/3222/3222800.png")
                       : ((Math.floor(elem.main.temp-273) < 25 && Math.floor(elem.main.temp-273) > 19 ) ? ("https://cdn-icons-png.flaticon.com/128/7780/7780231.png")
                       :("https://cdn-icons-png.flaticon.com/128/7865/7865939.png")
                     )} alt="climate"/>
                     </Box>
                 </Item>
              </Grid>
              
            
          );
        })}
         </Grid>
          </Box>
        </Stack>
        </div>
  )
}
export default Detail