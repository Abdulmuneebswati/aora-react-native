import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Link } from 'expo-router';
export default function App() {
  return (
    <View className='flex-1 bg-blue-300 justify-center items-center'>
      <Text className=' text-3xl font-pblack'>Aora!</Text>
      <StatusBar style='auto' />
      <Link
        href='/home'
        className='text-red-300'
      >
        Go to Home
      </Link>
    </View>
  );
}