import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-white dark:bg-black">
      <Text className="text-dark-200 text-2xl font-bold">
        app/index.tsx to edit this screen.
      </Text>
      <Link href="/onboarding" className="text-blue-500">
        Onboarding
      </Link>
    </View>
  );
}
