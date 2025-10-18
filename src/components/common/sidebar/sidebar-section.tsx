import { Stack } from "@mui/material";

type SidebarSectionProps = { title: string; items: string[] };

function SidebarSection({ title, items }: SidebarSectionProps) {
  return (
    <Stack>
      <h3>{title}</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </Stack>
  );
}

export default SidebarSection;
