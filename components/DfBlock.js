import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Icon, Touchable, withTheme } from '@draftbit/ui';
import { FlashList } from '@shopify/flash-list';
import { Text, View, useWindowDimensions } from 'react-native';

const DfBlock = props => {
  const dimensions = useWindowDimensions();
  const { theme } = props;

  return (
    <FlashList
      contentContainerStyle={StyleSheet.applyWidth(
        { flex: 1, flexDirection: 'row' },
        dimensions.width
      )}
      data={[]}
      estimatedItemSize={50}
      horizontal={true}
      keyExtractor={flashListData =>
        flashListData?.id ||
        flashListData?.uuid ||
        JSON.stringify(flashListData)
      }
      listKey={'KqJkbJFZ'}
      numColumns={1}
      renderItem={({ item }) => {
        const flashListData = item;
        return (
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
              {flashListData}
            </Text>

            <Touchable
              style={StyleSheet.applyWidth({ marginLeft: 8 }, dimensions.width)}
            >
              <Icon
                color={theme.colors['Custom Color']}
                name={'Ionicons/close'}
                size={20}
              />
            </Touchable>
          </View>
        );
      }}
    />
  );
};

export default withTheme(DfBlock);
