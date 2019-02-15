import React, { useContext } from "react";
import { DataContext } from "../providers/data";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import CardContent from "@material-ui/core/CardContent";
import { Typography } from "@material-ui/core";

export function Projects(props) {
  const { actionData, projectData } = useContext(DataContext);
  return (
    <div>
      {projectData.map(project => (
        <Project {...project} actionData={actionData} />
      ))}
    </div>
  );
}

export function Project(props) {
  const [expanded, setExpanded] = React.useState(false);
  const { classes } = props;
  function handleExpandClick() {
    setExpanded(!expanded);
  }
  const sid = props.id - 1;

  return (
    <Card>
      {console.log(props.actionData[0]["id"])}
      <CardHeader title={props.name} subheader={props.description} />
      <CardActions>
        <IconButton
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="Show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Actions />
      </Collapse>
    </Card>
  );
}

export function Actions(props) {
  const { actionData, projectData } = useContext(DataContext);
  return (
    <div>
      {actionData.map(project => (
        <Action {...project} />
      ))}
    </div>
  );
}

export function Action(props) {
  return (
    <CardContent>
      <Typography variant="p">-{props.description}</Typography>
      <Typography variant="p">-{props.notes}</Typography>
    </CardContent>
  );
}
