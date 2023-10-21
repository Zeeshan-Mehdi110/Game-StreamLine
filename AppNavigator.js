import * as React from 'react';
import { I18nManager, Platform, StyleSheet, Text, View } from 'react-native';
import { systemWeights } from 'react-native-typography';
import { Icon, Touchable } from '@draftbit/ui';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import theme from './themes/Draftbit.js';
import LinkingConfiguration from './LinkingConfiguration.js';

import AboutStreamoScreen from './screens/AboutStreamoScreen';
import AddNewCardScreen from './screens/AddNewCardScreen';
import BrowseScreen from './screens/BrowseScreen';
import CategoriesDetailsScreen from './screens/CategoriesDetailsScreen';
import ChannelDetailsScreen from './screens/ChannelDetailsScreen';
import ChooseCategoryScreen from './screens/ChooseCategoryScreen';
import ConfirmOTPScreen from './screens/ConfirmOTPScreen';
import CreateNewPasswordScreen from './screens/CreateNewPasswordScreen';
import CreateNewPinScreen from './screens/CreateNewPinScreen';
import DashboardScreen from './screens/DashboardScreen';
import DiscoverScreen from './screens/DiscoverScreen';
import EditChannelProfileScreen from './screens/EditChannelProfileScreen';
import FilterandSortScreen from './screens/FilterandSortScreen';
import FollowedCategoriesScreen from './screens/FollowedCategoriesScreen';
import FollowedChannelsScreen from './screens/FollowedChannelsScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import GoLiveScreen from './screens/GoLiveScreen';
import HelpCenterScreen from './screens/HelpCenterScreen';
import HomeScreen from './screens/HomeScreen';
import InviteFriendsScreen from './screens/InviteFriendsScreen';
import LanguageSettingsScreen from './screens/LanguageSettingsScreen';
import LetsyouInScreen from './screens/LetsyouInScreen';
import LiveStreamFullviewScreen from './screens/LiveStreamFullviewScreen';
import LiveStreamScreen from './screens/LiveStreamScreen';
import LoginScreen from './screens/LoginScreen';
import MyChannelScreen from './screens/MyChannelScreen';
import NotificationEmptyScreen from './screens/NotificationEmptyScreen';
import NotificationListScreen from './screens/NotificationListScreen';
import NotificationSettingsScreen from './screens/NotificationSettingsScreen';
import PaymentMethodsScreen from './screens/PaymentMethodsScreen';
import PickwhattoWatchScreen from './screens/PickwhattoWatchScreen';
import PreferencesScreen from './screens/PreferencesScreen';
import ProfileScreen from './screens/ProfileScreen';
import RecommendedScreen from './screens/RecommendedScreen';
import ReportChannelScreen from './screens/ReportChannelScreen';
import SearchNoResultsFoundScreen from './screens/SearchNoResultsFoundScreen';
import SearchResultsScreen from './screens/SearchResultsScreen';
import SearchScreen from './screens/SearchScreen';
import SeecurityScreen from './screens/SeecurityScreen';
import SelectChannelScreen from './screens/SelectChannelScreen';
import SelectPaymentMethodScreen from './screens/SelectPaymentMethodScreen';
import SetYourFingerprintScreen from './screens/SetYourFingerprintScreen';
import SignupScreen from './screens/SignupScreen';
import StreamInfoScreen from './screens/StreamInfoScreen';
import SubscribeScreen from './screens/SubscribeScreen';
import SubscriptionsScreen from './screens/SubscriptionsScreen';
import UpdateProfileScreen from './screens/UpdateProfileScreen';
import WelcomescreenScreen from './screens/WelcomescreenScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Placeholder() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#131A2A',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 36,
      }}
    >
      <Text
        style={{
          textAlign: 'center',
          fontSize: 24,
          fontWeight: 'bold',
          marginBottom: 12,
          color: '#FFF',
        }}
      >
        Missing Screen
      </Text>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 16,
          color: '#FFF',
          marginBottom: 8,
        }}
      >
        This screen is not in a navigator.
      </Text>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 16,
          color: '#FFF',
          marginBottom: 8,
        }}
      >
        Go to Navigation mode, and click the + (plus) icon in the Navigator tab
        on the left side to add this screen to a Navigator.
      </Text>
      <Text style={{ textAlign: 'center', fontSize: 16, color: '#FFF' }}>
        If the screen is in a Tab Navigator, make sure the screen is assigned to
        a tab in the Config panel on the right.
      </Text>
    </View>
  );
}
function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { borderTopColor: 'transparent' },
        tabBarActiveTintColor: theme.colors['Custom Color'],
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="AntDesign/home"
              size={25}
              color={focused ? theme.colors['Custom Color'] : color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="DiscoverScreen"
        component={DiscoverScreen}
        options={{
          title: 'Discover',
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="Entypo/compass"
              size={25}
              color={focused ? theme.colors['Custom Color'] : color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="BrowseScreen"
        component={BrowseScreen}
        options={{
          title: 'Browse',
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="Octicons/file"
              size={25}
              color={focused ? theme.colors['Custom Color'] : color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="Feather/user"
              size={25}
              color={focused ? theme.colors['Custom Color'] : color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function RootAppNavigator() {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <Stack.Navigator
        initialRouteName="WelcomescreenScreen"
        screenOptions={{
          headerMode: 'none',
        }}
      >
        <Stack.Screen
          name="SetYourFingerprintScreen"
          component={SetYourFingerprintScreen}
          options={{
            title: 'Set Your Fingerprint',
          }}
        />
        <Stack.Screen
          name="InviteFriendsScreen"
          component={InviteFriendsScreen}
          options={{
            title: 'Invite Friends',
          }}
        />
        <Stack.Screen
          name="LanguageSettingsScreen"
          component={LanguageSettingsScreen}
          options={{
            title: 'Language Settings',
          }}
        />
        <Stack.Screen
          name="SelectChannelScreen"
          component={SelectChannelScreen}
          options={{
            title: 'Select Channel',
          }}
        />
        <Stack.Screen
          name="PreferencesScreen"
          component={PreferencesScreen}
          options={{
            title: 'preferences',
          }}
        />
        <Stack.Screen
          name="CreateNewPasswordScreen"
          component={CreateNewPasswordScreen}
          options={{
            title: 'Create New Password',
          }}
        />
        <Stack.Screen
          name="EditChannelProfileScreen"
          component={EditChannelProfileScreen}
          options={{
            title: 'Edit Channel Profile',
          }}
        />
        <Stack.Screen
          name="FollowedChannelsScreen"
          component={FollowedChannelsScreen}
          options={{
            title: 'Followed Channels',
          }}
        />
        <Stack.Screen
          name="PickwhattoWatchScreen"
          component={PickwhattoWatchScreen}
          options={{
            title: 'Pick what to Watch',
          }}
        />
        <Stack.Screen
          name="MyChannelScreen"
          component={MyChannelScreen}
          options={{
            title: 'My Channel',
          }}
        />
        <Stack.Screen
          name="PaymentMethodsScreen"
          component={PaymentMethodsScreen}
          options={{
            title: 'Payment Methods',
          }}
        />
        <Stack.Screen
          name="UpdateProfileScreen"
          component={UpdateProfileScreen}
          options={{
            title: 'Update Profile',
          }}
        />
        <Stack.Screen
          name="SubscriptionsScreen"
          component={SubscriptionsScreen}
          options={{
            title: 'Subscriptions',
          }}
        />
        <Stack.Screen
          name="SignupScreen"
          component={SignupScreen}
          options={{
            title: 'Sign up',
          }}
        />
        <Stack.Screen
          name="ConfirmOTPScreen"
          component={ConfirmOTPScreen}
          options={{
            title: 'Confirm OTP',
          }}
        />
        <Stack.Screen
          name="ForgotPasswordScreen"
          component={ForgotPasswordScreen}
          options={{
            title: 'Forgot Password',
          }}
        />
        <Stack.Screen
          name="CreateNewPinScreen"
          component={CreateNewPinScreen}
          options={{
            title: 'Create New Pin',
          }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            title: 'Login',
          }}
        />
        <Stack.Screen
          name="AboutStreamoScreen"
          component={AboutStreamoScreen}
          options={{
            title: 'About Streamo',
          }}
        />
        <Stack.Screen
          name="SeecurityScreen"
          component={SeecurityScreen}
          options={{
            title: 'Seecurity',
          }}
        />
        <Stack.Screen
          name="LetsyouInScreen"
          component={LetsyouInScreen}
          options={{
            title: 'Lets you In',
          }}
        />
        <Stack.Screen
          name="WelcomescreenScreen"
          component={WelcomescreenScreen}
          options={{
            title: 'Welcome screen',
          }}
        />
        <Stack.Screen
          name="NotificationSettingsScreen"
          component={NotificationSettingsScreen}
          options={{
            title: 'Notification Settings',
          }}
        />
        <Stack.Screen
          name="HelpCenterScreen"
          component={HelpCenterScreen}
          options={{
            title: 'Help Center',
          }}
        />
        <Stack.Screen
          name="SearchScreen"
          component={SearchScreen}
          options={{
            title: 'Search',
          }}
        />
        <Stack.Screen
          name="SearchResultsScreen"
          component={SearchResultsScreen}
          options={{
            title: 'Search Results',
          }}
        />
        <Stack.Screen
          name="SearchNoResultsFoundScreen"
          component={SearchNoResultsFoundScreen}
          options={{
            title: 'Search No Results Found',
          }}
        />
        <Stack.Screen
          name="DashboardScreen"
          component={DashboardScreen}
          options={{
            title: 'Dashboard',
          }}
        />
        <Stack.Screen
          name="GoLiveScreen"
          component={GoLiveScreen}
          options={{
            title: 'Go Live',
          }}
        />
        <Stack.Screen
          name="ChooseCategoryScreen"
          component={ChooseCategoryScreen}
          options={{
            title: 'Choose Category',
          }}
        />
        <Stack.Screen
          name="StreamInfoScreen"
          component={StreamInfoScreen}
          options={{
            title: 'Stream Info',
          }}
        />
        <Stack.Screen
          name="SelectPaymentMethodScreen"
          component={SelectPaymentMethodScreen}
          options={{
            title: 'Select Payment Method',
          }}
        />
        <Stack.Screen
          name="AddNewCardScreen"
          component={AddNewCardScreen}
          options={{
            title: 'Add New Card',
          }}
        />
        <Stack.Screen
          name="RecommendedScreen"
          component={RecommendedScreen}
          options={{
            title: 'Recommended',
          }}
        />
        <Stack.Screen
          name="LiveStreamScreen"
          component={LiveStreamScreen}
          options={{
            title: 'Live Stream',
          }}
        />
        <Stack.Screen
          name="LiveStreamFullviewScreen"
          component={LiveStreamFullviewScreen}
          options={{
            title: 'Live Stream Fullview',
          }}
        />
        <Stack.Screen
          name="SubscribeScreen"
          component={SubscribeScreen}
          options={{
            title: 'Subscribe',
          }}
        />
        <Stack.Screen
          name="ReportChannelScreen"
          component={ReportChannelScreen}
          options={{
            title: 'Report Channel',
          }}
        />
        <Stack.Screen
          name="NotificationEmptyScreen"
          component={NotificationEmptyScreen}
          options={{
            title: 'Notification Empty',
          }}
        />
        <Stack.Screen
          name="FollowedCategoriesScreen"
          component={FollowedCategoriesScreen}
          options={{
            title: 'Followed Categories',
          }}
        />
        <Stack.Screen
          name="CategoriesDetailsScreen"
          component={CategoriesDetailsScreen}
          options={{
            title: 'Categories Details',
          }}
        />
        <Stack.Screen
          name="FilterandSortScreen"
          component={FilterandSortScreen}
          options={{
            title: 'Filter and Sort',
          }}
        />
        <Stack.Screen
          name="NotificationListScreen"
          component={NotificationListScreen}
          options={{
            title: 'Notification List',
          }}
        />
        <Stack.Screen
          name="ChannelDetailsScreen"
          component={ChannelDetailsScreen}
          options={{
            title: 'Channel Details',
          }}
        />
        <Stack.Screen
          name="BottomTabNavigator"
          component={BottomTabNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerIcon: Platform.select({
    ios: {
      marginVertical: 12,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
    default: {
      margin: 3,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
  }),
  headerIconLeft: Platform.select({
    ios: {
      marginRight: 6,
    },
  }),
  headerIconRight: Platform.select({
    ios: {
      marginLeft: 6,
    },
  }),
  headerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    ...Platform.select({
      ios: null,
      default: {
        marginVertical: 3,
        marginHorizontal: 11,
      },
    }),
  },
  headerContainerLeft: Platform.select({
    ios: {
      marginLeft: 8,
    },
  }),
  headerContainerRight: Platform.select({
    ios: {
      marginRight: 8,
    },
  }),
  headerLabelWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  headerLabel: {
    fontSize: 17,
    letterSpacing: 0.35,
  },
});
