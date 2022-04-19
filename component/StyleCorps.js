import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
  vue2: {
    width: "100%",
    paddingTop: 16,
    paddingLeft: 16,
  },
  vue3: {
    padding: 20,
    marginVertical: 4,
    alignItems: "center",
  },
  vue4: {
    alignItems: "center",
    marginVertical: 14,
  },
  vue5: {
    flexDirection: "row",
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    height: "8%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 70,
  },
  chevron: {
    fontSize: 18,
    padding: 12,
    borderRadius: 10,
  },
  container1: {
    color: "blue",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    borderRadius: 100,
    marginRight: 10,
  },
  text: {
    fontSize: 12,
    fontWeight: "500",
    letterSpacing: 1,
    color: "white",
    textTransform: "uppercase",
  },
  text2: {
    fontSize: 12,
    fontWeight: "400",
    letterSpacing: 1,
    opacity: 0.5,
    lineHeight: 20,
    maxWidth: "85%",
    maxHeight: 44,
    marginBottom: 18,
  },
  text3: {
    fontSize: 24,
    fontWeight: "600",
    letterSpacing: 0.5,
    marginVertical: 4,
    maxWidth: "84%",
  },
  bouton: {
    backgroundColor: "blue",
    height: "90%",
    width: "86%",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
  minibouton: {
    backgroundColor: "skyblue",
    height: Dimensions.get("screen").height / 10,
    width: Dimensions.get("screen").width / 3,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
});
