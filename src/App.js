import React, { useState } from "react";
import { View, Switch, StyleSheet, Text} from "react-native";


const App = () => {
  const[isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => 
    { 
      setIsEnabled(previousState => !previousState);
      switched(!isEnabled);
    };
  
  return (
    <View style={styles.container}>   
      <Text>Turn on or off ObjectResizer:</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
 
    </View>
  );
}

const switched =(state) => {
 
  console.log(state)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default App;