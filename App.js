import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import TelaJavaScript from "./componentes/TelaJavaScript";
import TelaReact from "./componentes/TelaReact";
import TelaNode from "./componentes/TelaNode";

const MenuNav = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MenuNav.Navigator>
        <MenuNav.Screen name="Java Script" componentes={ TelaJavaScript } />
        <MenuNav.Screen name="Node" componentes={ TelaNode } />
        <MenuNav.Screen name="React" componentes={ TelaReact } />
      </MenuNav.Navigator>
    </NavigationContainer>
  );
}
