import { Pressable, Text, View } from "react-native";
import { styled } from "nativewind";
const StyledView = styled(View);

const Button = ({ style, onPress, text }) => {
  if (!style) {
    style = "text-center rounded-lg bg-black p-3 mx-20";
  }

  return (
    <Pressable
      style={{
        elevation: 30,
        boxShadow: `20px 20px 60px #bebebe,
             -20px -20px 60px #ffffff`,
      }}
      className={style}
      onPress={onPress}
    >
      <Text className="text-center font-bold text-white">{text}</Text>
    </Pressable>
  );
};

export default Button;
