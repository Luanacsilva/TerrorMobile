import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#000" }, // Cor de fundo do cabeçalho
        headerTintColor: "#fff", // Cor do texto do cabeçalho
        headerTitleStyle: { fontWeight: "bold" }, // Estilo do título
      }}
    />
  );
}
