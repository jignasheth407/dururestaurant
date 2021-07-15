import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "../checkinpage/checkin.scss";
import { AiOutlineCopyright } from "react-icons/ai";
import logo from "../../assets/Oval.png";
import smlogo from "../../assets/image8.png";
import itemimg from "../../assets/Ellipse3.png";
import itemsec from "../../assets/Ellipse4.png";
import itemthr from "../../assets/Ellipse5.png";
import itemfr from "../../assets/Ellipse7.png";
import itemfv from "../../assets/Ellipse9.png";
import itemsix from "../../assets/Ellipse10.png";
import itemsvn from "../../assets/Ellipse12.png";
import itemegt from "../../assets/Ellipse14.png";
import itemnn from "../../assets/Ellipse15.png";
import itemten from "../../assets/Ellipse17.png";
import itemelvn from "../../assets/Ellipse19.png";
import itemtwl from "../../assets/Ellipse20.png";
import signature from "../../assets/signature.png";
import alreadyhaveaccount from "../../assets/Alreadyhaveaccount.png";

import {
  Container,
  Avatar,
  Typography,
  Button,
  TextField,
  Link,
  Box,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  icons: {
    display: "flex",
    justifyContent: "space-between",
  },
  pink: {
    color: "theme.palette.getContrastText(pink[500])",
    backgroundColor: "#ffcf33",
  },
  green: {
    color: "#fff",
    backgroundColor: "#4caf50",
  },
  light: {
    color: "#fff",
    backgroundColor: "#d7e360",
  },
  btn: {
    display: "block",
    width: "100%",
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <Container>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
              <Box className="smlogo"> <img src={smlogo}/></Box>
           
            <Paper elevation={0} className={classes.paper}>
             <Box className="main_content">
              <Typography variant="h4">Successful Check-In</Typography>
              <img src={logo} />
              <Typography variant="h5">Duru Restaurant</Typography>
              <Button variant="contained" className="primary_btn">
                English
              </Button>
              <Button variant="outlined" className="dark">
                Deutsch
              </Button>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Paper elevation={0} className="content">
              <Typography variant="h4">Hello Guest,</Typography>
              <Typography variant="h6">
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                consectetur, Lorem Ipsum is simply dummy text of the
                printing and typesetting industry.
              </Typography>
              <Typography variant="h6">
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                consectetur, simply dummy text of the printing
                and typesetting industry.
              </Typography>
              <Typography variant="h6">
                Neque porro quisquam est qui dolorem, Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </Typography>
              <Box className="sgn_text">
              <img src={signature}/>
              <Typography variant="caption" display="block" gutterBottom>
                Umut Delil,
              </Typography>
              <Typography variant="caption" display="block" gutterBottom>
                Founder Gastropro
              </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Paper elevation={0} className="classes.root">
                <Box className="last_content">
                <Typography variant="h6" display="inline" gutterBottom>
                Your name
              </Typography>
              <Typography variant="caption" display="inline" gutterBottom>
                optional
              </Typography>
              <Typography variant="body1" display="block" gutterBottom>
                if empty, you will be call guest.
              </Typography>
                </Box>
              
              <form className={classes.root}  autoComplete="off">
                <TextField
                  id="outlined-basic"
                  fullWidth
                  placeholder="Your first name (Guest)"
                  variant="outlined"
                />
              </form>
              <Box className="last_content">
              <Typography variant="h6" display="inline" gutterBottom>
                Your profile picture
              </Typography>
              <Typography variant="caption" display="inline" gutterBottom>
                optional
              </Typography>
              <Typography variant="body1" display="block" gutterBottom>
                Choose your profile picture
              </Typography>
              </Box>
              
              <div className={classes.icons}>
                <img src={itemimg} />
                <img src={itemsec} />
                <img src={itemthr} />
                <img src={itemfr} />
                <img src={itemfv} />
                <img src={itemsix} />
              </div>
              <div className={classes.icons}>
                <img src={itemsvn} />
                <img src={itemegt} />
                <img src={itemnn} />
                <img src={itemten} />
                <img src={itemelvn} />
                <img src={itemtwl} />
              </div>
              <Button
                variant="contained"
                className={classes.btn}
              >
                Start ordering
              </Button>
              <Box className="policy_text">
               <Typography variant="h6">
                By clicking "Start ordering" I have confirm I have read and
                accept <Link href="#">turms of use</Link> and
                <Link href="#"> privacy policy</Link>.
              </Typography>
              </Box>
            </Paper>
            
          </Grid>
        </Grid>
       
      </div>
            <Box className="copy_text">
            <Typography variant="h6">
                <AiOutlineCopyright/> 2021 Gastropro. All rights reserved. -
                <Link href="#">Imprint</Link>
            </Typography>
            </Box>
    </Container>
  );
}
