import { Typography } from "@mui/material";
import { Stack } from "@mui/system";

const Footer = () => {
    return(
        <Stack>
            <Typography variant="h6" align="center" >
              Devloped By Ramkumar & Team.
            </Typography >
            <Typography variant="h6" align="center" >
              © | Privacy Policy
            </Typography>
            <Typography variant="h6" align="center" >
              <a href="https://www.github.com/RAMKUMARPAZHANIVEL" target="_blank" rel="noreferrer">
                Source Code
              </a>
            </Typography>
          
            </Stack>   
        
    );
}

export default Footer