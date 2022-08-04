import styled from "styled-components";
import { colors, space } from "~/styles";

export default {
  SliderContainer: styled.div`
    position: relative;
    width: 100%;

    .rhap_main-controls-button,
    .rhap_time {
      color: ${colors["white/neutral-0"]};
    }
    .rhap_progress-bar {
      background: ${colors["white/neutral-0"]};
    }

    .rhap_horizontal-reverse {
      margin-right: calc(${space[3]}px + 6px);
    }

    .rhap_progress-filled {
      background: ${colors["verde-claro"]};

      .rhap_play-pause-button {
      }
    }

    .rhap_play-pause-button {
      font-size: 55px;
      width: 55px;
      height: 55px;
    }
  `,
};
