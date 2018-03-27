import { CategoryType } from "./Schemas";
import { Col, Row } from "reactstrap";
import { compose, mapProps, withState } from "recompose";
import LeftPanel from "./LeftPanel";
import PropTypes from "prop-types";
import React from "react";
import RightPanel from "../containers/RightPanel";

const App = ({ expanded, toggleExpand, config }) => (
  <Row style={{ width: "100%", minHeight: "100%" }}>
    <Col lg={expanded ? 10 : 3}>
      <LeftPanel toggleExpand={toggleExpand} expanded={expanded} />
    </Col>
    <Col lg={expanded ? 2 : 9}>
      <RightPanel collapse={expanded} categories={config.categories} />
    </Col>
  </Row>
);

App.propTypes = {
  expanded: PropTypes.bool.isRequired,
  toggleExpand: PropTypes.func.isRequired,
  config: PropTypes.shape({
    name: PropTypes.string.isRequired,
    categories: PropTypes.arrayOf(CategoryType)
  }).isRequired
};

const UiConfiguration = {
  name: "General",
  categories: [
    {
      name: "General",
      priority: "High",
      entries: [
        {
          id: "co-comment",
          name: "CO Comment",
          priority: "High",
          fields: [
            {
              name: "Comment",
              type: "text"
            }
          ]
        },
        {
          id: "manoeuvre",
          name: "Manoeuvre",
          priority: "Medium",
          fields: [
            {
              name: "Course",
              type: "angle"
            },
            {
              name: "Speed",
              type: "speed"
            },
            {
              name: "Comment",
              type: "text"
            }
          ]
        },
        {
          id: "oow-comment",
          name: "OOW Comment",
          priority: "Medium",
          fields: [
            {
              name: "Comment",
              type: "text"
            }
          ]
        },
        {
          id: "weather",
          name: "weather",
          priority: "High",
          fields: [
            {
              name: "wind speed",
              type: "speed"
            },
            {
              name: "wind direction",
              type: "angle"
            },
            {
              name: "cloud cover",
              type: "octas"
            },
            {
              name: "wind state",
              type: "wind-state"
            },
            {
              name: "wave height",
              type: "integer"
            },
            {
              name: "comment",
              type: "text"
            }
          ]
        },
        {
          id: "day-night",
          name: "Day night",
          priority: "High",
          fields: [
            {
              name: "State",
              type: "day-night"
            }
          ]
        }
      ]
    },
    {
      name: "Air",
      priority: "High",
      entries: [
        {
          id: "new-contact",
          name: "New Contact",
          priority: "High",
          fields: [
            {
              name: "Bearing",
              type: "angle"
            },
            {
              name: "Range",
              type: "distance"
            },
            {
              name: "Type",
              type: "text"
            },
            {
              name: "Comment",
              type: "text"
            }
          ]
        },
        {
          id: "helo-take-off",
          name: "Helo take off",
          priority: "High",
          fields: [
            {
              name: "Comment",
              type: "text"
            }
          ]
        },
        {
          id: "helo-landing",
          name: "Helo landing",
          priority: "High",
          fields: [
            {
              name: "Comment",
              type: "text"
            }
          ]
        }
      ]
    },
    {
      name: "Surface",
      priority: "High",
      entries: [
        {
          id: "new-contact",
          name: "New contact",
          priority: "High",
          fields: [
            {
              name: "Range",
              type: "distance"
            },
            {
              name: "Bearing",
              type: "angle"
            },
            {
              name: "Comment",
              type: "text"
            }
          ]
        },
        {
          id: "investigate-contact",
          name: "Investigate",
          priority: "High",
          fields: [
            {
              name: "Type",
              type: "text"
            },
            {
              name: "Comment",
              type: "text"
            }
          ]
        }
      ]
    },
    {
      name: "Underwater",
      priority: "High",
      entries: [
        {
          id: "new-contact-uww",
          name: "New contact",
          priority: "High",
          fields: [
            {
              name: "Range",
              type: "distance"
            },
            {
              name: "Bearing",
              type: "angle"
            },
            {
              name: "Suspected",
              type: "text"
            }
          ]
        },
        {
          id: "deploy-array",
          name: "Deploy array",
          priority: "High",
          fields: [
            {
              name: "Comment",
              type: "text"
            }
          ]
        },
        {
          id: "recover-array",
          name: "Recover array",
          priority: "High",
          fields: [
            {
              name: "Comment",
              type: "text"
            }
          ]
        },
        {
          id: "active-ping",
          name: "Active ping",
          priority: "High",
          fields: [
            {
              name: "Frequency",
              type: "text"
            }
          ]
        }
      ]
    },
    {
      name: "Engineering",
      priority: "High",
      entries: [
        {
          id: "eng-failure",
          name: "Failure",
          priority: "High",
          fields: [
            {
              name: "System",
              type: "text"
            },
            {
              name: "Comment",
              type: "text"
            }
          ]
        },
        {
          id: "change-lineup",
          name: "Change in line-up",
          priority: "High",
          fields: [
            {
              name: "System",
              type: "text"
            },
            {
              name: "Change",
              type: "text"
            }
          ]
        }
      ]
    }
  ]
};
const enhancer = compose(
  withState("expanded", "setExpand", false),
  mapProps(props => ({
    config: UiConfiguration,
    expanded: props.expanded,
    toggleExpand: () => props.setExpand(!props.expanded)
  }))
);

export default enhancer(App);
