import { View, Text, Image } from 'react-native';
import { Tabs, Redirect } from 'expo-router';
import { icons } from '../../constants/index';
import { tabsItems } from '../../constants/Tabs';
const TabIcon = ({ icon, color, focused, name }) => {
  return (
    <View className=' justify-center  gap-2 items-center'>
      <Image
        className='w-6 h-6'
        source={icon}
        resizeMode='contain'
        tintColor={color}
      ></Image>
      <Text
        style={{
          color,
        }}
        className={`${focused ? ' font-psemibold' : ' font-pregular'}`}
      >
        {name}
      </Text>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: '#FFA001',
          tabBarInactiveTintColor: '#CDCDE0',
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: '#161622',
            borderTopWidth: 1,
            borderTopColor: '#232533',
            height: 84,
          },
        }}
      >
        {tabsItems.map((item) => {
          return (
            <Tabs.Screen
              name={item.name}
              options={{
                title: item.title,
                headerShown: false,
                tabBarIcon: ({ color, focused }) => (
                  <TabIcon
                    icon={item.icon}
                    name={item.title}
                    color={color}
                    focused={focused}
                  />
                ),
              }}
            />
          );
        })}
      </Tabs>
    </>
  );
};

export default TabsLayout;
