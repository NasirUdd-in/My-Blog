import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Allblog from '../Allblog/Allblog';



const Searchkeywords = () => {
  const [age, setAge] = React.useState('');
  

  const handleChange = (event) => {
    setAge(event.target.value);
    
  };
  return (
    
    <div className="flex flex-col h-screen justify-center items-center bg-white">
     <div>
     <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Topics</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value="frontend">Frontend</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
     </div>
     
    <div >
    <Allblog age={age}  />
    </div>
    
    </div>
    
  );
};

export default Searchkeywords;
