import React,{useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Paper } from '@mui/material';
import { Container } from '@mui/system';

export default function Student() {
    // paperStyle for css
    const paperStyle={padding:"50px 20px", width:600, margin:"20px auto"}
    // name address setter methods
    const[name,setName]=useState('')
    const[address,setAddress]=useState('')
    
    const[students,setStudents]=useState([])
    
    // handleClick for button, when user click "submit" button, data saving
    const handleClick=(e)=>{
        e.preventDefault()
        // input data to console
        const student={name,address}
        console.log(student)
        
        // fetch data to localhost postMapping
        fetch("http://localhost:8080/student/add",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(student)
        }).then(()=>{
            console.log("New Student added")
        })
    }

    // fetch student
    useEffect(()=>{
        fetch("http://localhost:8080/student/getAll")
        .then(res=>res.json())
        .then((result)=>{
          setStudents(result);
        }
      )
    },[])
  
    return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1},
      }}
      noValidate
      autoComplete="off"
    >
        {/* set container and paperStyle, let it looks more professional */}
    <Container>
    <Paper elevation={3} style={paperStyle}>
        {/* title, colored, underlined */}
        <h1 style={{color:"purple"}}><u>Add New Student</u></h1>
        
        {/* set 2 text fields for name and address */}
        {/* add fullwidth so each information per line */}
      <TextField id="outlined-basic" label="Student Name" variant="outlined" fullWidth
      value={name} //corresponding name and name setter
      onChange={(e)=>setName(e.target.value)}
      />
      <TextField id="outlined-basic" label="Student Address" variant="outlined" fullWidth
      value={address} ////corresponding address and its setter
      onChange={(e)=>setAddress(e.target.value)}
      />
      
      {/* add button for submitting input data */}
      <Button variant="contained" onClick={handleClick}>Submit</Button>
    
      {/* add a form to show student data */}
    <form>
    <h1>Students</h1>
    <Paper elevation={3} style={paperStyle}>
      {students.map(student=>(
        <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={student.id}>
         Id:{student.id}<br/>
         Name:{student.name}<br/>
         Address:{student.address}
        </Paper>
      ))
      }
    </Paper>
    </form>

    </Paper>
    </Container>
    </Box>
    
  );
}




