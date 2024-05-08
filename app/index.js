import { ScrollView, StyleSheet, View } from "react-native";
import { RNButton, RNInput, RNKeyboardAvoid, RNStyles } from "@Atoms";
import { Colors, hp, wp } from "@Theme";
import { Lottie } from "@Constants";
import LottieView from "lottie-react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <RNKeyboardAvoid style={{ flex: 1 }}>
        <ScrollView style={{ backgroundColor: "#00f", flex: 1 }}>
          <LottieView
            source={Lottie.login}
            style={styles.lottie}
            autoPlay={true}
            speed={1.5}
          />
          <LottieView
            source={Lottie.login}
            style={styles.lottie}
            autoPlay={true}
            speed={1.5}
          />

          <RNInput placeholder={"Enter your email"} style={styles.inputs} />
          <RNInput placeholder={"Enter your password"} style={styles.inputs} />
          <RNButton title={"Sign In"} style={styles.button} />
        </ScrollView>
      </RNKeyboardAvoid>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  lottie: {
    width: wp(70),
    height: wp(70),
    alignSelf: "center",
    paddingVertical: hp(4),
  },
  inputs: {
    borderWidth: 1,
    borderColor: Colors.Placeholder,
    width: wp(85),
    borderRadius: wp(3),
    alignSelf: "center",
  },
  button: {
    width: wp(85),
    alignSelf: "center",
  },
});

export default App;
