import { Box, Stack, Typography } from "@mui/material";
import { useState } from "react";

type Props = {
  favorites: string[];
  recentlyViewed: string[];
};

function HighlightHeaderItem({
  itemKey,
  label,
  selectedSection,
  setSelectedSection,
}: {
  itemKey: string;
  label: string;
  selectedSection: "favorites" | "recentlyViewed";
  setSelectedSection: (key: "favorites" | "recentlyViewed") => void;
}) {
  return (
    <Stack sx={{ cursor: "pointer" }}>
      <Typography
        onClick={() =>
          setSelectedSection(itemKey as "favorites" | "recentlyViewed")
        }
        px={2}
        py={1}
        color={selectedSection === itemKey ? "text.secondary" : "text.disabled"}
        variant="body1"
      >
        {label}
      </Typography>
    </Stack>
  );
}

function HighlightItem({ item }: { item: string }) {
  return (
    <Stack
      direction="row"
      px={2}
      py={1}
      spacing={2}
      alignItems="center"
      borderRadius={2}
      key={item + "_highlight"}
    >
      <Box
        width={6}
        height={6}
        borderRadius="50%"
        sx={{ backgroundColor: "text.disabled" }}
      />
      <Typography variant="body1"> {item} </Typography>
    </Stack>
  );
}

function HighlightsPanel({ favorites, recentlyViewed }: Props) {
  const [selectedSection, setSelectedSection] = useState<
    "favorites" | "recentlyViewed"
  >("favorites");
  const selectedItems =
    selectedSection === "favorites" ? favorites : recentlyViewed;

  return (
    <Stack>
      <Stack direction="row" alignItems="center" spacing={2}>
        <HighlightHeaderItem
          selectedSection={selectedSection}
          itemKey="favorites"
          label="Favorites"
          setSelectedSection={setSelectedSection}
        />
        <HighlightHeaderItem
          selectedSection={selectedSection}
          itemKey="recentlyViewed"
          label="Recently"
          setSelectedSection={setSelectedSection}
        />
      </Stack>

      {selectedItems.map((item) => (
        <HighlightItem key={item + "_highlight"} item={item} />
      ))}
    </Stack>
  );
}

export default HighlightsPanel;
