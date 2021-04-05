import React, { useState, useEffect } from "react";
import "./MainView.scss";
import { TextButton } from "../Common/TextButton/TextButton";
import classNames from "classnames";
import { Tooltip } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import ImagesDropZone from "./ImagesDropZone/ImagesDropZone";
import { Auth } from "aws-amplify";

const MainView: React.FC = () => {
  const [projectInProgress, setProjectInProgress] = useState(false);
  const [projectCanceled, setProjectCanceled] = useState(false);
  const [users, setuser] = useState();

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((user) => console.log(setuser(user.attributes.email)))
      .catch((err) => console.log(err));
  });

  const startProject = () => {
    setProjectInProgress(true);
  };
  const signOut = () => {
    try {
      Auth.signOut({ global: true });
    } catch (error) {
      console.log("error signing out: ", error);
    }
    console.log("you are signed out");
  };

  const endProject = () => {
    setProjectInProgress(false);
    setProjectCanceled(true);
  };

  const getClassName = () => {
    return classNames("MainView", {
      InProgress: projectInProgress,
      Canceled: !projectInProgress && projectCanceled,
    });
  };

  const DarkTooltip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: "#171717",
      color: "#ffffff",
      boxShadow: theme.shadows[1],
      fontSize: 11,
      maxWidth: 120,
    },
  }))(Tooltip);

  const getEditorFeatureTiles = () => {
    return (
      <div>
        <div className="EditorFeaturesTiles">
          <div className="EditorFeaturesTilesWrapper">
            <img draggable={false} src={"/ico/open-source.png"} />
            <div className="EditorFeatureLabel">{users}</div>
          </div>
        </div>
        <div onClick={signOut} className="EditorFeaturesTiles">
          <div className="EditorFeaturesTilesWrapper">
            <img draggable={false} src={"ico/private.png"} />
            <div className="EditorFeatureLabel">
              <button>SignOut</button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className={getClassName()}>
      <div className="Slider" id="lower">
        <div className="TriangleVertical">
          <div className="TriangleVerticalContent" />
        </div>
      </div>
      <div className="Slider" id="upper">
        <div className="TriangleVertical">
          <div className="TriangleVerticalContent" />
        </div>
      </div>

      <div className="LeftColumn">
        <div className={"LogoWrapper"}>
          <img
            draggable={false}
            alt={"main-logo"}
            src={"ico/DMI-removebg.png"}
          />
        </div>
        <div className="EditorFeaturesWrapper">{getEditorFeatureTiles()}</div>
        <div className="TriangleVertical">
          <div className="TriangleVerticalContent" />
        </div>
        {projectInProgress && (
          <TextButton label={"Go Back"} onClick={endProject} />
        )}
      </div>
      <div className="RightColumn">
        <div />
        <ImagesDropZone />
        <div></div>
        {!projectInProgress && (
          <TextButton label={"Get Started"} onClick={startProject} />
        )}
      </div>
    </div>
  );
};

export default MainView;
