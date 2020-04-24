import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  primaryDark: { color: "$primaryDark" },
  countryContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
    marginLeft: "$screenWidth * 0.05"
  },
  separator: {
    width: "$screenWidth * 0.9",
    marginLeft: "$screenWidth * 0.05"
  },
  countryImage: {
    height: 100,
    width: 100,
    borderRadius: 10
  },
  countryText: { fontFamily: "$bold", fontSize: 18, marginLeft: 10 },
  shadowBox: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5
  }
});

export default styles;
