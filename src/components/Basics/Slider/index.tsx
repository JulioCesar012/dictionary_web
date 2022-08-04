import S from "./styles";
import AudioPlayer from "react-h5-audio-player";
import { colors } from "~/styles";

const Slider = ({ path }) => {
  return (
    <S.SliderContainer>
      <AudioPlayer
        autoPlay={false}
        autoPlayAfterSrcChange={false}
        customAdditionalControls={[]}
        src={path[0]?.audio}
        showJumpControls={false}
        customVolumeControls={[]}
        layout="horizontal-reverse"
        style={{
          background: colors["transparent"],
          boxShadow: "none",
          color: colors["white/neutral-0"],
        }}
      />
    </S.SliderContainer>
  );
};

export default Slider;
