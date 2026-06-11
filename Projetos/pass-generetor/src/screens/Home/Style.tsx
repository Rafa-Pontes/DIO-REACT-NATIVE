import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
    paddingTop: 50,
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#e5e7eb",
  },

  LogoContainer:{
    flexDirection: "column",
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 60,
    paddingTop: 20,
    paddingBottom: 10
  },
  inputContainer:{
    width: '80%',
    alignItems: 'center',
    flexDirection: 'column'
  }
});
