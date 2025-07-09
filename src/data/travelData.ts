// Sample walking coordinates (longitude, latitude, height)
// In real life, this would be populated from GPS data logged every minute
export interface TravelPoint {
  longitude: number;
  latitude: number;
  height: number;
  timestamp: Date;
}

// Sample 50 coordinates simulating a walk around a city area (approximately 500m apart)
export const sampleWalkingData: TravelPoint[] = [
  { longitude: -122.4194, latitude: 37.7749, height: 50, timestamp: new Date('2025-07-08T09:00:00Z') },
  { longitude: -122.4194, latitude: 37.7754, height: 52, timestamp: new Date('2025-07-08T09:01:00Z') },
  { longitude: -122.4194, latitude: 37.7759, height: 54, timestamp: new Date('2025-07-08T09:02:00Z') },
  { longitude: -122.4194, latitude: 37.7764, height: 56, timestamp: new Date('2025-07-08T09:03:00Z') },
  { longitude: -122.4194, latitude: 37.7769, height: 58, timestamp: new Date('2025-07-08T09:04:00Z') },
  { longitude: -122.4199, latitude: 37.7769, height: 60, timestamp: new Date('2025-07-08T09:05:00Z') },
  { longitude: -122.4204, latitude: 37.7769, height: 62, timestamp: new Date('2025-07-08T09:06:00Z') },
  { longitude: -122.4209, latitude: 37.7769, height: 64, timestamp: new Date('2025-07-08T09:07:00Z') },
  { longitude: -122.4214, latitude: 37.7769, height: 66, timestamp: new Date('2025-07-08T09:08:00Z') },
  { longitude: -122.4219, latitude: 37.7769, height: 68, timestamp: new Date('2025-07-08T09:09:00Z') },
  { longitude: -122.4219, latitude: 37.7774, height: 70, timestamp: new Date('2025-07-08T09:10:00Z') },
  { longitude: -122.4219, latitude: 37.7779, height: 72, timestamp: new Date('2025-07-08T09:11:00Z') },
  { longitude: -122.4219, latitude: 37.7784, height: 74, timestamp: new Date('2025-07-08T09:12:00Z') },
  { longitude: -122.4219, latitude: 37.7789, height: 76, timestamp: new Date('2025-07-08T09:13:00Z') },
  { longitude: -122.4219, latitude: 37.7794, height: 78, timestamp: new Date('2025-07-08T09:14:00Z') },
  { longitude: -122.4214, latitude: 37.7794, height: 80, timestamp: new Date('2025-07-08T09:15:00Z') },
  { longitude: -122.4209, latitude: 37.7794, height: 82, timestamp: new Date('2025-07-08T09:16:00Z') },
  { longitude: -122.4204, latitude: 37.7794, height: 84, timestamp: new Date('2025-07-08T09:17:00Z') },
  { longitude: -122.4199, latitude: 37.7794, height: 86, timestamp: new Date('2025-07-08T09:18:00Z') },
  { longitude: -122.4194, latitude: 37.7794, height: 88, timestamp: new Date('2025-07-08T09:19:00Z') },
  { longitude: -122.4189, latitude: 37.7794, height: 90, timestamp: new Date('2025-07-08T09:20:00Z') },
  { longitude: -122.4184, latitude: 37.7794, height: 92, timestamp: new Date('2025-07-08T09:21:00Z') },
  { longitude: -122.4179, latitude: 37.7794, height: 94, timestamp: new Date('2025-07-08T09:22:00Z') },
  { longitude: -122.4174, latitude: 37.7794, height: 96, timestamp: new Date('2025-07-08T09:23:00Z') },
  { longitude: -122.4169, latitude: 37.7794, height: 98, timestamp: new Date('2025-07-08T09:24:00Z') },
  { longitude: -122.4169, latitude: 37.7789, height: 100, timestamp: new Date('2025-07-08T09:25:00Z') },
  { longitude: -122.4169, latitude: 37.7784, height: 102, timestamp: new Date('2025-07-08T09:26:00Z') },
  { longitude: -122.4169, latitude: 37.7779, height: 104, timestamp: new Date('2025-07-08T09:27:00Z') },
  { longitude: -122.4169, latitude: 37.7774, height: 106, timestamp: new Date('2025-07-08T09:28:00Z') },
  { longitude: -122.4169, latitude: 37.7769, height: 108, timestamp: new Date('2025-07-08T09:29:00Z') },
  { longitude: -122.4169, latitude: 37.7764, height: 110, timestamp: new Date('2025-07-08T09:30:00Z') },
  { longitude: -122.4169, latitude: 37.7759, height: 112, timestamp: new Date('2025-07-08T09:31:00Z') },
  { longitude: -122.4169, latitude: 37.7754, height: 114, timestamp: new Date('2025-07-08T09:32:00Z') },
  { longitude: -122.4169, latitude: 37.7749, height: 116, timestamp: new Date('2025-07-08T09:33:00Z') },
  { longitude: -122.4174, latitude: 37.7749, height: 118, timestamp: new Date('2025-07-08T09:34:00Z') },
  { longitude: -122.4179, latitude: 37.7749, height: 120, timestamp: new Date('2025-07-08T09:35:00Z') },
  { longitude: -122.4184, latitude: 37.7749, height: 122, timestamp: new Date('2025-07-08T09:36:00Z') },
  { longitude: -122.4189, latitude: 37.7749, height: 124, timestamp: new Date('2025-07-08T09:37:00Z') },
  { longitude: -122.4194, latitude: 37.7744, height: 126, timestamp: new Date('2025-07-08T09:38:00Z') },
  { longitude: -122.4194, latitude: 37.7739, height: 128, timestamp: new Date('2025-07-08T09:39:00Z') },
  { longitude: -122.4194, latitude: 37.7734, height: 130, timestamp: new Date('2025-07-08T09:40:00Z') },
  { longitude: -122.4194, latitude: 37.7729, height: 132, timestamp: new Date('2025-07-08T09:41:00Z') },
  { longitude: -122.4194, latitude: 37.7724, height: 134, timestamp: new Date('2025-07-08T09:42:00Z') },
  { longitude: -122.4199, latitude: 37.7724, height: 136, timestamp: new Date('2025-07-08T09:43:00Z') },
  { longitude: -122.4204, latitude: 37.7724, height: 138, timestamp: new Date('2025-07-08T09:44:00Z') },
  { longitude: -122.4209, latitude: 37.7724, height: 140, timestamp: new Date('2025-07-08T09:45:00Z') },
  { longitude: -122.4214, latitude: 37.7724, height: 142, timestamp: new Date('2025-07-08T09:46:00Z') },
  { longitude: -122.4219, latitude: 37.7724, height: 144, timestamp: new Date('2025-07-08T09:47:00Z') },
  { longitude: -122.4224, latitude: 37.7724, height: 146, timestamp: new Date('2025-07-08T09:48:00Z') },
  { longitude: -122.4229, latitude: 37.7724, height: 148, timestamp: new Date('2025-07-08T09:49:00Z') }
];
