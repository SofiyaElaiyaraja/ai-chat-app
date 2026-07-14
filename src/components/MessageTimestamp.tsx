import React from 'react';
import {Text} from 'react-native';

interface Props {
  date: Date | string;
}

const MessageTimestamp = ({date}: Props) => {
  const formattedDate = new Date(date);

  return (
    <Text
      style={{
        fontSize: 11,
        marginTop: 4,
        opacity: 0.6,
      }}>
      {formattedDate.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      })}
    </Text>
  );
};

export default MessageTimestamp;