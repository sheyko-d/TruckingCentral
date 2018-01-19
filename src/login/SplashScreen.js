import React from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  View,
  Image,
  StatusBar,
  TouchableOpacity,
  WebView
} from "react-native";
import { StackNavigator, NavigationActions } from "react-navigation";

var WEBVIEW_REF = "webview";
var self;
const styles = StyleSheet.create({
  splash_background: {
    width: "100%",
    height: "100%",
    backgroundColor: "#202933"
  },
  logo_image: {
	fontFamily: "Graystroke-Regular",
	fontSize: 18,
	color: "#fff"
  },
  splash_slogan: {
    color: "#FFF",
    fontSize: 39,
    marginTop: 28,
    fontFamily: "AvenirLTStd-Black"
  },
  buttons_wrapper: {
    flexDirection: "row"
  },
  button: {
    backgroundColor: "#FFF",
    color: "#F26522",
    textAlign: "center",
    fontFamily: "Graystroke-Regular",
    borderRadius: 2,
    paddingBottom: 12,
    paddingTop: 10,
    paddingLeft: 16,
    paddingRight: 16
  },
  create_account_wrapper: {
    flex: 1,
    alignSelf: "stretch",
    marginLeft: 16
  },
  create_account_button: {
    backgroundColor: "#F26522",
    color: "#FFF"
  }
});

class SplashScreen extends React.Component {
  constructor(props) {
    super(props);
    self = this;
      console.log("Correct props should be "+JSON.stringify(props));
  }
  static navigationOptions = {
    title: "Splash",
    header: null
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
	   <View>
        <Image
          style={styles.splash_background}
          source={require("../../assets/icons/splash.jpg")}
        />
          <View style={{ flex: 1, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, paddingLeft: 30, paddingRight: 30, paddingTop: 32, paddingBottom: 16 }}>
            <Text	style={styles.logo_image}>TRUCKING CENTRAL</Text>
            <Text style={styles.splash_slogan}>
              Moving loads accross Australia.
            </Text>
            <View style={{ flex: 1 }} />
            <View style={styles.buttons_wrapper}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => navigate("SignInScreen")}
              >
                <Text style={styles.button}>SIGN IN</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.create_account_wrapper}
                activeOpacity={0.7}
                onPress={() => navigate("SignUpScreen")}
              >
                <Text style={[styles.button, styles.create_account_button]}>
                  GET YOUR FREE ACCOUNT
                </Text>
              </TouchableOpacity>
            </View>
          </View>
      </View>
    );
  }
}

export default SplashScreen;
