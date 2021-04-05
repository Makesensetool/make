import React, { useState, useEffect } from "react";
import "./MobileMainView.scss";
import Scrollbars from "react-custom-scrollbars";
import { ISize } from "../../interfaces/ISize";
import { AppState } from "../../store";
import { connect } from "react-redux";
import classNames from "classnames";
import { EditorFeatureData } from "../../data/info/EditorFeatureData";
import { ISocialMedia, SocialMediaData } from "../../data/info/SocialMediaData";
import { ImageButton } from "../Common/ImageButton/ImageButton";
import { Auth } from "aws-amplify";

interface IProps {
  size: ISize;
}

const MobileMainView: React.FC<IProps> = ({ size }) => {
  const scrollPositionThreshold: number = 350;
  const [scrollPosition, setScrollPosition] = useState(0);
  const [users, setuser] = useState();

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((user) => console.log(setuser(user.attributes.email)))
      .catch((err) => console.log(err));
  });

  const getClassName = () => {
    return classNames("MobileTopNavigationBar", {
      Hide: scrollPosition < scrollPositionThreshold,
      Show: scrollPosition >= scrollPositionThreshold,
    });
  };
  const signOut = () => {
    try {
      Auth.signOut({ global: true });
    } catch (error) {
      console.log("error signing out: ", error);
    }
    console.log("you are signed out");
  };
  const onScroll = (value) => {
    setScrollPosition(value.scrollTop);
  };

  const getEditorFeatureTiles = (features) => {
    return features.map((data) => {
      return (
        <div className="EditorFeaturesTiles" key={data.displayText}>
          <div className="EditorFeaturesTilesWrapper">
            <img draggable={false} alt={data.imageAlt} src={data.imageSrc} />
            <div className="EditorFeatureLabel">{data.displayText}</div>
          </div>
        </div>
      );
    });
  };

  const getSocialMediaButtons = (size: ISize) => {
    return SocialMediaData.map((data: ISocialMedia, index: number) => {
      return (
        <ImageButton
          key={index}
          buttonSize={size}
          image={data.imageSrc}
          imageAlt={data.imageAlt}
          href={data.href}
        />
      );
    });
  };

  const firstStage = (
    <div className="FirstStage">
      <img draggable={false} alt={"main-logo"} src={"ico/DMI-removebg.png"} />
    </div>
  );

  const secondStage = (
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

  const fourthStage = (
    <div className="FourthStage">
      <div className="Message">
        Due to the small size of the screen we do not support our editor on
        mobile devices. Check what you missed and visit us from a desktop.
      </div>
    </div>
  );

  return (
    <div className="MobileMainView">
      <Scrollbars onScrollFrame={onScroll}>
        <div className="MobileMainViewContent" style={{ width: size.width }}>
          {firstStage}
          {secondStage}
          {fourthStage}
        </div>
      </Scrollbars>
    </div>
  );
};

const mapDispatchToProps = {};

const mapStateToProps = (state: AppState) => ({
  size: state.general.windowSize,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MobileMainView);
