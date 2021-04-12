// All my button override
const Button = {
  // The styles all button have in common
  baseStyle: {
    fontWeight: "medium",
    fontSize: "14px",
    lineHeight: "16px",
  },
  // 3 sizes: sm, md(default), lg
  sizes: {
    sm: {
      width: "111px",
      height: "32px",
      padding: "8px 16px",
    },
    md: {
      width: "127px",
      height: "32px",
      padding: "12px  24px",
    },

    lg: {
      width: "143px",
      height: "48px",
      padding: "16px  32px",
    },
  },
  // 3 variants: primary(solid), secondary , tertiary
  variants: {
    primary: {
      bg: "primaryTeal.600",
      color: "gray.50",
      fontWeight: "medium",
      borderRadius: "4px",
    },
    secondary: {
      border: "2px solid",
      borderColor: "primaryTeal.600",
    },
  },
  // The default size and variant values
  defaultProps: {
    variant: "primary",
    size: "md",
  },
};

export default Button;
