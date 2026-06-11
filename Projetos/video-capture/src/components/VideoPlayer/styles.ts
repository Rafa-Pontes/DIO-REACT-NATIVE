import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  media: {  // Mudamos o nome aqui
    flex: 1,
  },
  discardButton: {
    position: "absolute",
    top: 50,
    left: 20,
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 8,
    borderRadius: 50,
    zIndex: 10,
  },
  actionContainer: {
    position: "absolute",
    bottom: 40,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingHorizontal: 20,
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.6)",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 30,
    gap: 8,
  },
  primaryButton: {
    backgroundColor: "white",
  },
  actionText: {
    color: "white",
    fontSize: 16,
  },
  primaryActionText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
  }
});