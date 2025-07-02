export interface NASAEvent {
  date: string;
  title: string;
  explanation: string;
  url?: string;
  media_type?: string;
  hdurl?: string;
}

export interface NASANeoWs {
  near_earth_objects: {
    [date: string]: Array<{
      name: string;
      estimated_diameter: {
        meters: {
          estimated_diameter_min: number;
          estimated_diameter_max: number;
        };
      };
      close_approach_data: Array<{
        close_approach_date: string;
        miss_distance: {
          kilometers: string;
        };
      }>;
    }>;
  };
}

const NASA_API_KEY = 'DEMO_KEY'; // Using demo key for now
const NASA_BASE_URL = 'https://api.nasa.gov';

export class NASAService {
  static async getAstronomyPictureOfDay(date?: string): Promise<NASAEvent | null> {
    try {
      const dateParam = date ? `&date=${date}` : '';
      const response = await fetch(
        `${NASA_BASE_URL}/planetary/apod?api_key=${NASA_API_KEY}${dateParam}`
      );
      
      if (!response.ok) {
        throw new Error(`NASA API error: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error fetching NASA APOD:', error);
      return null;
    }
  }

  static async getNearEarthObjects(startDate: string, endDate: string): Promise<NASANeoWs | null> {
    try {
      const response = await fetch(
        `${NASA_BASE_URL}/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${NASA_API_KEY}`
      );
      
      if (!response.ok) {
        throw new Error(`NASA NEO API error: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error fetching NASA NEO data:', error);
      return null;
    }
  }

  static async getMarsWeather(): Promise<any> {
    try {
      const response = await fetch(
        `${NASA_BASE_URL}/insight_weather/?api_key=${NASA_API_KEY}&feedtype=json&ver=1.0`
      );
      
      if (!response.ok) {
        throw new Error(`NASA Mars Weather API error: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error fetching Mars weather:', error);
      return null;
    }
  }

  static formatDateForAPI(date: Date): string {
    return date.toISOString().split('T')[0];
  }
}