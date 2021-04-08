// my main theme entrypoint file
import { extendTheme } from "@chakra-ui/react";
import { theme as chakraTheme } from "@chakra-ui/react";
import colors from "./color";
import Button from "./Components/button";
import typography from "./typography";
import textStyles from "./textStyle";

const overrides = {
  ...chakraTheme,
  ...chakraTheme.fonts,
  ...typography,
  colors,
  textStyles,
  components: {
    Button,
  },
};

const customTheme = extendTheme(overrides);

export default customTheme;
