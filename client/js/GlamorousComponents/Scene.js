/**
 * Created by micosa on 20.10.17.
 */
import {Platform} from "react-native";
import glamorous from "glamorous-native";
const Scene = glamorous.view({
  marginTop: Platform.OS === 'ios' ? 20 : 0,
});


export default Scene
