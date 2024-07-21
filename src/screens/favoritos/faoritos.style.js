import { COLORS, FONT_SIZE } from "../../constants/theme";

export const styles = {
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 14,
  },
  containerList: {
    flexGrow: 1,
  },
  empty: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 60
  },
  emptyText: {
    color: COLORS.medium_gray,
    fontSize: FONT_SIZE.md,
    textAlign: "center"
  },
  logo: {
    width: 80,
    height: 80
  }
};
