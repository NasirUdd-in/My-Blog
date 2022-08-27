import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Allblog from "../Allblog/Allblog";
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

const Searchkeywords = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Container maxWidth="md">
    <Box sx={{ mt: 7, mb: 7 }}>
      <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 4 }}>
        <Grid item xs={3}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Featured Topics</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value="frontend">Frontend</MenuItem>
              <MenuItem value="backend">Backend</MenuItem>
              <MenuItem value="facebook">Facebook</MenuItem>
              <MenuItem value="youtube">Youtube</MenuItem>
              <MenuItem value="twitter">Twitter</MenuItem>
              <MenuItem value="salary">Salary</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={3}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value="web design">Web design</MenuItem>
              <MenuItem value="web development">web development</MenuItem>
              <MenuItem value="social media">Social media</MenuItem>
              <MenuItem value="accounts">Accounts</MenuItem>
              <MenuItem value="web design">Web Design</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={3}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value="it">IT</MenuItem>
              <MenuItem value="Marketing">Marketing</MenuItem>
              <MenuItem value="finance">Finanace</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={3}>
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
        </Grid>
        <Grid item xs={9}>
       
        </Grid>
        <Grid item xs={3}>
        <Button variant="outlined">Clear all filters</Button>
        </Grid>
      </Grid>
      <Box sx={{ mt: 7, mb: 7 }}>
      <Allblog age={age} />
      </Box>
     
    </Box>
    </Container>
  );
};

export default Searchkeywords;
