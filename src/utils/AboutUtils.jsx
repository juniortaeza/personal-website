import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import "../style/About.css";

import { useState } from "react";

function CustomTimelineItem({ title, date, connectorEnd = false }) {
  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot />
        {connectorEnd ? null : <TimelineConnector />}
      </TimelineSeparator>
      <TimelineContent>
        <Typography variant="body2">{title}</Typography>
        <Typography variant="caption">{date}</Typography>
      </TimelineContent>
    </TimelineItem>
  );
}

function CustomTimeline({ customTimelineItems }) {
  return (
    <Timeline
      position="right"
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          content: "none",
        },
      }}
    >
      {customTimelineItems.map((item, index) => (
        <CustomTimelineItem
          key={index}
          title={item.title}
          date={item.date}
          connectorEnd={item.connectorEnd}
        />
      ))}
    </Timeline>
  );
}

export { CustomTimelineItem, CustomTimeline };
