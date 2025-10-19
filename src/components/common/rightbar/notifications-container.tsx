import { Stack, Typography } from "@mui/material";
import ListItem from "./list-item";
import type { ListItem as ListItemType } from ".";

type Props = { title: string; items: Array<ListItemType> };

function ListContainer({ title, items }: Props) {
  return (
    <Stack spacing={4}>
      <Typography variant="h4">{title}</Typography>
      <Stack spacing={4}>
        {items.map((item) => (
          <ListItem
            key={item.id}
            id={item.id}
            icon={item.icon}
            title={item.text}
            timestamp={item.timestamp}
            imageBackgroundRequired={item.imageBackgroundRequired}
          />
        ))}
      </Stack>
    </Stack>
  );
}

export default ListContainer;
