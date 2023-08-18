import React from "react";
import { Platform, StatusBar, useColorScheme } from "react-native";
import "react-native-gesture-handler";
import MyNavigationContainer from "./NavigationContainer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Host } from "react-native-portalize";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import R from "../res/R";
import styles from "./navigationStyles";

const App = () => {
  const scheme = useColorScheme();
  const isDarkMode = scheme === "dark";
  const queryClient = new QueryClient();

  React.useEffect(() => {
    StatusBar.setBarStyle(isDarkMode ? "light-content" : "dark-content");
    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor(R.colors.transparent);
      StatusBar.setTranslucent(true);
    }
  }, [scheme, isDarkMode]);

  return (
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView style={styles.rootView}>
        <Host>
          <MyNavigationContainer />
        </Host>
      </GestureHandlerRootView>
    </QueryClientProvider>
  );
};

export default App;
