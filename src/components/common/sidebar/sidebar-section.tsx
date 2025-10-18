import { Stack, Typography } from "@mui/material";
import SidebarSectionItem from "./sidebar-section-item";

type NestedPages = { label: string; url?: string };

type SidebarSectionItem = {
  label: string;
  iconUrl: any;
  nestedPages?: Array<NestedPages>;
};

type SidebarSectionProps = { title: string; items: SidebarSectionItem[] };

function SidebarSection({ title, items }: SidebarSectionProps) {
  return (
    <Stack>
      <Typography py={1} px={3} variant="body1" color="text.secondary">
        {title}
      </Typography>
      <Stack>
        {items.map((item, index) => (
          <SidebarSectionItem
            key={index}
            iconUrl={item.iconUrl}
            label={item.label}
            nestedPages={item.nestedPages}
          />
        ))}
      </Stack>
    </Stack>
  );
}

export default SidebarSection;
