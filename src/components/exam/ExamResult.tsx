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
        <Typography variant="h4" gutterBottom>Exam Result</Typography>
        <Typography variant="h6">Score: {state.score}</Typography>
        <Typography>Total Questions: {state.totalQuestions}</Typography>
        <Typography>Passing Score: {state.passingScore}</Typography>
        <Typography>
          {state.score >= state.passingScore ? 'Congratulations, you passed!' : 'Sorry, you did not pass.'}
        </Typography>
        <Button sx={{ mt: 2 }} onClick={() => navigate('/dashboard')}>Back to Dashboard</Button>
      </Paper>
    </Box>
  );
}; 