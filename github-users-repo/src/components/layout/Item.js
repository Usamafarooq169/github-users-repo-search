import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import GitHubIcon from "@material-ui/icons/GitHub";
import DynamicFeedIcon from "@material-ui/icons/DynamicFeed";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

export default function Item(props) {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{ marginTop: 10 }}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <GitHubIcon style={{ width: "64", height: "64" }} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {props.name}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Main Focus:
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {props.id}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: "pointer" }}>
                  <a href={props.url} style={{ color: "black" }}>
                    <DynamicFeedIcon /> View on Github
                  </a>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
