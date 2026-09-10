import { Stack, Grid2 } from '@mui/material';
import { TeamMemberCard } from '../../molecules';
import { TeamMember } from '../../../constants/team.constant';

interface TeamSectionProps {
  members: TeamMember[];
}

export default function TeamSection({ members }: TeamSectionProps) {
  return (
    <Stack mt={10} gap={5} sx={{ width: '100%', alignItems: 'center' }}>
      <Grid2 container spacing={4} justifyContent="center" alignItems="stretch" columns={12} sx={{ maxWidth: '1200px', width: '100%', px: { xs: 2, md: 4 } }}>
        {members.map((member, index) => (
          <Grid2 size={{ xs: 12, sm: 6, md: 4 }} key={index} sx={{ display: 'flex' }}>
            <TeamMemberCard {...member} />
          </Grid2>
        ))}
      </Grid2>
    </Stack>
  );
}
