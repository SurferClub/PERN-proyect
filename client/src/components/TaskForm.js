import {
  Grid,
  Card,
  Typography,
  CardContent,
  TextField,
  Button,
  CircularProgress,
} from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function TaskForm() {
  const navigate = useNavigate();
  const params = useParams()
  const [editing, setEditing] = useState(false)
  const [task, setTask] = useState({
    title: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (editing){
        await fetch(`http://localhost:4000/tasks/${params.id}`,{
          method:"PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(task)
        })
    } else {
      const res = await fetch("http://localhost:4000/tasks", {
        method: "POST",
        body: JSON.stringify(task),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      console.log(data);  
    }
    

    setLoading(false);
    navigate("/");

  };

  
  const handleChange = (e) => 
    setTask({ ...task, [e.target.name]: e.target.value });
    //console.log(e.target.name, e.target.value);
  
  const loadTask =  async (id)=> {
    const res = await fetch(`http://localhost:4000/tasks/${id}`)
    const data = await res.json()
    console.log(data)
    setTask({title:data.title, description:data.description})
    setEditing(true)
  }
  useEffect(()=> {
    if (params.id) {
      loadTask(params.id)
    }
  },[params.id])

  return (
    <Grid container direccion="column">
      <Card
        sx={{ mt: 5 }}
        style={{
          backgroundColor: "#1e272e",
          padding: "1rem",
        }}
      >
        <Typography textAlign="center" variant="5" color="white">
          {editing ? "Edit Task": "Create Task"}
        </Typography>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <TextField
              sx={{
                display: "block",
                margin: "0.5rem 0",
              }}
              value={task.title}
              variant="filled"
              label="Write your title"
              inputProps={{ style: { color: "white" } }}
              InputLabelProps={{ style: { color: "white" } }}
              name="title"
              onChange={handleChange}
            />

            <TextField
              value={task.description}
              name="description"
              onChange={handleChange}
              variant="filled"
              multiline
              rows={4}
              inputProps={{ style: { color: "white" } }}
              InputLabelProps={{ style: { color: "white" } }}
              label="Write your description"
              sx={{
                display: "block",
                margin: ".5rem 0",
              }}
            />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              disabled={!task.title || !task.description}
            >
              {loading ? (<CircularProgress color="inherit" size={24} />) : (
                ""
              )}
              {editing ? "Edit": "Save"}
            </Button>
          </form>
        </CardContent>
        <CardContent></CardContent>
      </Card>
    </Grid>
  );
}

export default TaskForm;
