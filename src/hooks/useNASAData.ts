import { useState, useEffect } from 'react';
import { NASAService, NASAEvent } from '../services/nasaApi';

export const useNASAData = (date: Date) => {
  const [nasaEvent, setNasaEvent] = useState<NASAEvent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNASAData = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const dateString = NASAService.formatDateForAPI(date);
        const apodData = await NASAService.getAstronomyPictureOfDay(dateString);
        
        if (apodData) {
          setNasaEvent(apodData);
        } else {
          // Fallback to current date if specific date fails
          const currentData = await NASAService.getAstronomyPictureOfDay();
          setNasaEvent(currentData);
        }
      } catch (err) {
        setError('Failed to fetch NASA data');
        console.error('NASA API Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchNASAData();
  }, [date]);

  return { nasaEvent, loading, error };
};