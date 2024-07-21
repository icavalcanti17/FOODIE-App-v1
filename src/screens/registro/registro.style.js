import { COLORS, FONT_SIZE } from "../../constants/theme";

export const styles = {
    container: {
        flex: 1,
        paddingLeft: 40,
        paddingRight: 40,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.white
    },
    form: {
        width: "100%",
        marginBottom: 25
    },
    formGroup: {
        width: "100%",
        marginTop: 50,
        marginBottom: 40
    },
    footer: {
        width: "100%",
        backgroundColor: COLORS.white,
        position: "absolute",
        bottom: 0,
        padding: 15,
        height: 50
    },
    footerText: {
        textAlign: "center",
        color: COLORS.dark_gray,
        fpntSize: FONT_SIZE.md
    },
    scrollview: {
        width: "100%"
    }
}
