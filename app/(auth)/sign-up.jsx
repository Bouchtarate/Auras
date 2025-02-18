import { View, Text, ScrollView, Image } from "react-native";
import { React, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { Link } from "expo-router";
import { createUser } from "../../lib/appwrite";
const SignUp = () => {
  const [form, setForm] = useState({ userName: "", email: "", password: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submit = () => {
    createUser();
  };
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full min-h-[85vh] justify-center px-4 my-6 ">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[35px]"
          />
          <Text className="text-white text-2xl font-pSemibold mt-10">
            Sign up to Auras
          </Text>
          <FormField
            title="User Name"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, userName: e })}
            otherStyles="mt-7"
            placeholder="user-name"
          />
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email"
            placeholder="email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
            placeholder="Password"
          />
          <CustomButton
            title="Create Account"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />
          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pRegular">
              Have an account already?
            </Text>
            <Link
              href="/sign-in"
              className="text-lg font-pSemibold text-secondary-100"
            >
              Log In
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
