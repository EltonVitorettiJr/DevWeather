import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        //espaçamento padrão do topo da tela definido pelo celular
        headerShown: false,
        //estilos do container
        contentStyle: { backgroundColor: "#f5f5f5" },
      }}
    />
  );
}
