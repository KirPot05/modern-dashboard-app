import { Stack } from "@mui/material";
import ListContainer from "./notifications-container";

type Props = {};

export type ListItem = {
  id: string | number;
  text: string;
  timestamp?: Date;
  icon?: React.ReactNode;
  imageBackgroundRequired?: boolean;
};

const notifications: ListItem[] = [
  {
    id: 1,
    text: "You have a bug that needs to be fixed.",
    timestamp: new Date(),
    icon: <img src="/assets/icons/bug-beetle-icon.svg" alt="Bug beetle icon" />,
    imageBackgroundRequired: true,
  },
  {
    id: 2,
    text: "New user registered",
    timestamp: new Date(),
    icon: <img src="/assets/icons/user-icon.svg" alt="User icon" />,
    imageBackgroundRequired: true,
  },
  {
    id: 3,
    text: "You have a bug that needs to be fixed.",
    timestamp: new Date(),
    icon: <img src="/assets/icons/bug-beetle-icon.svg" alt="Bug beetle icon" />,
    imageBackgroundRequired: true,
  },
  {
    id: 4,
    text: "Andi Lane subscribed to you.",
    timestamp: new Date(),
    icon: <img src="/assets/icons/broadcast-icon.svg" alt="Broadcast icon" />,
    imageBackgroundRequired: true,
  },
];

const activities: ListItem[] = [
  {
    id: 1,
    text: "You have a bug that needs to be fixed.",
    timestamp: new Date(),
    icon: (
      <img
        src="/assets/images/activity-one.png"
        alt="Activity one"
        width={24}
        height={24}
        style={{ borderRadius: "50%" }}
      />
    ),
  },
  {
    id: 2,
    text: "Released a new version",
    timestamp: new Date(),
    icon: (
      <img
        src="/assets/images/activity-two.png"
        alt="Activity two"
        width={24}
        height={24}
        style={{ borderRadius: "50%" }}
      />
    ),
  },
  {
    id: 3,
    text: "Submitted a bug",
    timestamp: new Date(),
    icon: (
      <img
        src="/assets/images/activity-three.png"
        alt="Activity three"
        width={24}
        height={24}
        style={{ borderRadius: "50%" }}
      />
    ),
  },
  {
    id: 4,
    text: "Modified A data in Page X",
    timestamp: new Date(),
    icon: (
      <img
        src="/assets/images/activity-four.png"
        alt="Activity four"
        width={24}
        height={24}
        style={{ borderRadius: "50%" }}
      />
    ),
  },
  {
    id: 5,
    text: "Deleted a page in Project X",
    timestamp: new Date(),
    icon: (
      <img
        src="/assets/images/activity-five.png"
        alt="Activity five"
        width={24}
        height={24}
        style={{ borderRadius: "50%" }}
      />
    ),
  },
];

const contacts: ListItem[] = [
  {
    id: 1,
    text: "Natali Craig",
    icon: (
      <img
        src="/assets/images/contact-one.png"
        alt="Contact one"
        width={24}
        height={24}
        style={{ borderRadius: "50%" }}
      />
    ),
  },
  {
    id: 2,
    text: "Drew Cano",
    icon: (
      <img
        src="/assets/images/contact-two.png"
        alt="Contact two"
        width={24}
        height={24}
        style={{ borderRadius: "50%" }}
      />
    ),
  },
  {
    id: 3,
    text: "Orlando Diggs",
    icon: (
      <img
        src="/assets/images/contact-three.png"
        alt="Contact three"
        width={24}
        height={24}
        style={{ borderRadius: "50%" }}
      />
    ),
  },
  {
    id: 4,
    text: "Andi Lane",
    icon: (
      <img
        src="/assets/images/contact-four.png"
        alt="Contact four"
        width={24}
        height={24}
        style={{ borderRadius: "50%" }}
      />
    ),
  },
  {
    id: 5,
    text: "Kate Morrison",
    icon: (
      <img
        src="/assets/images/contact-five.png"
        alt="Contact five"
        width={24}
        height={24}
        style={{ borderRadius: "50%" }}
      />
    ),
  },
  {
    id: 6,
    text: "Koray Okumus",
    icon: (
      <img
        src="/assets/images/contact-six.png"
        alt="Contact six"
        width={24}
        height={24}
        style={{ borderRadius: "50%" }}
      />
    ),
  },
];

function RightBar({}: Props) {
  return (
    <Stack
      height="100vh"
      top={0}
      position="sticky"
      sx={{ overflowY: "auto", scrollbarWidth: "none" }}
      width="20%"
      borderLeft={1}
      borderColor="divider"
      p={5}
      spacing={6}
    >
      <ListContainer title="Notifications" items={notifications} />
      <ListContainer title="Activities" items={activities} />
      <ListContainer title="Contacts" items={contacts} />
    </Stack>
  );
}

export default RightBar;
