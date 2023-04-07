import { Box, CircularProgress } from "@mui/material"

//Loading components
const Loading =()=>{
    return (
    //Loading progress UI component 
    <Box sx={{display:"flex", justifyContent:'center', mt:'5%'}}>
        <CircularProgress />
    </Box>
)
}

export default Loading
    
