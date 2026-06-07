import React from 'react';
import { Dialog, DialogTitle, DialogContent, Typography, IconButton } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import { useInteractionStore } from '../stores/interactionStore';

export const InfoPanel: React.FC = () => {
  const { activeExhibit, setActiveExhibit } = useInteractionStore();

  return (
    <Dialog 
      open={!!activeExhibit} 
      onClose={() => setActiveExhibit(null)}
      maxWidth='sm'
      fullWidth
    >
      <DialogTitle>
        Информация об экспонате
        <IconButton
          aria-label='close'
          onClick={() => setActiveExhibit(null)}
          sx={{ position: 'absolute', right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        {activeExhibit && (
          <>
            <Typography variant='h6' gutterBottom>
              {activeExhibit.title}
            </Typography>
            <Typography variant='body1'>
              {activeExhibit.description}
            </Typography>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};
