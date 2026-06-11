import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  overlay: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "space-between",
    padding: 20,
  },
  topControls: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 50,
  },
  iconButton: {
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 12,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  
  // Novo layout para alinhar os botões em linha
  bottomControls: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", // Espalha os botões
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  // Espaçador invisível para manter o botão de gravar perfeitamente no centro
  spacer: {
    width: 50,
    height: 50,
  },
  iconButtonBottom: {
    backgroundColor: "rgba(0,0,0,0.5)",
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  
  recordButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 5,
    borderColor: "white",
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
  recordingActive: {
    borderColor: "rgba(255, 0, 0, 0.5)",
  },
  recordingSquare: {
    width: 30,
    height: 30,
    backgroundColor: "red",
    borderRadius: 5,
  },
});