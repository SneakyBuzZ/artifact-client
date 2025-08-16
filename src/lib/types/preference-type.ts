// preferences-data.ts
import {
  PaintBrushIcon,
  PencilSimpleLineIcon,
  ImageIcon,
  HorseIcon,
  CameraIcon,
  PanoramaIcon,
  CodesandboxLogoIcon,
  PersonIcon,
  ScrollIcon,
  CastleTurretIcon,
  CityIcon,
  PaintBrushBroadIcon,
  LegoSmileyIcon,
  GavelIcon,
  FilmSlateIcon,
  FlyingSaucerIcon,
  IslandIcon,
  RocketLaunchIcon,
  RobotIcon,
  GameControllerIcon,
  PaletteIcon,
  TShirtIcon,
  FileTextIcon,
  LogIcon,
  FlaskIcon,
  WrenchIcon,
  PaintBucketIcon,
  PencilLineIcon,
  PenIcon,
  BroomIcon,
  Pen,
} from "@phosphor-icons/react";
import { PillBottleIcon } from "lucide-react";

export type PreferenceJson = Partial<Record<Preference, string[]>>;

export type Preference =
  | "categories"
  | "styles"
  | "colors"
  | "themes"
  | "materials"
  | "media";

export type PreferenceContentType = {
  id: number;
  name: Preference;
  title: string;
  description: string;
  picks: {
    id: number;
    name: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    icon: React.ComponentType<any>;
    iconColor: string;
    value?: string;
  }[];
};

export const PreferencesList: PreferenceContentType[] = [
  {
    id: 1,
    name: "categories",
    title: "Select Categories",
    description: "Select your preferred categories to tailor artworks.",
    picks: [
      {
        id: 1,
        name: "Painting",
        icon: PaintBrushIcon,
        iconColor: "#ef4444",
        value: "PAINTING",
      },
      {
        id: 2,
        name: "Drawing",
        icon: PencilSimpleLineIcon,
        iconColor: "#3b82f6",
        value: "DRAWING",
      },
      {
        id: 3,
        name: "Digital Art",
        icon: ImageIcon,
        iconColor: "#10b981",
        value: "DIGITAL_ART",
      },
      {
        id: 4,
        name: "Sculpture",
        icon: HorseIcon,
        iconColor: "#8b5cf6",
        value: "SCULPTURE",
      },
      {
        id: 5,
        name: "Photography",
        icon: CameraIcon,
        iconColor: "#f59e0b",
        value: "PHOTOGRAPHY",
      },
      {
        id: 6,
        name: "Mixed Media",
        icon: PanoramaIcon,
        iconColor: "#ec4899",
        value: "MIXED_MEDIA",
      },
    ],
  },
  {
    id: 2,
    name: "styles",
    title: "Choose Styles",
    description: "Choose the styles you like for your artworks.",
    picks: [
      {
        id: 1,
        name: "Abstract",
        icon: CodesandboxLogoIcon,
        iconColor: "#6366f1",
        value: "ABSTRACT",
      },
      {
        id: 2,
        name: "Realism",
        icon: PersonIcon,
        iconColor: "#22c55e",
        value: "REALISM",
      },
      {
        id: 3,
        name: "Traditional",
        icon: ScrollIcon,
        iconColor: "#f43f5e",
        value: "TRADITIONAL",
      },
      {
        id: 4,
        name: "Minimalistic",
        icon: PaintBrushIcon,
        iconColor: "#0ea5e9",
        value: "MINIMALISTIC",
      },
      {
        id: 5,
        name: "Vintage",
        icon: CastleTurretIcon,
        iconColor: "#a855f7",
        value: "VINTAGE",
      },
      {
        id: 6,
        name: "Modern",
        icon: CityIcon,
        iconColor: "#10b981",
        value: "MODERN",
      },
    ],
  },
  {
    id: 3,
    name: "colors",
    title: "Pick Colors",
    description: "Pick your favorite colors for a personalized touch.",
    picks: [
      {
        id: 1,
        name: "Red",
        icon: PaintBrushBroadIcon,
        iconColor: "red",
        value: "RED",
      },
      {
        id: 2,
        name: "Blue",
        icon: PaintBrushBroadIcon,
        iconColor: "blue",
        value: "BLUE",
      },
      {
        id: 3,
        name: "Green",
        icon: PaintBrushBroadIcon,
        iconColor: "green",
        value: "GREEN",
      },
      {
        id: 4,
        name: "Yellow",
        icon: PaintBrushBroadIcon,
        iconColor: "#facc15",
        value: "YELLOW",
      },
      {
        id: 5,
        name: "Purple",
        icon: PaintBrushBroadIcon,
        iconColor: "purple",
        value: "PURPLE",
      },
      {
        id: 6,
        name: "Black",
        icon: PaintBrushBroadIcon,
        iconColor: "black",
        value: "BLACK",
      },
      {
        id: 7,
        name: "White",
        icon: PaintBrushBroadIcon,
        iconColor: "gray",
        value: "WHITE",
      },
      {
        id: 8,
        name: "Orange",
        icon: PaintBrushBroadIcon,
        iconColor: "#fb923c",
        value: "ORANGE",
      },
      {
        id: 9,
        name: "Brown",
        icon: PaintBrushBroadIcon,
        iconColor: "#8B4513",
        value: "BROWN",
      },
    ],
  },
  {
    id: 4,
    name: "themes",
    title: "Select Themes",
    description: "Select themes that resonate with your artistic vision.",
    picks: [
      {
        id: 1,
        name: "Anime",
        icon: LegoSmileyIcon,
        iconColor: "#f472b6",
        value: "ANIME",
      },
      {
        id: 2,
        name: "Marvel",
        icon: GavelIcon,
        iconColor: "#ef4444",
        value: "MARVEL",
      },
      {
        id: 3,
        name: "Disney",
        icon: FilmSlateIcon,
        iconColor: "#38bdf8",
        value: "DISNEY",
      },
      {
        id: 4,
        name: "Star Wars",
        icon: FlyingSaucerIcon,
        iconColor: "#6b7280",
        value: "STAR_WARS",
      },
      {
        id: 5,
        name: "Nature",
        icon: IslandIcon,
        iconColor: "#10b981",
        value: "NATURE",
      },
      {
        id: 6,
        name: "Space",
        icon: RocketLaunchIcon,
        iconColor: "#3b82f6",
        value: "SPACE",
      },
      {
        id: 7,
        name: "Cyberpunk",
        icon: RobotIcon,
        iconColor: "#d946ef",
        value: "CYBERPUNK",
      },
      {
        id: 8,
        name: "Video Games",
        icon: GameControllerIcon,
        iconColor: "#facc15",
        value: "VIDEO_GAMES",
      },
    ],
  },
  {
    id: 5,
    name: "materials",
    title: "Choose Materials",
    description: "Choose materials as a base for your artworks.",
    picks: [
      {
        id: 1,
        name: "Canvas",
        icon: PaletteIcon,
        iconColor: "#f97316",
        value: "CANVAS",
      },
      {
        id: 2,
        name: "Cloth",
        icon: TShirtIcon,
        iconColor: "#22d3ee",
        value: "CLOTH",
      },
      {
        id: 3,
        name: "Paper",
        icon: FileTextIcon,
        iconColor: "#94a3b8",
        value: "PAPER",
      },
      {
        id: 4,
        name: "Wood",
        icon: LogIcon,
        iconColor: "#78350f",
        value: "WOOD",
      },
      {
        id: 5,
        name: "Glass",
        icon: FlaskIcon,
        iconColor: "#60a5fa",
        value: "GLASS",
      },
      {
        id: 6,
        name: "Metal",
        icon: WrenchIcon,
        iconColor: "#9ca3af",
        value: "METAL",
      },
      {
        id: 7,
        name: "Plastic",
        icon: PillBottleIcon,
        iconColor: "#6ee7b7",
        value: "PLASTIC",
      },
    ],
  },
  {
    id: 6,
    name: "media",
    title: "Select Medium",
    description: "Select the medium you prefer for your artworks.",
    picks: [
      {
        id: 1,
        name: "Oil",
        icon: PaintBucketIcon,
        iconColor: "#f97316",
        value: "OIL",
      },
      {
        id: 2,
        name: "Pencil",
        icon: PencilLineIcon,
        iconColor: "#94a3b8",
        value: "PENCIL",
      },
      { id: 3, name: "Pen", icon: Pen, iconColor: "#334155", value: "PEN" },
      {
        id: 4,
        name: "Acrylic",
        icon: BroomIcon,
        iconColor: "#3b82f6",
        value: "ACRYLIC",
      },
      {
        id: 5,
        name: "Charcoal",
        icon: LogIcon,
        iconColor: "#1f2937",
        value: "CHARCOAL",
      },
      {
        id: 6,
        name: "Watercolor",
        icon: FlaskIcon,
        iconColor: "#38bdf8",
        value: "WATERCOLOR",
      },
      {
        id: 7,
        name: "Marker",
        icon: PenIcon,
        iconColor: "#e11d48",
        value: "MARKER",
      },
    ],
  },
];
