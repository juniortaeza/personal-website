import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import "../style/About.css";

import { useState } from "react";

function SkillsSection({ skills }) {
  return (
    <>
      <Typography
        style={{
          whiteSpace: "pre-line",
          display: "inline-block",
          fontWeight: "bold",
          marginTop: "2%",
          marginRight: "2%",
        }}
        variant="caption"
      >
        Skills:
      </Typography>
      <Typography
        style={{ whiteSpace: "pre-line", display: "inline-block" }}
        variant="caption"
      >
        {skills}
      </Typography>
    </>
  );
}

function HoverInfoContent({ description, skills, isSchool }) {
  return (
    <>
      <Typography
        style={{ whiteSpace: "pre-line", display: "block" }}
        variant="caption"
      >
        {description}
      </Typography>

      {!isSchool ? <SkillsSection skills={skills} /> : null}
    </>
  );
}

function HoverInfoCard({ description, img, width, height, skills, isSchool }) {
  return (
    <div className="hover-container">
      <img
        src={img}
        style={{
          maxWidth: width,
          maxHeight: height,
        }}
      />
      <HoverInfoContent
        description={description}
        skills={skills}
        isSchool={isSchool}
      />
    </div>
  );
}

function CustomTimelineItem({
  title,
  date,
  description = "N/A",
  img = null,
  width = "50%",
  height = "50%",
  skills = "N/A",
  isSchool = true,
  connectorEnd = false,
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <TimelineItem
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <TimelineSeparator>
        <TimelineDot />
        {connectorEnd ? null : <TimelineConnector />}
      </TimelineSeparator>
      <TimelineContent>
        <Typography variant="body2">{title}</Typography>
        <Typography variant="caption">{date}</Typography>
        {isHovered ? (
          <HoverInfoCard
            description={description}
            img={img}
            width={width}
            height={height}
            skills={skills}
            isSchool={isSchool}
          />
        ) : null}
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
          description={item.description}
          img={item.img}
          width={item.width}
          height={item.height}
          skills={item.skills}
          isSchool={item.isSchool}
          connectorEnd={item.connectorEnd}
        />
      ))}
    </Timeline>
  );
}

export { CustomTimelineItem, CustomTimeline };
