```js padded
    import { Stack, StackDivider } from '@chakra-ui/react';
    <Stack
        spacing="8"
        direction={{
        base: 'column',
        md: 'row',
        }}
        divider={<StackDivider />}
    >
        <Statistic title="Time saved" value="85%" />
        <Statistic title="Clients served" value="3/4" />
        <Statistic title="Recommended" value="45K" />
    </Stack>
```