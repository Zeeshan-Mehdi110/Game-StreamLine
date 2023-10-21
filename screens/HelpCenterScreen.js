import React from 'react';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  AccordionGroup,
  Icon,
  ScreenContainer,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { FlashList } from '@shopify/flash-list';
import * as WebBrowser from 'expo-web-browser';
import {
  Image,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const HelpCenterScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;

  const [SelectedTab, setSelectedTab] = React.useState('faq');
  const [selectedtag, setSelectedtag] = React.useState('General');
  const [tags, setTags] = React.useState([
    'General',
    'Account',
    'Service',
    'Payment',
  ]);

  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      {/* Header */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'row',
            height: 48,
            marginTop: 12,
            paddingLeft: 16,
            paddingRight: 16,
          },
          dimensions.width
        )}
      >
        {/* Back Click */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              height: 48,
              justifyContent: 'center',
              width: 48,
            },
            dimensions.width
          )}
        >
          <Touchable
            onPress={() => {
              try {
                navigation.goBack();
              } catch (err) {
                console.error(err);
              }
            }}
          >
            <Icon
              color={theme.colors['Custom Color_2']}
              name={'Ionicons/arrow-back-sharp'}
              size={24}
            />
          </Touchable>
        </View>
        {/* Screen Heading */}
        <Text
          style={StyleSheet.applyWidth(
            {
              color: theme.colors['Strong'],
              fontFamily: 'Inter_600SemiBold',
              fontSize: 20,
              marginLeft: 16,
            },
            dimensions.width
          )}
        >
          {'Help Center'}
        </Text>
      </View>
      {/* Tabs */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'row',
            marginLeft: 20,
            marginRight: 20,
            marginTop: 20,
          },
          dimensions.width
        )}
      >
        {/* FAQ */}
        <View style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}>
          {/* selected */}
          <>
            {!(SelectedTab === 'faq') ? null : (
              <Touchable>
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      borderBottomWidth: 3,
                      borderColor: theme.colors['Custom Color'],
                      height: 41,
                      justifyContent: 'center',
                    },
                    dimensions.width
                  )}
                >
                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors['Custom Color'],
                        fontFamily: 'Inter_600SemiBold',
                        fontSize: 16,
                      },
                      dimensions.width
                    )}
                  >
                    {'FAQ'}
                  </Text>
                </View>
              </Touchable>
            )}
          </>
          {/* unselected */}
          <>
            {!(SelectedTab !== 'faq') ? null : (
              <Touchable
                onPress={() => {
                  try {
                    setSelectedTab('faq');
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      borderBottomWidth: 1,
                      borderColor: theme.colors['Custom Color_20'],
                      height: 41,
                      justifyContent: 'center',
                    },
                    dimensions.width
                  )}
                >
                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors['Custom Color_20'],
                        fontFamily: 'Inter_600SemiBold',
                        fontSize: 16,
                      },
                      dimensions.width
                    )}
                  >
                    {'FAQ'}
                  </Text>
                </View>
              </Touchable>
            )}
          </>
        </View>
        {/* Contact us */}
        <View style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}>
          {/* selected */}
          <>
            {!(SelectedTab === 'contact') ? null : (
              <Touchable>
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      borderBottomWidth: 3,
                      borderColor: theme.colors['Custom Color'],
                      height: 41,
                      justifyContent: 'center',
                    },
                    dimensions.width
                  )}
                >
                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors['Custom Color'],
                        fontFamily: 'Inter_600SemiBold',
                        fontSize: 16,
                      },
                      dimensions.width
                    )}
                  >
                    {'Contact us'}
                  </Text>
                </View>
              </Touchable>
            )}
          </>
          {/* unselected */}
          <>
            {!(SelectedTab !== 'contact') ? null : (
              <Touchable
                onPress={() => {
                  try {
                    setSelectedTab('contact');
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      borderBottomWidth: 1,
                      borderColor: theme.colors['Custom Color_20'],
                      height: 41,
                      justifyContent: 'center',
                    },
                    dimensions.width
                  )}
                >
                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors['Custom Color_20'],
                        fontFamily: 'Inter_600SemiBold',
                        fontSize: 16,
                      },
                      dimensions.width
                    )}
                  >
                    {'Contact us'}
                  </Text>
                </View>
              </Touchable>
            )}
          </>
        </View>
      </View>
      {/* FAQs */}
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps={'never'}
        showsVerticalScrollIndicator={true}
      >
        {/* FAQs */}
        <>
          {!(SelectedTab === 'faq') ? null : (
            <ScrollView
              bounces={true}
              contentContainerStyle={StyleSheet.applyWidth(
                { paddingLeft: 24, paddingRight: 24, paddingTop: 16 },
                dimensions.width
              )}
              showsVerticalScrollIndicator={true}
            >
              {/* Searches */}
              <FlashList
                contentContainerStyle={StyleSheet.applyWidth(
                  { flex: 1, flexDirection: 'row' },
                  dimensions.width
                )}
                data={tags}
                estimatedItemSize={50}
                horizontal={true}
                keyExtractor={searchesData =>
                  searchesData?.id ||
                  searchesData?.uuid ||
                  JSON.stringify(searchesData)
                }
                listKey={'JZ2t8uFY'}
                numColumns={1}
                renderItem={({ item }) => {
                  const searchesData = item;
                  return (
                    <>
                      {/* unselected */}
                      <Touchable
                        onPress={() => {
                          try {
                            setSelectedtag(searchesData);
                          } catch (err) {
                            console.error(err);
                          }
                        }}
                      >
                        <>
                          {!(searchesData !== selectedtag) ? null : (
                            <View
                              style={StyleSheet.applyWidth(
                                {
                                  alignItems: 'center',
                                  borderBottomWidth: 1,
                                  borderColor: theme.colors['Custom Color'],
                                  borderLeftWidth: 1,
                                  borderRadius: 100,
                                  borderRightWidth: 1,
                                  borderTopWidth: 1,
                                  flexDirection: 'row',
                                  height: 38,
                                  justifyContent: 'center',
                                  marginRight: 10,
                                  paddingLeft: 14,
                                  paddingRight: 14,
                                },
                                dimensions.width
                              )}
                            >
                              <Text
                                style={StyleSheet.applyWidth(
                                  {
                                    color: theme.colors['Custom Color'],
                                    fontFamily: 'Inter_500Medium',
                                  },
                                  dimensions.width
                                )}
                              >
                                {searchesData}
                              </Text>
                            </View>
                          )}
                        </>
                      </Touchable>
                      {/* selected */}
                      <Touchable
                        onPress={() => {
                          try {
                            setSelectedtag(searchesData);
                          } catch (err) {
                            console.error(err);
                          }
                        }}
                      >
                        <>
                          {!(selectedtag === searchesData) ? null : (
                            <View
                              style={StyleSheet.applyWidth(
                                {
                                  alignItems: 'center',
                                  backgroundColor: theme.colors['Custom Color'],
                                  borderBottomWidth: 1,
                                  borderColor: theme.colors['Custom Color'],
                                  borderLeftWidth: 1,
                                  borderRadius: 100,
                                  borderRightWidth: 1,
                                  borderTopWidth: 1,
                                  flexDirection: 'row',
                                  height: 38,
                                  justifyContent: 'center',
                                  marginRight: 10,
                                  paddingLeft: 14,
                                  paddingRight: 14,
                                },
                                dimensions.width
                              )}
                            >
                              <Text
                                style={StyleSheet.applyWidth(
                                  {
                                    color: theme.colors['Custom #ffffff'],
                                    fontFamily: 'Inter_500Medium',
                                  },
                                  dimensions.width
                                )}
                              >
                                {searchesData}
                              </Text>
                            </View>
                          )}
                        </>
                      </Touchable>
                    </>
                  );
                }}
                showsHorizontalScrollIndicator={false}
              />
              {/* Search */}
              <View>
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      backgroundColor: theme.colors['BG Gray'],
                      borderBottomWidth: 1,
                      borderColor: theme.colors['Divider'],
                      borderLeftWidth: 1,
                      borderRadius: 16,
                      borderRightWidth: 1,
                      borderTopWidth: 1,
                      flexDirection: 'row',
                      height: 56,
                      marginBottom: 10,
                      marginTop: 16,
                      paddingBottom: 5,
                      paddingLeft: 20,
                      paddingRight: 20,
                    },
                    dimensions.width
                  )}
                >
                  <Icon
                    color={theme.colors['Custom Color_21']}
                    name={'EvilIcons/search'}
                    size={24}
                  />
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        flex: 1,
                        justifyContent: 'center',
                        marginLeft: 5,
                        marginRight: 5,
                      },
                      dimensions.width
                    )}
                  >
                    <TextInput
                      editable={true}
                      placeholder={'Search'}
                      placeholderTextColor={theme.colors['Custom Color_21']}
                      style={StyleSheet.applyWidth(
                        {
                          borderColor: theme.colors.divider,
                          borderRadius: 8,
                          fontFamily: 'Inter_400Regular',
                          fontSize: 15,
                          paddingBottom: 8,
                          paddingLeft: 8,
                          paddingRight: 8,
                          paddingTop: 8,
                        },
                        dimensions.width
                      )}
                    />
                  </View>

                  <Touchable>
                    <Icon
                      color={theme.colors['Custom Color']}
                      name={'MaterialCommunityIcons/tune'}
                      size={20}
                    />
                  </Touchable>
                </View>
              </View>

              <View
                style={StyleSheet.applyWidth(
                  {
                    backgroundColor: theme.colors['Custom #ffffff'],
                    borderBottomWidth: 1,
                    borderColor: theme.colors['Divider'],
                    borderLeftWidth: 1,
                    borderRadius: 20,
                    borderRightWidth: 1,
                    borderTopWidth: 1,
                    marginBottom: 18,
                    marginTop: 10,
                    paddingBottom: 10,
                    paddingLeft: 20,
                    paddingRight: 20,
                    paddingTop: 10,
                  },
                  dimensions.width
                )}
              >
                <AccordionGroup
                  caretSize={24}
                  expanded={true}
                  iconSize={24}
                  label={'What is Streamo?'}
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors['Strong'],
                      fontFamily: 'Inter_600SemiBold',
                      fontSize: 16,
                      paddingBottom: 8,
                      paddingTop: 8,
                    },
                    dimensions.width
                  )}
                >
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        borderColor: theme.colors['Divider'],
                        borderTopWidth: 1,
                        paddingTop: 10,
                      },
                      dimensions.width
                    )}
                  >
                    <Text
                      style={StyleSheet.applyWidth(
                        {
                          color: theme.colors.strong,
                          fontFamily: 'Inter_400Regular',
                          lineHeight: 20,
                          paddingBottom: 10,
                        },
                        dimensions.width
                      )}
                    >
                      {
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                      }
                    </Text>
                  </View>
                </AccordionGroup>
              </View>

              <View
                style={StyleSheet.applyWidth(
                  {
                    backgroundColor: theme.colors['Custom #ffffff'],
                    borderBottomWidth: 1,
                    borderColor: theme.colors['Divider'],
                    borderLeftWidth: 1,
                    borderRadius: 20,
                    borderRightWidth: 1,
                    borderTopWidth: 1,
                    marginBottom: 18,
                    paddingBottom: 10,
                    paddingLeft: 20,
                    paddingRight: 20,
                    paddingTop: 10,
                  },
                  dimensions.width
                )}
              >
                <AccordionGroup
                  caretSize={24}
                  iconSize={24}
                  label={'What is Streamo?'}
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors['Strong'],
                      fontFamily: 'Inter_600SemiBold',
                      fontSize: 16,
                      paddingBottom: 8,
                      paddingTop: 8,
                    },
                    dimensions.width
                  )}
                >
                  <View>
                    <Text
                      style={StyleSheet.applyWidth(
                        {
                          color: theme.colors.strong,
                          fontFamily: 'Inter_400Regular',
                          lineHeight: 20,
                          paddingBottom: 10,
                        },
                        dimensions.width
                      )}
                    >
                      {
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                      }
                    </Text>
                  </View>
                </AccordionGroup>
              </View>

              <View
                style={StyleSheet.applyWidth(
                  {
                    backgroundColor: theme.colors['Custom #ffffff'],
                    borderBottomWidth: 1,
                    borderColor: theme.colors['Divider'],
                    borderLeftWidth: 1,
                    borderRadius: 20,
                    borderRightWidth: 1,
                    borderTopWidth: 1,
                    marginBottom: 18,
                    paddingBottom: 10,
                    paddingLeft: 20,
                    paddingRight: 20,
                    paddingTop: 10,
                  },
                  dimensions.width
                )}
              >
                <AccordionGroup
                  caretSize={24}
                  iconSize={24}
                  label={'What is Streamo?'}
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors['Strong'],
                      fontFamily: 'Inter_600SemiBold',
                      fontSize: 16,
                      paddingBottom: 8,
                      paddingTop: 8,
                    },
                    dimensions.width
                  )}
                >
                  <View>
                    <Text
                      style={StyleSheet.applyWidth(
                        {
                          color: theme.colors.strong,
                          fontFamily: 'Inter_400Regular',
                          lineHeight: 20,
                          paddingBottom: 10,
                        },
                        dimensions.width
                      )}
                    >
                      {
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                      }
                    </Text>
                  </View>
                </AccordionGroup>
              </View>

              <View
                style={StyleSheet.applyWidth(
                  {
                    backgroundColor: theme.colors['Custom #ffffff'],
                    borderBottomWidth: 1,
                    borderColor: theme.colors['Divider'],
                    borderLeftWidth: 1,
                    borderRadius: 20,
                    borderRightWidth: 1,
                    borderTopWidth: 1,
                    marginBottom: 18,
                    paddingBottom: 10,
                    paddingLeft: 20,
                    paddingRight: 20,
                    paddingTop: 10,
                  },
                  dimensions.width
                )}
              >
                <AccordionGroup
                  caretSize={24}
                  iconSize={24}
                  label={'What is Streamo?'}
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors['Strong'],
                      fontFamily: 'Inter_600SemiBold',
                      fontSize: 16,
                      paddingBottom: 8,
                      paddingTop: 8,
                    },
                    dimensions.width
                  )}
                >
                  <View>
                    <Text
                      style={StyleSheet.applyWidth(
                        {
                          color: theme.colors.strong,
                          fontFamily: 'Inter_400Regular',
                          lineHeight: 20,
                          paddingBottom: 10,
                        },
                        dimensions.width
                      )}
                    >
                      {
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                      }
                    </Text>
                  </View>
                </AccordionGroup>
              </View>

              <View
                style={StyleSheet.applyWidth(
                  {
                    backgroundColor: theme.colors['Custom #ffffff'],
                    borderBottomWidth: 1,
                    borderColor: theme.colors['Divider'],
                    borderLeftWidth: 1,
                    borderRadius: 20,
                    borderRightWidth: 1,
                    borderTopWidth: 1,
                    marginBottom: 18,
                    paddingBottom: 10,
                    paddingLeft: 20,
                    paddingRight: 20,
                    paddingTop: 10,
                  },
                  dimensions.width
                )}
              >
                <AccordionGroup
                  caretSize={24}
                  iconSize={24}
                  label={'What is Streamo?'}
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors['Strong'],
                      fontFamily: 'Inter_600SemiBold',
                      fontSize: 16,
                      paddingBottom: 8,
                      paddingTop: 8,
                    },
                    dimensions.width
                  )}
                >
                  <View>
                    <Text
                      style={StyleSheet.applyWidth(
                        {
                          color: theme.colors.strong,
                          fontFamily: 'Inter_400Regular',
                          lineHeight: 20,
                          paddingBottom: 10,
                        },
                        dimensions.width
                      )}
                    >
                      {
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                      }
                    </Text>
                  </View>
                </AccordionGroup>
              </View>
            </ScrollView>
          )}
        </>
      </KeyboardAwareScrollView>
      {/* Contact us */}
      <>
        {!(SelectedTab === 'contact') ? null : (
          <ScrollView
            bounces={true}
            contentContainerStyle={StyleSheet.applyWidth(
              { paddingLeft: 24, paddingRight: 24, paddingTop: 20 },
              dimensions.width
            )}
            showsVerticalScrollIndicator={true}
          >
            {/* Customer Service */}
            <Touchable
              style={StyleSheet.applyWidth(
                { marginBottom: 18 },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    backgroundColor: theme.colors['Custom #ffffff'],
                    borderBottomWidth: 1,
                    borderColor: theme.colors['Divider'],
                    borderLeftWidth: 1,
                    borderRadius: 20,
                    borderRightWidth: 1,
                    borderTopWidth: 1,
                    flexDirection: 'row',
                    height: 72,
                    paddingLeft: 24,
                  },
                  dimensions.width
                )}
              >
                <Image
                  resizeMode={'cover'}
                  source={Images.HelpCS}
                  style={StyleSheet.applyWidth(
                    { height: 24, width: 24 },
                    dimensions.width
                  )}
                />
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.strong,
                      fontFamily: 'Inter_600SemiBold',
                      fontSize: 16,
                      marginLeft: 12,
                    },
                    dimensions.width
                  )}
                >
                  {'Customer Service'}
                </Text>
              </View>
            </Touchable>
            {/* Whatsapp */}
            <Touchable
              style={StyleSheet.applyWidth(
                { marginBottom: 18 },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    backgroundColor: theme.colors['Custom #ffffff'],
                    borderBottomWidth: 1,
                    borderColor: theme.colors['Divider'],
                    borderLeftWidth: 1,
                    borderRadius: 20,
                    borderRightWidth: 1,
                    borderTopWidth: 1,
                    flexDirection: 'row',
                    height: 72,
                    paddingLeft: 24,
                  },
                  dimensions.width
                )}
              >
                <Image
                  resizeMode={'cover'}
                  source={Images.HelpWA}
                  style={StyleSheet.applyWidth(
                    { height: 24, width: 24 },
                    dimensions.width
                  )}
                />
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.strong,
                      fontFamily: 'Inter_600SemiBold',
                      fontSize: 16,
                      marginLeft: 12,
                    },
                    dimensions.width
                  )}
                >
                  {'WhatsApp'}
                </Text>
              </View>
            </Touchable>
            {/* Website */}
            <Touchable
              onPress={() => {
                const handler = async () => {
                  try {
                    await WebBrowser.openBrowserAsync('https://draftbit.com/');
                  } catch (err) {
                    console.error(err);
                  }
                };
                handler();
              }}
              style={StyleSheet.applyWidth(
                { marginBottom: 18 },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    backgroundColor: theme.colors['Custom #ffffff'],
                    borderBottomWidth: 1,
                    borderColor: theme.colors['Divider'],
                    borderLeftWidth: 1,
                    borderRadius: 20,
                    borderRightWidth: 1,
                    borderTopWidth: 1,
                    flexDirection: 'row',
                    height: 72,
                    paddingLeft: 24,
                  },
                  dimensions.width
                )}
              >
                <Image
                  resizeMode={'cover'}
                  source={Images.HelpWeb}
                  style={StyleSheet.applyWidth(
                    { height: 24, width: 24 },
                    dimensions.width
                  )}
                />
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.strong,
                      fontFamily: 'Inter_600SemiBold',
                      fontSize: 16,
                      marginLeft: 12,
                    },
                    dimensions.width
                  )}
                >
                  {'Website'}
                </Text>
              </View>
            </Touchable>
            {/* Facebook */}
            <Touchable
              onPress={() => {
                const handler = async () => {
                  try {
                    await WebBrowser.openBrowserAsync(
                      'https://www.facebook.com/draftbit/'
                    );
                  } catch (err) {
                    console.error(err);
                  }
                };
                handler();
              }}
              style={StyleSheet.applyWidth(
                { marginBottom: 18 },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    backgroundColor: theme.colors['Custom #ffffff'],
                    borderBottomWidth: 1,
                    borderColor: theme.colors['Divider'],
                    borderLeftWidth: 1,
                    borderRadius: 20,
                    borderRightWidth: 1,
                    borderTopWidth: 1,
                    flexDirection: 'row',
                    height: 72,
                    paddingLeft: 24,
                  },
                  dimensions.width
                )}
              >
                <Image
                  resizeMode={'cover'}
                  source={Images.HelpFB}
                  style={StyleSheet.applyWidth(
                    { height: 24, width: 24 },
                    dimensions.width
                  )}
                />
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.strong,
                      fontFamily: 'Inter_600SemiBold',
                      fontSize: 16,
                      marginLeft: 12,
                    },
                    dimensions.width
                  )}
                >
                  {'Facebook'}
                </Text>
              </View>
            </Touchable>
            {/* Twitter */}
            <Touchable
              onPress={() => {
                const handler = async () => {
                  try {
                    await WebBrowser.openBrowserAsync(
                      'https://twitter.com/draftbit'
                    );
                  } catch (err) {
                    console.error(err);
                  }
                };
                handler();
              }}
              style={StyleSheet.applyWidth(
                { marginBottom: 18 },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    backgroundColor: theme.colors['Custom #ffffff'],
                    borderBottomWidth: 1,
                    borderColor: theme.colors['Divider'],
                    borderLeftWidth: 1,
                    borderRadius: 20,
                    borderRightWidth: 1,
                    borderTopWidth: 1,
                    flexDirection: 'row',
                    height: 72,
                    paddingLeft: 24,
                  },
                  dimensions.width
                )}
              >
                <Image
                  resizeMode={'cover'}
                  source={Images.HelpTwtr}
                  style={StyleSheet.applyWidth(
                    { height: 24, width: 24 },
                    dimensions.width
                  )}
                />
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.strong,
                      fontFamily: 'Inter_600SemiBold',
                      fontSize: 16,
                      marginLeft: 12,
                    },
                    dimensions.width
                  )}
                >
                  {'Twitter'}
                </Text>
              </View>
            </Touchable>
            {/* Instagram */}
            <Touchable
              onPress={() => {
                const handler = async () => {
                  try {
                    await WebBrowser.openBrowserAsync(
                      'https://www.instagram.com/draftbit/'
                    );
                  } catch (err) {
                    console.error(err);
                  }
                };
                handler();
              }}
              style={StyleSheet.applyWidth(
                { marginBottom: 18 },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    backgroundColor: theme.colors['Custom #ffffff'],
                    borderBottomWidth: 1,
                    borderColor: theme.colors['Divider'],
                    borderLeftWidth: 1,
                    borderRadius: 20,
                    borderRightWidth: 1,
                    borderTopWidth: 1,
                    flexDirection: 'row',
                    height: 72,
                    paddingLeft: 24,
                  },
                  dimensions.width
                )}
              >
                <Image
                  resizeMode={'cover'}
                  source={Images.HelpIG}
                  style={StyleSheet.applyWidth(
                    { height: 24, width: 24 },
                    dimensions.width
                  )}
                />
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.strong,
                      fontFamily: 'Inter_600SemiBold',
                      fontSize: 16,
                      marginLeft: 12,
                    },
                    dimensions.width
                  )}
                >
                  {'Instagram'}
                </Text>
              </View>
            </Touchable>
          </ScrollView>
        )}
      </>
    </ScreenContainer>
  );
};

export default withTheme(HelpCenterScreen);
