import Login from "./screens/login/login";
import Registro from "./screens/registro/registro.jsx";
import Registro2 from "./screens/registro2/registro2.jsx";
import Home from "./screens/home/home.jsx";
import Favoritos from "./screens/favoritos/favoritos.jsx";
import Pedidos from "./screens/pedidos/pedidos.jsx";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="pedidos"
          component={Pedidos}
          options={{
            headerShown: true,
            title: "Meus Pedidos",
            headerTitleAlign: "center",
            headerShadowVisible: false,
          }}
        />

        <Stack.Screen
          name="registro"
          component={Registro}
          options={{
            headerShadowVisible: false,
            title: "",
            headerBackTitle: "Voltar",
          }}
        />

        <Stack.Screen
          name="registro2"
          component={Registro2}
          options={{
            headerShadowVisible: false,
            title: "",
            headerBackTitle: "Voltar",
          }}
        />

        <Stack.Screen
          name="login"
          component={Login}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="home"
          component={Home}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="favoritos"
          component={Favoritos}
          options={{
            headerShown: true,
            title: "Favoritos",
            headerTitleAlign: "center",
            headerShadowVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
