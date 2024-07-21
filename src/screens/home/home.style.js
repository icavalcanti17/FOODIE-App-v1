import { COLORS, FONT_SIZE } from "../../constants/theme";

export const styles = {
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 14,
  },
  logo: {
    width: 140,
    height: 27,
  },
  cart: {
    width: 30,
    height: 30,
  },
  headerBar: {
    height: 45,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  busca: {
    marginBotton: 30,
    marginTop: 10,
  },
  destaques: {
    color: COLORS.dark_gray,
    marginBottom: 3,
    fontSize: FONT_SIZE.sm,
    fontWeight: 500,
    marginBotton: 10
   },
};
