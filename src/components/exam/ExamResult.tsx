import React from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import { Box, Typography, Button, Paper } from '@mui/material';

export const ExamResult: React.FC = () => {
  const { state } = useLocation();
  const { examId } = useParams();

  console.log(examId);
  const navigate = useNavigate();

  if (!state) {
    return (
      <Box p={4}>
        <Typography variant="h5" color="error">No result data found.</Typography>
        <Button onClick={() => navigate('/dashboard')}>Go to Dashboard</Button>
      </Box>
    );
  }

  return (
    <Box p={4}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>Exam Submitted</Typography>
        <Typography variant="h6" sx={{ mt: 2 }}>
          Your answers have been marked and you will get your score when your teacher has graded them.
        </Typography>
        <Button sx={{ mt: 4 }} onClick={() => navigate('/dashboard')}>Back to Dashboard</Button>
      </Paper>
    </Box>
  );
}; 