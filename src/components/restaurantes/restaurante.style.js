import { COLORS, FONT_SIZE } from "../../constants/theme";

export const styles = {
  restaurante: {
    flexDirection: "row",
    backgroundColor: COLORS.white,
    alignItems: "center",
    margin: 8
  },
  logotipo: {
    width: 80,
    height: 80,
    marginRight: 10,
    borderRadius: 6
  },
  textos: {
   flex: 1,
   padding: 8
  },
  nome: {
    color: COLORS.dark_gray,
    marginBottom: 3,
    fontSize: FONT_SIZE.sm
   },
   endereco: {
    color: COLORS.medium_gray,
    fontSize: FONT_SIZE.xsm
   },
  icon: {
    width: 25,
    height: 25,
  }
};
