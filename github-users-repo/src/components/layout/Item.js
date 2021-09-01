import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";

import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

import FingerprintOutlinedIcon from "@material-ui/icons/FingerprintOutlined";
import GitHubIcon from "@material-ui/icons/GitHub";
import CodeIcon from "@material-ui/icons/Code";
import LinkIcon from "@material-ui/icons/Link";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px",
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function Item(props) {
  const classes = useStyles();

  return (
    // <div className={classes.root} style={{ marginTop: 10 }}>
    //   <Paper className={classes.paper}>
    //     <Grid container spacing={2}>
    //       <Grid item>
    //         <ButtonBase className={classes.image}>
    //           <GitHubIcon style={{ width: "64", height: "64" }} />
    //         </ButtonBase>
    //       </Grid>
    //       <Grid item xs={12} sm container>
    //         <Grid item xs container direction="column" spacing={2}>
    //           <Grid item xs>
    //             <Typography gutterBottom variant="subtitle1">
    //               {props.name}
    //             </Typography>
    //             <Typography variant="body2" gutterBottom>
    //               Main Focus:
    //             </Typography>
    //             <Typography variant="body2" color="textSecondary">
    //               {props.id}
    //             </Typography>
    //           </Grid>
    //           <Grid item>
    //             <Typography variant="body2" style={{ cursor: "pointer" }}>
    //               <a href={props.url} style={{ color: "black" }}>
    //                 <DynamicFeedIcon /> View on Github
    //               </a>
    //             </Typography>
    //           </Grid>
    //         </Grid>
    //       </Grid>
    //     </Grid>
    //   </Paper>
    // </div>

    <>
      <Timeline align="alternate">
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="body2" color="textSecondary">
              Repository Details
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot>
              <FingerprintOutlinedIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                Repository ID
              </Typography>
              <Typography>{props.id}</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <GitHubIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                Repository Name
              </Typography>
              <Typography>{props.name}</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary" variant="outlined">
              <CodeIcon />
            </TimelineDot>
            <TimelineConnector className={classes.secondaryTail} />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                Major Programming Language
              </Typography>
              <Typography>
                {props.focusLanguage ? props.focusLanguage : "N/A"}
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="secondary">
              <LinkIcon />
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                View on Github
              </Typography>
              <Typography>
                <Link href={props.url}>Click here</Link>
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </>
  );
}
