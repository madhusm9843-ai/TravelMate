// Local catalogue keeps destination cards visible even when the API is offline.
export const DESTINATION_FALLBACK = [
  { id: "kerala", region: "India", name: "Kerala", country: "India", tagline: "Backwaters, Hills & Coastal Charm", days: "5 Days", image: "/destination-images/kerala-munnar.avif" },
  { id: "goa", region: "India", name: "Goa", country: "India", tagline: "Beaches, Cafés & Sunsets", days: "3–4 Days", image: "/destination-images/goa.jpeg" },
  { id: "rajasthan", region: "India", name: "Rajasthan", country: "India", tagline: "Forts, Palaces & Desert Nights", days: "6 Days", image: "/destination-images/rajasthan.jpg" },
  { id: "himachal", region: "India", name: "Himachal Pradesh", country: "India", tagline: "Snow, Alpine Valleys & Villages", days: "5 Days", image: "/destination-images/himachal-pradesh.jpeg" },
  { id: "tamilnadu", region: "India", name: "Tamil Nadu", country: "India", tagline: "Temples, Coasts & Hill Stations", days: "5 Days", image: "/destination-images/tamil-nadu.jpeg" },
  { id: "karnataka", region: "India", name: "Karnataka", country: "India", tagline: "Palaces, Coffee Hills & Coastline", days: "5 Days", image: "/destination-images/karnataka.jpeg" },
  { id: "ladakh", region: "India", name: "Ladakh", country: "India", tagline: "Moonscapes, Monasteries & High-Altitude Lakes", days: "7 Days", image: "/destination-images/ladakh.jpeg" },
  { id: "andaman", region: "India", name: "Andaman Islands", country: "India", tagline: "Turquoise Waters & Coral Reefs", days: "5 Days", image: "/destination-images/andaman.jpeg" },
  { id: "meghalaya", region: "India", name: "Meghalaya", country: "India", tagline: "Living Root Bridges & Cloud Villages", days: "5 Days", image: "/destination-images/meghalaya.jpeg" },
];

export const DESTINATION_IMAGE_OVERRIDES = Object.fromEntries(
  DESTINATION_FALLBACK.map(({ id, image }) => [id, image])
);
