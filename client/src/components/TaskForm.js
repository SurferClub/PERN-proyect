import { Grid, Card, Typography, CardContent, TextField,Button } from "@mui/material";
import e from "cors";
function TaskForm() {

  const handleSubmit= (e) => {
    e.preventDefault()

    console.log('submit')
  }

  const handleChange = (e) => {
    

    console.log(e.target.name,e.target.value)
  }

  return (
    <Grid container direccion="column">
      <Card sx={{ mt: 5 }}
      style={{
        backgroundColor:'#1e272e',
        padding:'1rem'
       }}
      >
        <Typography textAlign='center' variant="5" color='white'
        >Create Task</Typography>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <TextField 
            sx={{
              display:'block',
              margin:'0.5rem 0'
            }}
            variant='filled'
            label='Write your title'
            inputProps={{style: {color:"white"}}}
            InputLabelProps={{style: {color:'white'}}}
              name='title'
              onChange={handleChange}
              />

            <TextField 
            name="description"
            onChange={handleChange}
            variant='filled'
            multiline rows={4}
            inputProps={{style: {color:"white"}}}
            InputLabelProps={{style: {color:'white'}}}
            label='Write your description'
            sx={{
              display:'block',
              margin:'.5rem 0'
            }}
            />
            <Button variant='contained' color='primary' type='submit'>
              Save
            </Button>

          </form>
        </CardContent>
        <CardContent></CardContent>
      </Card>
    </Grid>
  );
}

export default TaskForm;
