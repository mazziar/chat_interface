'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Grid, TextField, Button, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '@/core/hooks';
import { setName } from '@/core/features/sessionSlice';

const generateGuestName = () => `Guest${Math.floor(1000 + Math.random() * 9000)}`;

export default function MainPage() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const name = useAppSelector((state) => state.sessionSlice.name);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (name) {
      router.push('/chat');
    }
  }, [name, router]);

  const startWithName = (newName: string) => {
    dispatch(setName(newName));
    router.push('/chat');
  };

  const handleSubmit = () => {
    startWithName(inputValue.trim() || generateGuestName());
  };

  const handleRandomName = () => {
    startWithName(generateGuestName());
  };

  if (name) {
    return (
      <Grid sx={{ textAlign: 'center', p: 4 }}>
        <Typography variant="h5">Welcome, {name}!</Typography>
      </Grid>
    );
  }

  return (
    <Grid sx={{ textAlign: 'center', p: 4, bgcolor: 'background.paper', borderRadius: 2 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Welcome!
      </Typography>

      <Typography variant="h6" sx={{ mb: 2 }}>
        Write your name and start chat!
      </Typography>

      <Grid container direction="row" spacing={1} >
        <Grid size='grow'>
          <TextField
            size="small"
            fullWidth
            placeholder="Your name"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSubmit();
            }}
          />
        </Grid>

        <Grid>
          <Button variant="contained" disabled={!inputValue.trim()} onClick={handleSubmit}>
            Start
          </Button>
        </Grid>

        <Grid>
          <Button variant="contained" color='info' onClick={handleRandomName}>
            Start with random name
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
